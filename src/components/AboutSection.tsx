import { Code2, Palette, Rocket, Zap } from "lucide-react";

const skills = [
  { icon: Code2, label: "React" },
  { icon: Code2, label: "TypeScript" },
  { icon: Code2, label: "Node.js" },
  { icon: Palette, label: "Tailwind CSS" },
  { icon: Zap, label: "Next.js" },
  { icon: Rocket, label: "PostgreSQL" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image/Avatar placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                  <div className="text-8xl">👨‍💻</div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                A passionate developer building for the web
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a full-stack developer with 5+ years of experience creating web applications that are both beautiful and functional. My journey started with curiosity about how websites work, and it has evolved into a deep passion for crafting exceptional digital experiences.
                </p>
                <p>
                  I specialize in building modern React applications with TypeScript, focusing on clean code, performance, and accessibility. When I'm not coding, you'll find me exploring new technologies, contributing to open source, or writing about web development.
                </p>
                <p>
                  I believe in continuous learning and staying up-to-date with the latest industry trends. Every project is an opportunity to learn something new and push the boundaries of what's possible on the web.
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Tech Stack</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <div
                      key={skill.label}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      <skill.icon className="h-4 w-4" />
                      {skill.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}