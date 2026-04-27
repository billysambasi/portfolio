'use client'

import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black border-b border-zinc-800 text-white z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-2xl font-bold">
          <span className="text-white">billysambasi</span>
          <span className="text-zinc-400">-portfolio</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-zinc-300 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* GitHub & Resume Buttons */}
        <div className="hidden md:flex gap-4">
          <a
            href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-zinc-400 text-zinc-400 rounded hover:bg-zinc-400 hover:text-black transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block hover:text-zinc-300 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 border border-zinc-400 text-zinc-400 rounded hover:bg-zinc-400 hover:text-black transition-colors text-center"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}