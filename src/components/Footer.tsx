export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} John Developer. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with <span className="text-primary">React</span> & <span className="text-accent">TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
}