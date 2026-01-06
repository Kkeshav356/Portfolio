"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, Send, Instagram } from "lucide-react"
import Dock from "./Dock"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const dockItems = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      onClick: () => window.location.href = 'mailto:keshavloya8@gmail.com'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      onClick: () => window.open('https://www.linkedin.com/in/kkeshav-loya-44085430a/', '_blank')
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      onClick: () => window.open('https://github.com/Kkeshav356', '_blank')
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: 'Instagram',
      onClick: () => window.open('https://instagram.com/loyakkeshav', '_blank')
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      {/* Glassy overlay */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-sm" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-2 text-center">
            <p className="text-primary font-mono text-sm">06. What's Next?</p>
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
              I'm always open to new opportunities, collaborations, and conversations. Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="glass p-6 space-y-8 flex flex-col justify-center min-h-[300px]">
                <h3 className="text-xl font-semibold text-center mt-2">Connect With Me</h3>
                <div className="flex justify-center items-center py-8">
                  <Dock
                    items={dockItems}
                    panelHeight={68}
                    baseItemSize={50}
                    magnification={70}
                  />
                </div>
              </Card>
            </div>

            <Card className="glass p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          <div className="text-center pt-8">
            <p className="text-muted-foreground font-mono text-sm">Built with Next.js, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </section>
  )
}

