"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, Github, Linkedin, Instagram } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      {/* Glassy overlay */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-sm" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">

          <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0 animate-in fade-in zoom-in duration-1000 order-first md:order-last">
            <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(0,255,255,0.3)] animate-pulse" />
            <Image
              src="/Kkeshav.jpg"
              alt="Kkeshav Loya"
              fill
              className="rounded-full object-cover border-4 border-primary/20 relative z-10"
              priority
            />
          </div>

          <div className="flex-1 text-center md:text-left space-y-8">
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <p className="text-primary font-mono text-sm md:text-base">Hi, my name is</p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">Kkeshav Loya</h1>
              <p className="text-3xl md:text-5xl font-semibold text-muted-foreground text-balance">
                B.Tech CSE – Cyber Security
              </p>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 text-balance">
              Building secure systems and intelligent solutions at the intersection of technology and security.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Button asChild size="lg" className="gap-2 glow">
                <a href="#projects">View Projects</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
                <a href="#contact">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/loyakkeshav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>

            <div className="pt-12 animate-in fade-in duration-1000 delay-500">
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
