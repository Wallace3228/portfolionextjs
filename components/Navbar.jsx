'use client'
import { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

/*
  Navbar is a client component because it manages menu state and uses window.scrollTo.
  Note: Next.js server components cannot access browser APIs.
*/
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="flex flex-wrap justify-between items-center px-4 py-2 sm:px-6 sm:py-3 md:py-4 gap-y-3">
        <button
          onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); closeMenu() }}
          className="text-lg sm:text-xl font-bold text-primary hover:text-blue-500"
        >
          Alex Matilla
        </button>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 dark:text-white text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-5 text-sm sm:text-base text-gray-700 dark:text-gray-200">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="cursor-pointer hover:text-blue-500 bg-transparent border-none p-0">Home</button>
          <a href="#projects" className="cursor-pointer hover:text-blue-500">Projects</a>
          <a href="#about" className="cursor-pointer hover:text-blue-500">About</a>
          <a href="#contact" className="cursor-pointer hover:text-blue-500">Contact</a>
          <a href="/assets/cv.pdf" download className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 whitespace-nowrap">Download CV</a>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}>
        <div className="flex flex-col items-center gap-4 text-gray-700 dark:text-gray-200">
          <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); closeMenu() }} className="hover:text-blue-500">Home</button>
          <a href="#projects" onClick={closeMenu} className="hover:text-blue-500">Projects</a>
          <a href="#about" onClick={closeMenu} className="hover:text-blue-500">About</a>
          <a href="#contact" onClick={closeMenu} className="hover:text-blue-500">Contact</a>
          <a href="/assets/cv.pdf" download onClick={closeMenu} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Download CV</a>
        </div>
      </div>
    </nav>
  )
}
