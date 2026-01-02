import { useState } from "react";
import { Menu, X } from "lucide-react";
const navLinks = [{
  href: "#about",
  label: "About"
}, {
  href: "#projects",
  label: "Work"
}, {
  href: "#contact",
  label: "Contact"
}];
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="text-lg font-semibold tracking-tight">
            Moses<span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </a>)}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map(link => <a key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors py-3 text-lg" onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>)}
            </div>
          </div>}
      </div>
    </nav>;
}