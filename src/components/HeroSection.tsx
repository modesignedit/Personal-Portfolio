import { ArrowDown, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-primary font-mono text-sm md:text-base mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <span className="text-gradient">John Developer</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            Full-Stack Developer crafting modern web experiences
          </p>

          {/* Bio */}
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            I build beautiful, performant, and accessible web applications using React, TypeScript, and modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
            <Button asChild size="lg" className="glow">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-10 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.5s" }}>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown className="h-6 w-6 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}