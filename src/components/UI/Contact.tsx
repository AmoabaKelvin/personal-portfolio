import React from "react";
import { useState } from "react";
import { GrClose } from "react-icons/gr";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formValid, setFormValid] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Check if form is valid
    if (name && email && message) {
      // Send email
      const data = {
        name,
        email,
        message,
      };
      fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });

      setFormValid(true);

      // Clear the form
      setName("");
      setEmail("");
      setMessage("");
    }

    console.log(name, email, message);
  };

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold mb-4 text-left">Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="border-2 border-slate-300 rounded-md p-2 mt-2 dark:bg-slate-900"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name">Email</label>
            <input
              type="email"
              name="name"
              id="name"
              value={email}
              className="border-2 border-slate-300 rounded-md p-2 mt-2 dark:bg-slate-900"
              onChange={handleEmailChange}
            />
          </div>

          <div className="flex flex-col col-span-2">
            <label htmlFor="name">Message</label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              value={message}
              className="border-2 border-slate-300 rounded-md p-2 mt-2 dark:bg-slate-900"
              onChange={handleMessageChange}
            ></textarea>
          </div>

          <button
            className="bg-slate-300 text-black px-4 py-2 rounded-md mt-4 col-span-full w-2/4 mx-auto"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>

      {/* Thank you message. Displays if form is submitted and is valid */}
      <div className="mt-4">
        <div
          className={`bg-green-600 text-white px-10 py-5 rounded ${
            formValid ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-between items-center">
            <p>Thank you for your message!</p>
            <GrClose
              className="cursor-pointer"
              onClick={() => setFormValid(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
