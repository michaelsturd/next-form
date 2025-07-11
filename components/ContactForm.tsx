'use client'; // required for using useState in App Router

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4 max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center text-blue-600">Contact Us</h2>

      {submitted ? (
        <p className="text-green-600 text-center">Thanks for your message, Seanmizzy will reply soon!</p>
      ) : (
        <>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border p-2 rounded"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border p-2 rounded"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full border p-2 rounded h-32"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </>
      )}
    </form>
  );
}
