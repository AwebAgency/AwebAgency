import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { ProjectsSection } from '../components/ProjectSection'
import { Footer } from '../components/Footer'

export const Projects = () => {
  const location = useLocation()
  const scrollTo = location.state?.scrollTo   // e.g. "project-moovera"

  useEffect(() => {
    if (scrollTo) {
      const timer = setTimeout(() => {
        const el = document.getElementById(scrollTo)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 250)
      return () => clearTimeout(timer)
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [scrollTo])

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <NavBar />
      <div className="h-20 md:h-24" />
      <ProjectsSection highlightSlug={scrollTo ?? null} />
      <Footer />
    </div>
  )
}
