const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Next.js",
  "PostgreSQL",
];

export function AboutSection() {
  return (
    <section id="about" className="py-32 md:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Content */}
            <div>
              <p className="text-primary text-sm tracking-widest uppercase mb-4">
                About
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
                Building for the modern web
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  I'm a full-stack developer with 5+ years of experience creating web applications that are both beautiful and functional.
                </p>
                <p>
                  I specialize in building modern React applications with TypeScript, focusing on clean code, performance, and accessibility.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open source, or writing about web development.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="lg:pt-12">
              <p className="text-sm text-muted-foreground uppercase tracking-widest mb-6">
                Technologies
              </p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm border border-border rounded-full hover:border-primary hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
