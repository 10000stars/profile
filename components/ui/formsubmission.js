"use client"

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/myzpdzky", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      form.reset();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000); // hide after 3s
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
    <input
      type="text"
      name="name"
      id="name"
      className="w-full rounded-md border border-gray-400 px-3 py-2 text-white bg-transparent placeholder-gray-400"
      placeholder="Your name"
    />
  </div>

  <div>
    <input
      type="email"
      name="email"
      id="email"
      className="w-full rounded-md border border-gray-400 px-3 py-2 text-white bg-transparent placeholder-gray-400"
      placeholder="Your email"
    />
  </div>

  <div>
    <textarea
      name="message"
      id="message"
      rows="5"
      required
      className="w-full rounded-md border border-gray-400 px-3 py-2 text-white bg-transparent placeholder-gray-400"
      placeholder="Write your message..."
    ></textarea>
  </div>

<button
  type="submit"
  className="bg-amber-500 hover:bg-amber-600 text-black font-medium py-2 px-6 rounded-md shadow transition-colors"
>
  Send
</button>
</form>

      {submitted && (
        <div className="mt-4 text-green-400 font-medium">
          ✅ Message sent! Thanks for reaching out.
        </div>
      )}
    </div>
  );
}
