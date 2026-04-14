export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const nodemailer = require("nodemailer");
  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (!process.env.EMAIL || !process.env.APP_PASSWORD) {
    return res.status(500).json({
      message:
        "Server email is not configured. Set EMAIL and APP_PASSWORD in environment variables.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    const esc = (v) =>
      String(v ?? "").replace(/[&<>"']/g, (c) => {
        const map = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;",
        };
        return map[c] ?? c;
      });

    const safeName = esc(name);
    const safeEmail = esc(email);
    const safeMessage = esc(message);

    const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Portfolio Message</title>
  </head>
  <body style="margin:0;padding:0;background:#050a06;color:rgba(209,250,229,0.92);font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace;">
    <div style="max-width:720px;margin:0 auto;padding:24px;">
      <div style="border:1px solid rgba(34,197,94,0.22);background:rgba(4,18,9,0.72);border-radius:16px;overflow:hidden;box-shadow:0 0 0 1px rgba(34,197,94,0.08) inset,0 18px 50px rgba(0,0,0,0.55);">
        <div style="padding:14px 18px;border-bottom:1px solid rgba(34,197,94,0.18);background:rgba(0,0,0,0.35);">
          <div style="font-size:12px;letter-spacing:0.22em;color:rgba(134,239,172,0.70);">
            sumit@folio:~$ <span style="color:rgba(209,250,229,0.92);letter-spacing:normal;">mail</span>
          </div>
        </div>

        <div style="padding:18px;">
          <h1 style="margin:0 0 10px 0;font-size:18px;line-height:1.3;color:rgba(236,253,245,0.95);text-shadow:0 0 18px rgba(34,197,94,0.25);">
            New message from your portfolio
          </h1>
          <p style="margin:0 0 16px 0;font-size:13px;line-height:1.6;color:rgba(134,239,172,0.70);">
            Incoming transmission received. Details below.
          </p>

          <div style="border:1px solid rgba(34,197,94,0.18);background:rgba(0,0,0,0.35);border-radius:12px;padding:14px;">
            <div style="font-size:12px;line-height:1.6;">
              <div style="margin:0 0 6px 0;">
                <span style="color:rgba(134,239,172,0.70);">from:</span>
                <span style="color:rgba(209,250,229,0.92);"> ${safeName}</span>
              </div>
              <div style="margin:0 0 10px 0;">
                <span style="color:rgba(134,239,172,0.70);">reply-to:</span>
                <span style="color:rgba(209,250,229,0.92);"> ${safeEmail}</span>
              </div>
              <div style="margin:0 0 6px 0;color:rgba(134,239,172,0.70);">message:</div>
              <pre style="margin:0;white-space:pre-wrap;word-wrap:break-word;font-size:12px;line-height:1.7;color:rgba(209,250,229,0.92);">${safeMessage}</pre>
            </div>
          </div>

          <p style="margin:14px 0 0 0;font-size:11px;line-height:1.5;color:rgba(134,239,172,0.55);">
            Tip: just hit “reply” in your email client to respond — this email sets <code style="color:rgba(0,255,135,0.9);">Reply-To</code> to the sender.
          </p>
        </div>
      </div>
    </div>
  </body>
</html>`;

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "Portfolio Message",
      text: `New portfolio message:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`,
      html,
      replyTo: email,
    });

    return res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact email send failed:", error);
    const code = error?.code;
    if (code === "EAUTH") {
      return res.status(500).json({
        message:
          "Email login failed (EAUTH). If using Gmail, use a Google App Password (not your normal password) and ensure 2FA is enabled.",
      });
    }
    return res.status(500).json({ message: "Failed to send message." });
  }
}
