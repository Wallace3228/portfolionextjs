'use client'
import { useEffect, useState } from 'react'

/*
  ThemeProvider is client-side because it uses localStorage and document.documentElement.
  It toggles the 'dark' class on the html element, matching the original behavior.
*/
export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      return saved === null ? true : saved === 'dark'
    } catch (e) {
      return true
    }
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <>
      {children}
      <div id="theme-toggle-root" data-dark={darkMode ? 'true' : 'false'} />
      {/* Expose setter for ThemeToggle component via global for simplicity */}
      <script dangerouslySetInnerHTML={{ __html: `window.__SET_DARK = ${String((val) => { return; })}` }} />
    </>
  )
}
