import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Hangman Game with Advanced GUI",
    description:
      "Fully interactive Hangman game featuring an advanced graphical user interface, dynamic word selection, real-time input handling, and robust game-state management with a modular and scalable codebase.",
    tech: ["Python", "Tkinter"],
    github: "https://github.com/Kkeshav356/Hangman-Game-with-Advanced-GUI-application",
    demo: null,
  },
  {
    title: "Secure Online Web-Based Voting System",
    description:
      "Secure web-based voting platform designed with a strong focus on confidentiality and integrity, implementing authentication mechanisms, secure vote-casting workflows, and protection against common web security vulnerabilities.",
    tech: ["Web Security", "Authentication", "Cryptography"],
    github: "https://github.com/Kkeshav356/Secure-online-web-based-voting-system",
    demo: null,
  },
]


export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      {/* Glassy overlay */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-sm" />

      <div className="container mx-auto px-4 relative z-10">
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
