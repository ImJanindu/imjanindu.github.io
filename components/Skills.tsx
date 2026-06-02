const skills = [
  "Java",
  "Python",
  "C#",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "UI/UX Design",
  "Figma",
  "Git"
];

export function Skills() {
  return (
    <section className="py-12">
      <h2 className="font-['VT323'] text-3xl text-foreground mb-8 pb-2 border-b-2 border-border inline-block pr-8">
        Skills
      </h2>
      <div className="flex flex-wrap gap-3 font-['Space_Grotesk']">
        {skills.map(skill => (
          <span 
            key={skill}
            className="px-4 py-2 text-sm font-medium rounded-lg bg-card border-2 border-border text-card-foreground shadow-sm hover:border-primary hover:text-accent-foreground hover:-translate-y-0.5 hover:bg-accent transition-all duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
