import React from "react";
import styles from "./index.module.css";
import axios from "axios";
import toast from "react-hot-toast";

function SmallField({ type, name, value, setValue, placeholder }) {
  return (
    <div
      className="small-field bg-gray-100 dark:bg-gray-700 w-full rounded-md dark:rounded-none"
      style={{
        height: 70,
      }}
    >
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        autoComplete="off"
        onChange={(e) => setValue(e.target.value)}
        className="rounded-md dark:rounded-none h-full w-full bg-transparent px-3"
      />
    </div>
  );
}

function LargeField({ name, value, setValue, placeholder }) {
  return (
    <div
      className="small-field bg-gray-100 dark:bg-gray-700 w-full rounded-md dark:rounded-none"
      style={{
        height: 215,
      }}
    >
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        autoComplete="off"
        onChange={(e) => setValue(e.target.value)}
        className="h-full w-full bg-transparent px-3 py-3 resize-none rounded-md dark:rounded-none"
      ></textarea>
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
    <footer
      id="contact"
      className={`${styles.footer} py-12 grid grid-cols-1 lg:grid-cols-2 gap-32`}
    >
      <div className="about-footer">
        <h3 className="text-3xl mb-8">Lets work together</h3>
        <p> Have a project idea? I am available for new projects! </p>
      </div>
      <form
        className="contact-footer flex flex-col gap-3 items-start"
        onSubmit={handleContact}
      >
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
        <LargeField
          value={message}
          setValue={setMessage}
          placeholder="Type your message here"
          name="message"
        />
        <button
          type="submit"
          className="px-3 py-2 bg-black/80 dark:bg-white dark:text-black text-white w-32 h-12 cursor-pointer flex items-center justify-center gap-3"
        >
          {loading && (
            <svg
              class="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
          {!loading && <span>Submit</span>}
        </button>
      </form>
    </footer>
  );
}

export default Footer;
