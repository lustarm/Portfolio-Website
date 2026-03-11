import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <PortfolioGrid />
      <Contact />
      <Footer />
    </main>
  )
}
