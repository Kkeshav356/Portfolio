import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import DotGrid from "@/components/DotGrid"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kkeshav Loya ",
  description:
    "Computer Science and Cyber Security undergraduate portfolio showcasing projects, skills, and achievements",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        <DotGrid
          dotSize={10}
          gap={20}
          baseColor="#99f6e4"
          activeColor="#ffffff"
          proximity={200}
          shockRadius={300}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
