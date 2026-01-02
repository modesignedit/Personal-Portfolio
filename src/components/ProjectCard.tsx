import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  demoUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="group relative bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
      {/* Project Image Placeholder */}
      <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
        <div className="text-6xl opacity-50 group-hover:scale-110 transition-transform duration-300">
          🚀
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {demoUrl && (
            <Button asChild size="sm" variant="default">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button asChild size="sm" variant="outline">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}