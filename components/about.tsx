import ScrollReveal from "@/components/ui/ScrollReveal"

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-2">
            <p className="text-primary font-mono text-sm">01. About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold">Who I Am</h2>
          </div>

          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              I'm a passionate Computer Science and Cyber Security undergraduate dedicated to understanding and solving
              complex technical challenges. My journey in technology is driven by a deep fascination with how systems
              work and how to make them more secure.
            </p>
            <p>
              With a focus on problem-solving and systems-level thinking, I approach every project with meticulous
              attention to detail and a commitment to best practices. Whether it's developing secure applications,
              analyzing network vulnerabilities, or exploring cutting-edge security frameworks, I thrive on learning and
              implementing innovative solutions.
            </p>
            <p>
              Beyond technical skills, I've developed strong leadership and communication abilities through
              participation in Model United Nations and Youth Parliament, which have shaped my collaborative approach to
              solving real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
