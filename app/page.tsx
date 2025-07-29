"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { ThemeProvider } from "@/components/theme-provider"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import CertificationsSection from "@/components/certifications-section"
import EducationSection from "@/components/education-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import FloatingElements from "@/components/floating-elements"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
        <FloatingElements />
        <Navigation />

        <main className="relative">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <CertificationsSection />
          <EducationSection />
          <ContactSection />
        </main>

        {/* Scroll Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 z-50 origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      </div>
    </ThemeProvider>
  )
}
