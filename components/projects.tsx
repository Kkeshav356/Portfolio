import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Network Security Scanner",
    description:
      "Comprehensive network vulnerability scanner that identifies security weaknesses and provides detailed reports with remediation suggestions.",
    tech: ["Python", "Scapy", "SQLite", "Flask"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Encrypted Chat Application",
    description:
      "End-to-end encrypted messaging platform with user authentication, implementing modern cryptographic protocols for secure communication.",
    tech: ["Node.js", "React", "WebSocket", "AES Encryption"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Intrusion Detection System",
    description:
      "Machine learning-based IDS that analyzes network traffic patterns to detect and alert on potential security threats in real-time.",
    tech: ["Python", "TensorFlow", "Pandas", "Flask"],
    github: "https://github.com",
    demo: null,
  },
  {
    title: "Password Manager",
    description:
      "Secure password management application with master password protection, password generation, and encrypted local storage.",
    tech: ["TypeScript", "Electron", "SQLCipher", "React"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-primary font-mono text-sm">03. My Work</p>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="glass p-6 space-y-4 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group"
              >
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-mono rounded bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button asChild variant="ghost" size="sm" className="gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button asChild variant="ghost" size="sm" className="gap-2">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
