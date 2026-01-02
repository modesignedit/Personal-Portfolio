export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} John Developer
          </p>
          <p className="text-sm text-muted-foreground">
            Built with React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
