import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 py-4">
        {/* Logo or Name */}
        <div className="text-xl sm:text-2xl font-bold tracking-tight text-blue-400">
          Michael Jeffrey Celestino
        </div>

        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
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

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8 text-sm font-medium">
          <AnchorLink
            href="#hero"
            className="hover:text-blue-400 transition"
          >
            Home
          </AnchorLink>
          <AnchorLink
            href="#about"
            className="hover:text-blue-400 transition"
          >
            About Me
          </AnchorLink>
          <AnchorLink
            href="#projects"
            className="hover:text-blue-400 transition"
          >
            Projects
          </AnchorLink>
          <AnchorLink
            href="#experience"
            className="hover:text-blue-400 transition"
          >
            Experience
          </AnchorLink>
          <a
            href="/CELESTINO_MJ_RESUME.pdf"
            download
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="sm:hidden bg-gray-900 px-4 pb-4 pt-2 space-y-3 text-sm font-medium">
          <AnchorLink
            href="#hero"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-400 transition"
          >
            Home
          </AnchorLink>
          <AnchorLink
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-400 transition"
          >
            About Me
          </AnchorLink>
          <AnchorLink
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-400 transition"
          >
            Projects
          </AnchorLink>
          <AnchorLink
            href="#experience"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-400 transition"
          >
            Experince
          </AnchorLink>
          <a
            href="/CELESTINO_MJ_RESUME.pdf"
            download
            className="block bg-blue-500 hover:bg-blue-600 text-white w-full text-center py-2 rounded-md transition"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
