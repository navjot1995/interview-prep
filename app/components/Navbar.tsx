"use client";

import { useState } from "react";
import Link from "next/link";
import { SiJavascript, SiReact, SiNodedotjs } from "react-icons/si";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { theme } from "@/app/theme";
import { FiDatabase } from "react-icons/fi";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: "JavaScript",
      path: "/javascript",
      icon: <SiJavascript className="text-yellow-500" />,
    },
    {
      name: "React.js",
      path: "/reactjs",
      icon: <SiReact className="text-blue-500" />,
    },
    {
      name: "Node.js",
      path: "/nodejs",
      icon: <SiNodedotjs className="text-green-600" />,
    },
    {
      name: "Database",
      path: "/database",
      icon: <FiDatabase className="text-blue-600" />,
    },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-1">
              <Image
                src="/images/interviewPrep-logo-trans.png"
                alt="Logo"
                width={191}
                height={60}
                className="hidden sm:inline-block w-auto h-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-gray-900 transition-all flex items-center gap-2 hover:bg-gray-50"
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-slideIn">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
