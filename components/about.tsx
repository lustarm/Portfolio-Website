export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-8">
              About
            </h2>
            <h3 className="text-3xl md:text-4xl font-medium text-foreground leading-tight tracking-tight text-balance">
              Building polished software and web experiences.
            </h3>
          </div>
          
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In the past, I've had the opportunity to develop software across a variety of settings — from agencies and startups to product studios. I enjoy collaborating with teams to solve complex problems and create meaningful digital products.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not at my desk, you'll find me exploring new technologies, reading about design trends, or working on personal creative projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
