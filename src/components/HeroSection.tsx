import { ArrowDown } from "lucide-react";
export function HeroSection() {
  return <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Greeting */}
          <p className="text-primary text-sm tracking-widest uppercase mb-6 opacity-0 animate-fade-in" style={{
          animationDelay: "0.1s",
          animationFillMode: "forwards"
        }}>
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in" style={{
          animationDelay: "0.2s",
          animationFillMode: "forwards"
        }}>
            ​Moses
            <br />
            <span className="text-muted-foreground">Developer</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-12 leading-relaxed opacity-0 animate-fade-in" style={{
          animationDelay: "0.3s",
          animationFillMode: "forwards"
        }}>
            Full-stack developer crafting modern, performant web experiences with clean code and thoughtful design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 opacity-0 animate-fade-in" style={{
          animationDelay: "0.4s",
          animationFillMode: "forwards"
        }}>
            <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background font-medium text-sm rounded-full hover:bg-foreground/90 transition-colors">
              View Work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-border font-medium text-sm rounded-full hover:bg-secondary transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-6 lg:left-8 opacity-0 animate-fade-in" style={{
      animationDelay: "0.6s",
      animationFillMode: "forwards"
    }}>
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>;
}