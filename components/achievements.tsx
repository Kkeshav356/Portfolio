import { Card } from "@/components/ui/card"
import { Trophy, Users, Award, Star } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Model United Nations",
    description:
      "Best Delegate Award in multiple MUN conferences, demonstrating strong diplomacy and leadership skills.",
  },
  {
    icon: Users,
    title: "Youth Parliament Participant",
    description: "Active participant in Youth Parliament sessions, contributing to policy discussions and debate.",
  },
  {
    icon: Award,
    title: "Hackathon Winner",
    description:
      "First place in University Cybersecurity Hackathon for developing an innovative threat detection system.",
  },
  {
    icon: Star,
    title: "Research Paper Publication",
    description: "Co-authored research paper on network security vulnerabilities published in IEEE conference.",
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      {/* Glassy overlay */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-sm" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-primary font-mono text-sm">05. Recognition</p>
            <h2 className="text-3xl md:text-4xl font-bold">Achievements & Leadership</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <Card
                  key={index}
                  className="glass p-6 space-y-4 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{achievement.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
