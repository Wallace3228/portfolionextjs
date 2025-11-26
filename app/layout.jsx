import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import ThemeProvider from '../components/ThemeProvider'
import ThemeToggle from '../components/ThemeToggle'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alex Matilla – Portfolio',
  description: 'Portfolio migrated to Next.js with performance improvements and SSR/SSG examples.'
}

/*
  Layout is a Server Component by default (no 'use client').
  Navbar contains interactivity so it will be a Client Component.
  ThemeProvider wraps the app and handles storing theme in localStorage (client-only).
*/
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className + ' bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors relative'}>
        <ThemeProvider>
          <Navbar />
          <main className="pt-40 px-6 pb-12 space-y-24 max-w-4xl mx-auto">
            {children}
          </main>
        </ThemeProvider>
        <ThemeToggle />  
      </body>
    </html>
)
}
