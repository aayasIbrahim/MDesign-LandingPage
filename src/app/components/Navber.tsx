"use client";
import Image from "next/image";
import Link from "next/link";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/skill", label: "Skill" },
  { href: "/protfolio", label: "Protfolio" },
  { href: "/testimonial", label: "Testimonial" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md   fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left: Logo */}

        <Link href="/" className="flex items-center">
          <Image
            src="/Logo.png" // put your logo inside the public folder (e.g., /public/logo.png)
            alt="Ayas Logo"
            width={140} // adjust size
            height={140}
            className="mr-2"
          />
        </Link>

        {/* Middle: Nav Links (desktop) */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-indigo-600 font-medium transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Download CV Button */}
        <div className="hidden md:block">
          <a
            href="/cv/AyasIbrahimCV.pdf" // put your CV inside public/cv folder
            download
            className="bg-white text-black px-5 py-4  rounded-xl font-semibold shadow-md border border-green-400 transition"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-indigo-600 font-medium transition"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* CV Button in mobile */}
            <a
              href="/cv/AyasIbrahimCV.pdf"
              download
              className="bg-white text-black px-4 py-2 rounded-xl text-center font-semibold shadow-md "
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
