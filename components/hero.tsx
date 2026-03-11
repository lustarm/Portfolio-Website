import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-6 pt-24">
      <div className="max-w-6xl mx-auto w-full">
        <p className="text-sm text-muted-foreground mb-4 tracking-wide">
          Website Management Services
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-foreground max-w-3xl text-balance">
          I manage your websites so you can focus on your business.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Professional website management for a simple monthly subscription. From updates and maintenance to security and performance, I handle it all while you concentrate on what matters most.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild className="rounded-full">
            <Link href="#services">
              View Services
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="#contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
