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
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "WebSockets"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool that helps users create blog posts, social media content, and marketing copy with multiple AI models.",
    technologies: ["React", "Python", "FastAPI", "OpenAI", "Redis"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 md:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-primary text-sm tracking-widest uppercase mb-4">
              Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Featured Projects
            </h2>
          </div>

          {/* Projects List */}
          <div>
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
