"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface PortfolioItem {
  title: string
  description: string
  url: string
  tags: string[]
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Joker On SOL",
    description: "This is a crafted website for a crypto coin called 'Joker'",
    url: "https://jokeronsol.netlify.app/",
    tags: ["Design", "Development"],
  },
  {
    title: "NutriGenie",
    description: "A super simple project showcasing funcionality that can be created",
    url: "https://nutrigenie-prod.netlify.app/",
    tags: ["Branding", "Functionality"],
  },
  {
    title: "AntiJeetClub",
    description: "Another custom crafted website for another crypto coin called 'AntiJeetClub'",
    url: "https://antijeetclub.com/",
    tags: ["Web Design", "Development"],
  },
  {
    title: "Prospect Pro",
    description: "Building beautiful experiences with attention to detail. This website showcases design",
    url: "https://prospectpro.netlify.app/",
    tags: ["Detail", "Design"],
  },
]

export function PortfolioGrid() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
            Selected Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="aspect-[4/3] bg-secondary rounded-lg overflow-hidden mb-4 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-light text-muted-foreground/30">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-background" />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-medium text-foreground mb-1 group-hover:underline">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
