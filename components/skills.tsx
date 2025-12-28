import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C/C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Cyber Security",
    skills: [
      "Penetration Testing",
      "Network Security",
      "Cryptography",
      "Security Auditing",
      "Vulnerability Assessment",
      "SIEM Tools",
      "Cryptography Basics",
      "Network Security Concepts",
    ],
  },
  {
    title: "Networking",
    skills: ["TCP/IP", "DNS", "Firewalls", "Network Protocols", "Wireshark"],
  },
  {
    title: "Tools & Technologies",
    skills: [
      "Linux",
      "Git",
      "VS Code",
      "Wireshark",
      "Cisco Packet Tracer",
      "Metasploit",
      "Burp Suite",
      "Nmap",
      "Kali Linux",
    ],
  },
  {
    title: "Databases",
    skills: ["MySQL"],
  },
]


export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-primary font-mono text-sm">02. Skills & Technologies</p>
            <h2 className="text-3xl md:text-4xl font-bold">Technical Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="glass p-6 space-y-4 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-sm font-mono border border-border hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
