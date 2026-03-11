"use client"

import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-medium tracking-tight text-foreground">
          Tyson Cruz
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            href="#services"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </Link>
          <Link
            href="#work"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Work
          </Link>
          <Link
            href="#contact"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
