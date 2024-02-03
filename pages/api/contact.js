export default function handler(req, res) {
  let nodemailer = require("nodemailer");
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "Portfolio Message",
    text: `Hi Sumit Someone wiith ${name} is trying to contact Your and his/her message is ${message},reply back on this ${email} address`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(400).json({ message: `Error in sending Message 😓` });
    } else {
      res
        .status(200)
        .json({ message: `Your message sented successfully to Sumit! 🥳 ` });
    }
  });
}
