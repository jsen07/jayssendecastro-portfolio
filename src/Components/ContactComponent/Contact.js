import React from "react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setMessage("Message has been sent! ✔️");
          form.current.reset();
        },
        (error) => {
          setMessage("Message failed to send ❌");
        }
      );
  };

  return (
    <section className="w-full text-neutral-200 font-poppins py-6">
      <h1 className="text-4xl mb-4 text-teal-400 my-6">Connect with me</h1>

      <p className="mb-8 text-base text-neutral-400">
        If you would like to contact me, please send me an email below. I would
        love to hear from you!
      </p>

      {/* Contact Form */}
      <div className="bg-neutral-900 py-6">
        <form ref={form} onSubmit={sendMail} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-neutral-300">Name</label>
            <input
              type="text"
              name="user_name"
              className="w-full px-4 py-2 rounded-md bg-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-neutral-300">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-2 rounded-md bg-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-neutral-300">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              className="w-full px-4 py-2 rounded-md bg-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Subject"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-neutral-300">
              Message
            </label>
            <textarea
              name="message"
              required
              className="w-full h-32 px-4 py-2 rounded-md bg-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
              placeholder="Write your message..."
            />
          </div>

          <div className="flex items-center justify-between">
            <input
              type="submit"
              value="Send"
              className=" border border-teal-600 text-teal-600 bg-neutral-900 text-teal-600 hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded-md transition-colors duration-300 cursor-pointer"
            />
            <span className="text-sm text-green-400">{message}</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
