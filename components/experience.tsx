import { Card } from "@/components/ui/card"
import { Calendar, GraduationCap, Briefcase, Award } from "lucide-react"

const experiences = [
  {
    type: "education",
    title: "B.Tech in Computer Science & Engineering",
    subtitle: "Specialization in Cyber Security",
    organization: "University Name",
    period: "2022 - 2026",
    description:
      "Pursuing comprehensive education in computer science with specialized focus on cybersecurity, network security, and secure system design.",
  },
  {
    type: "internship",
    title: "Security Intern",
    subtitle: "Company Name",
    organization: "Tech Company",
    period: "Summer 2024",
    description:
      "Conducted security assessments, performed penetration testing, and contributed to improving security infrastructure.",
  },
  {
    type: "certification",
    title: "Certified Ethical Hacker (CEH)",
    subtitle: "EC-Council",
    organization: "EC-Council",
    period: "2024",
    description:
      "Comprehensive certification covering penetration testing methodologies and ethical hacking techniques.",
  },
]

const iconMap = {
  education: GraduationCap,
  internship: Briefcase,
  certification: Award,
}

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-primary font-mono text-sm">04. My Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold">Experience & Education</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {experiences.map((exp, index) => {
                const Icon = iconMap[exp.type as keyof typeof iconMap]
                return (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                    <Card className="glass p-6 md:ml-16 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <div>
                              <h3 className="text-lg font-semibold">{exp.title}</h3>
                              <p className="text-muted-foreground">{exp.subtitle}</p>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
