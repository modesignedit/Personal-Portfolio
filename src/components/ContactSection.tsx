import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:hello@example.com",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />

          <p className="text-muted-foreground text-lg mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
          </p>

          {/* Email */}
          <a
            href="mailto:hello@example.com"
            className="inline-block text-2xl md:text-3xl font-semibold text-primary hover:text-accent transition-colors duration-200 mb-12"
          >
            hello@example.com
          </a>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group flex items-center justify-center w-14 h-14 rounded-full bg-secondary hover:bg-primary transition-colors duration-200"
                aria-label={link.label}
              >
                <link.icon className="h-6 w-6 text-secondary-foreground group-hover:text-primary-foreground transition-colors duration-200" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}