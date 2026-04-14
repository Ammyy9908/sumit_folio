import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Container from "../ui/Container";
import Card from "../ui/Card";
import Button from "../ui/Button";

function SmallField({ type, name, value, setValue, placeholder }) {
  return (
    <div className="w-full">
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        autoComplete="off"
        onChange={(e) => setValue(e.target.value)}
        className="h-12 w-full rounded-xl border border-emerald-300/20 bg-black/40 px-4 text-sm text-emerald-50 outline-none placeholder:text-emerald-200/35 focus:ring-2 focus:ring-emerald-400/30"
      />
    </div>
  );
}

function LargeField({ name, value, setValue, placeholder }) {
  return (
    <div className="w-full">
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        autoComplete="off"
        onChange={(e) => setValue(e.target.value)}
        className="h-36 w-full resize-none rounded-xl border border-emerald-300/20 bg-black/40 px-4 py-3 text-sm text-emerald-50 outline-none placeholder:text-emerald-200/35 focus:ring-2 focus:ring-emerald-400/30"
      />
    </div>
  );
}

function Footer() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleContact = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!name || !email || !message) {
        toast.error("You must provide all required fields!");
        setLoading(false);
        clearForm();
        return;
      }
      const r = await axios.post("/api/contact", {
        name,
        email,
        message,
      });
      toast(r.data.message);
      setLoading(false);
      clearForm();
    } catch (e) {
      if (e) {
        toast.error("Error in Sending Message");
        setLoading(false);
        clearForm();
      }
    }
  };
  return (
    <footer id="contact" className="border-t border-emerald-300/15 py-16">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-emerald-50 terminal-glow sm:text-3xl">
              Request freelance work
            </h3>
            <p className="mt-3 max-w-prose text-base leading-relaxed text-emerald-200/70">
              Share your idea, timeline, and budget range. I’ll reply with a plan and next steps.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="ghost" href="#work">
                See work
              </Button>
              <Button href="mailto:hello@yourdomain.com">Email me</Button>
            </div>
          </div>

          <Card className="p-6 sm:p-8">
            <form
              className="flex flex-col gap-4"
              method="post"
              action="/api/contact"
              onSubmit={handleContact}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <SmallField
                  value={name}
                  setValue={setName}
                  type="text"
                  placeholder="Name"
                  name="Name"
                />
                <SmallField
                  value={email}
                  setValue={setEmail}
                  type="email"
                  placeholder="Email"
                  name="Email"
                />
              </div>
              <LargeField
                value={message}
                setValue={setMessage}
                placeholder="What are you building? Include scope, timeline, and budget range."
                name="message"
              />
              <Button
                as="button"
                type="submit"
                className="h-11 w-full sm:w-40"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="relative inline-flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300/70 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300" />
                    </span>
                    Sending…
                  </>
                ) : (
                  "Send"
                )}
              </Button>
            </form>
          </Card>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-emerald-300/15 pt-8 text-sm text-emerald-200/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Sumit Kumar</p>
          <a
            className="terminal-link"
            href="#top"
          >
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
