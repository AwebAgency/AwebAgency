import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { HeroSection } from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import { SkillsSection } from '../components/SkillsSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'

export const Home = () => {
    const location = useLocation()

    useEffect(() => {
        const target = location.state?.scrollTo
        if (!target) return
        const timer = setTimeout(() => {
            document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
        }, 120)
        return () => clearTimeout(timer)
    }, [location.state])

    return (
        <div className="min-h-screen text-foreground overflow-x-hidden">
            <NavBar />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ContactSection />
            <Footer />
        </div>
    )
}
