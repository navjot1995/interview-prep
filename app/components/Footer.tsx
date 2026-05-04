"use client";

import Link from "next/link";
import { theme } from "@/app/theme";
import { SiGithub } from "react-icons/si";
import { FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Image from "next/image";

export default function Footer() {
  const quickLinks = [
    { name: "JavaScript", path: "/javascript" },
    { name: "React.js", path: "/reactjs" },
    { name: "Node.js", path: "/nodejs" },
    { name: "Database", path: "/database" },
  ];

  const resources = [
    { name: "About Us", path: "/about-us" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo-trans.png"
                alt="Logo"
                width={50}
                height={50}
                className="hidden sm:inline-block"
              />
              <span
                className="text-xl font-bold"
                style={{ color: theme.primary }}
              >
                InterviewPrep
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Master technical interviews with our comprehensive question bank
              and detailed answers.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SiGithub size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitterSquare size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest interview questions and tips
            </p>
            <div className="flex">
              <input
                suppressHydrationWarning

                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-lg border text-gray-900 focus:outline-none"
                style={{
                  borderColor: "var(--primary)",
                }}
              />
              <button
                className="px-4 py-2 rounded-r-lg text-white font-medium transition-colors"
                style={{ backgroundColor: theme.primary }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 InterviewPrep. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
