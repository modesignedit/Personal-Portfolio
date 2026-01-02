import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
const socialLinks = [{
  icon: Github,
  label: "GitHub",
  href: "https://github.com"
}, {
  icon: Linkedin,
  label: "LinkedIn",
  href: "https://linkedin.com"
}, {
  icon: Twitter,
  label: "Twitter",
  href: "https://twitter.com"
}];
export function ContactSection() {
  return <section id="contact" className="py-32 md:py-40 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left */}
            <div>
              <p className="text-primary text-sm tracking-widest uppercase mb-4">
                Contact
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Let's work together
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            {/* Right */}
            <div className="space-y-10 lg:pt-12">
              {/* Email */}
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">
                  Email
                </p>
                <a className="group inline-flex items-center gap-2 text-xl font-medium hover:text-primary transition-colors" href="mailto:iammodiamond@gmail.com">
                  mo@gmail.com
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">
                  Social
                </p>
                <div className="flex items-center gap-6">
                  {socialLinks.map(link => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label={link.label}>
                      <link.icon className="h-5 w-5" />
                    </a>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}