import Home from '../components/Home'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'

/*
  This page is a Server Component by default, so HTML is pre-rendered on the server (improves SEO).
  Components that need client-side interactivity will declare 'use client' internally.
*/
export default function Page() {
  return (
    <>
      <Home />
      <Projects />
      <About />
      <Contact />
    </>
  )
}
