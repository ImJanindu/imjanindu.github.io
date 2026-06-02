interface Project {
  title: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Aura Analytics",
    description: "A minimalist dashboard for tracking personal finance and investment portfolios with real-time data visualization.",
    tags: ["React", "Next.js", "Tailwind"]
  },
  {
    title: "Lumina Editor",
    description: "A distraction-free, markdown-based writing environment designed for authors and content creators.",
    tags: ["TypeScript", "Electron"]
  },
  {
    title: "Nimbus API",
    description: "A fast, scalable weather data API service built with modern serverless architecture.",
    tags: ["Python", "FastAPI", "AWS"]
  },
  {
    title: "Chroma UI",
    description: "An open-source accessible component library focusing on high contrast and simple implementation.",
    tags: ["React", "Radix UI"]
  }
];

export function Projects() {
  return (
    <section className="py-12">
      <h2 className="font-['VT323'] text-3xl text-foreground mb-8 pb-2 border-b-2 border-border inline-block pr-8">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-['Space_Grotesk']">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group flex flex-col p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-foreground font-semibold mb-2 text-lg">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
              {project.tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted text-muted-foreground border border-border group-hover:bg-accent group-hover:border-primary group-hover:text-accent-foreground transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
