import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Linkedin, Twitter, Instagram, Phone, Mail, MessageCircle } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-8">
              Get a Quote
            </h2>
            <h3 className="text-3xl md:text-4xl font-medium text-foreground leading-tight tracking-tight text-balance">
              Ready to discuss your project? Let's talk pricing and services.
            </h3>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Every project is unique, so I provide personalized quotes based on your specific needs. Reach out via phone, social media, or email and I'll get back to you as soon as possible.
            </p>
            <div className="mt-8">
              <Button asChild className="rounded-full">
                <Link href="tel:+1234567890">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Me
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:flex lg:flex-col lg:justify-end">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Phone</p>
                <Link
                  href="tel:+1234567890"
                  className="text-foreground hover:underline flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  +1 (704) 320-2764
                </Link>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Email</p>
                <Link
                  href="mailto:hello@example.com"
                  className="text-foreground hover:underline flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  tysoncruz178@gmail.com
                </Link>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-3">Social Media</p>
                <div className="flex items-center gap-4">
                  <Link
                    href="https://instagram.com/cruzwebx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-muted-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  { /*
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-muted-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-muted-foreground transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-muted-foreground transition-colors"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </Link>
                  */ }
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Prefer to message? DM me on any social platform and I'll respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
