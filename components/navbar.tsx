"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleDownloadResume = () => {
    // Replace with actual resume URL
    window.open("/resume.pdf", "_blank")
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#hero" className="font-mono text-lg font-semibold text-primary">
          {"<Portfolio />"}
        </a>

        <div className="hidden md:flex items-center gap-1">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                activeSection === id
                  ? "text-primary font-medium bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <Button onClick={handleDownloadResume} variant="outline" size="sm" className="gap-2 bg-transparent">
          <FileDown className="w-4 h-4" />
          Resume
        </Button>
      </div>
    </nav>
  )
}
