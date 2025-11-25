'use client'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useEffect, useState } from 'react'

/*
  ThemeToggle is a small client component that mirrors the original ThemeToggle.jsx.
  It reads the current theme from document.documentElement.
*/
export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return document.documentElement.classList.contains('dark')
    } catch (e) {
      return true
    }
  })

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, { attributes: true })
    return () => observer.disconnect()
  }, [])

  const toggle = () => {
    const next = !darkMode
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
    setDarkMode(next)
  }

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  )
}
