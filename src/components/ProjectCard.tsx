import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  index: number;
}

export function ProjectCard({
  title,
  description,
  technologies,
  demoUrl,
  githubUrl,
  index,
}: ProjectCardProps) {
  const href = demoUrl || githubUrl || "#";
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block py-10 border-b border-border hover:border-primary transition-colors first:border-t"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
        {/* Number */}
        <span className="text-sm text-muted-foreground tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        
        {/* Content */}
        <div className="flex-1 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight group-hover:text-primary transition-colors">
              {title}
            </h3>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </div>
          
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            {description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs text-muted-foreground"
              >
                {tech}
                {technologies.indexOf(tech) < technologies.length - 1 && (
                  <span className="ml-2 text-border">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
