"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full top-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300 transition">
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#about" className="text-gray-400 hover:text-gray-200 transition font-medium">
            About
          </a>
          <a
            href="#certificates"
            className="text-gray-400 hover:text-gray-200 transition font-medium"
          >
            Certificates
          </a>
          <a href="#projects" className="text-gray-400 hover:text-gray-200 transition font-medium">
            Work
          </a>

          <a href="#contact" className="text-gray-400 hover:text-gray-200 transition font-medium">
            Contact
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition font-medium"
          >
            GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-slate-300 transition ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-slate-300 transition ${isOpen ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-slate-300 transition ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-4 py-4 space-y-4">
            <a
              href="#about"
              className="block text-gray-400 hover:text-gray-200 transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="block text-gray-400 hover:text-gray-200 transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              Work
            </a>
            <a
              href="#certificates"
              className="block text-gray-400 hover:text-gray-200 transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              Certificates
            </a>
            <a
              href="#contact"
              className="block text-gray-400 hover:text-gray-200 transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition font-medium text-center"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
