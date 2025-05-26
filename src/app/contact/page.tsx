"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just simulate submit
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      {submitted && (
        <p className="mb-4 text-green-400">Thank you for reaching out! We will get back to you shortly.</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 rounded bg-gray-700 text-white"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 rounded bg-gray-700 text-white"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          required
          className="w-full p-3 rounded bg-gray-700 text-white"
        />
        <button
          type="submit"
          className="bg-accent px-6 py-3 rounded font-semibold hover:bg-cyan-400 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
