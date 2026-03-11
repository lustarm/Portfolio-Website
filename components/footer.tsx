import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link 
            href="#" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
          <Link 
            href="#" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}
