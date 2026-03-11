import { Globe, Smartphone, Shield, Zap, Users, BarChart3 } from "lucide-react"

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-4">
            Services
          </h2>
          <h3 className="text-3xl md:text-4xl font-medium text-foreground leading-tight tracking-tight max-w-2xl text-balance">
            Comprehensive digital management solutions tailored to your needs.
          </h3>
        </div>

        {/* Main Service - Website Management */}
        <div className="mb-16">
          <div className="border border-border bg-background p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-foreground flex items-center justify-center">
                <Globe className="w-6 h-6 text-background" />
              </div>
              <span className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                Primary Service
              </span>
            </div>
            <h4 className="text-2xl md:text-3xl font-medium text-foreground mb-4">
              Website Management
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Full-service website management for a simple monthly subscription. I take care of all the technical details so your website runs smoothly, stays secure, and performs at its best. Perfect for business owners who want a hands-off approach to their online presence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-foreground mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm">Security & Updates</p>
                  <p className="text-sm text-muted-foreground">Regular updates, backups, and security monitoring</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-foreground mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm">Performance</p>
                  <p className="text-sm text-muted-foreground">Speed optimization and uptime monitoring</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-foreground mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm">Content Updates</p>
                  <p className="text-sm text-muted-foreground">Text, images, and content changes on request</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Pricing:</span> Contact me directly via phone or social media for personalized pricing based on your website needs.
              </p>
            </div>
          </div>
        </div>

        {/* Secondary Service - Social Media Management */}
        <div>
          <div className="border border-border bg-background p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-border flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-foreground" />
              </div>
              <span className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                Additional Service
              </span>
            </div>
            <h4 className="text-xl font-medium text-foreground mb-3">
              Social Media Management
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
              Digital management of your online social media accounts. I help maintain your brand presence across platforms, handle posting schedules, and keep your audience engaged while you focus on running your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Account Management</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Content Scheduling</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Engagement Support</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Pricing:</span> Reach out personally for custom quotes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
