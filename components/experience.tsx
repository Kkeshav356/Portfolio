import { Card } from "@/components/ui/card"
import { Calendar, GraduationCap } from "lucide-react"

const experiences = [
  {
    type: "education",
    title: "B.Tech in Computer Science & Engineering",
    subtitle: "Specialization in Cyber Security",
    organization: "CVR College of Engineering, Hyderabad",
    period: "2023 - 2027",
    description:
      "Pursuing undergraduate education in computer science with a specialization in cyber security, focusing on network security concepts, cryptography basics, and secure system design.",
  },
  {
    type: "education",
    title: "Higher Secondary Education (Class XII)",
    subtitle: "Science Stream",
    organization: "Sri Chaitanya Junior Kalasala, Telangana",
    period: "2021 - 2023",
    description:
      "Completed higher secondary education with a strong academic foundation, achieving 89% with emphasis on analytical and problem-solving skills.",
  },
  {
    type: "education",
    title: "Secondary School Education (Class X)",
    subtitle: "CBSE Curriculum",
    organization: "Lokseva E-School, Telangana",
    period: "2021",
    description:
      "Completed secondary school education with 94%, demonstrating consistent academic excellence and discipline.",
  },
]

const iconMap = {
  education: GraduationCap,
}

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      {/* Glassy overlay */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-sm" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-primary font-mono text-sm">04. My Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Experience & Education
            </h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {experiences.map((exp, index) => {
                const Icon = iconMap[exp.type as keyof typeof iconMap]

                return (
                  <div key={index} className="relative">
                    <div className="hidden md:flex absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                    <Card className="glass p-6 md:ml-16 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <Icon className="w-5 h-5" />
                        </div>

                        <div className="flex-1 space-y-2">
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <div>
                              <h3 className="text-lg font-semibold">
                                {exp.title}
                              </h3>
                              <p className="text-muted-foreground">
                                {exp.subtitle}
                              </p>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                          </div>

                          <p className="text-muted-foreground leading-relaxed">
                            {exp.description}
                          </p>
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
