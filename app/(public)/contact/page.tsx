"use client";

import { theme } from "@/app/theme";
import Image from "next/image";
import { useState } from "react";
import { FiMail, FiUser, FiMessageSquare } from "react-icons/fi";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Interview Prep - Contact",
//   description:
//     "Get in touch with the InterviewPrep team. Have questions or feedback? We'd love to hear from you.",
// };

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-white dark:bg-black">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT: IMAGE + TEXT */}
        <div className="text-center md:text-left">
          <Image
            src="/images/contact-illustration.png" // 👈 save your image here
            alt="Contact Illustration"
            width={500}
            height={500}
            className="w-full max-w-md mx-auto md:mx-0"
            priority
          />

          <h2 className="text-3xl font-bold mt-6 text-gray-900 dark:text-white">
            Let’s Connect
          </h2>

          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-md">
            Have questions about InterviewPrep? Need help or want to share
            feedback? We&apos;re here to help you succeed.
          </p>
        </div>

        {/* RIGHT: FORM */}
        <div
          className="p-8 rounded-2xl shadow-lg border"
          style={{ backgroundColor: "white" }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">
            Contact Form
          </h3>

          {/* Name */}
          <div
            className="flex items-center border rounded-lg px-3 mb-4 focus-within:ring-2"
            style={{ borderColor: theme.primaryLight }}
          >
            <FiUser className="text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-3 py-3 outline-none bg-transparent"
            />
          </div>

          {/* Email */}
          <div
            className="flex items-center border rounded-lg px-3 mb-4 focus-within:ring-2"
            style={{ borderColor: theme.primaryLight }}
          >
            <FiMail className="text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-3 outline-none bg-transparent"
            />
          </div>

          {/* Message */}
          <div
            className="flex items-start border rounded-lg px-3 py-2 mb-6 focus-within:ring-2"
            style={{ borderColor: theme.primaryLight }}
          >
            <FiMessageSquare className="text-gray-400 mt-2" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full px-3 py-2 outline-none bg-transparent resize-none"
            />
          </div>

          {/* Button */}
          <button
            className="w-full py-3 rounded-lg text-white font-semibold transition-all"
            style={{ backgroundColor: theme.primary }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = theme.primaryHover)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = theme.primary)
            }
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
