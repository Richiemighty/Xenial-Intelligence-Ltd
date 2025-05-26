"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-red-900 text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Xenial Intelligence
        </Link>
        <div className="hidden md:flex space-x-8 text-lg">
          <Link href="/" className="hover:text-accent transition">Home</Link>
          <Link href="/about" className="hover:text-accent transition">About</Link>
          <Link href="/services" className="hover:text-accent transition">Services</Link>
          <Link href="/contact" className="hover:text-accent transition">Contact</Link>
          <Link href="/chatbot" className="hover:text-accent transition">Chatbot</Link>
          <Link href="/voice-assistant" className="hover:text-accent transition">Voice AI</Link>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          className="md:hidden bg-red-900 px-6 pb-4 space-y-3 text-lg"
        >
          <Link href="/" onClick={() => setMenuOpen(false)} className="block hover:text-accent transition">Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="block hover:text-accent transition">About</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)} className="block hover:text-accent transition">Services</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-accent transition">Contact</Link>
          <Link href="/chatbot" onClick={() => setMenuOpen(false)} className="block hover:text-accent transition">Chatbot</Link>
          <Link href="/voice-assistant" onClick={() => setMenuOpen(false)} className="block hover:text-accent transition">Voice AI</Link>
        </motion.div>
      )}
    </nav>
  );
}
