import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, shopping cart, payment integration, and order tracking. Built with a focus on performance and user experience.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Designed for productivity teams.",
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "WebSockets"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool that helps users create blog posts, social media content, and marketing copy. Features multiple AI models and customization options.",
    technologies: ["React", "Python", "FastAPI", "OpenAI", "Redis"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for building great web applications.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}