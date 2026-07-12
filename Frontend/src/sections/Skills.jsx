import { Code2, Box, Wrench } from "lucide-react";

const skillsData = [
  {
    category: "Languages",
    icon: Code2,
    items: ["C", "C++", "Java", "Python", "JavaScript"],
  },
  {
    category: "Frameworks",
    icon: Box,
    items: ["React", "Django", "Node.js", "Next.js", "Express"],
  },
  {
    category: "Tools",
    icon: Wrench,
    items: ["Git", "Docker", "Linux", "GitHub", "VS Code"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Skills &
            <span className="font-serif italic font-normal text-white">
              {" "}
              technologies.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((skillGroup, idx) => (
            <div
              key={idx}
              className="glass p-8 rounded-2xl animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <skillGroup.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-foreground">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 glass p-8 rounded-2xl animate-fade-in animation-delay-400">
          <h3 className="text-lg font-semibold mb-4 text-secondary-foreground">
            Other Proficiencies
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "TypeScript",
              "SQL",
              "REST APIs",
              "GraphQL",
              "Tailwind CSS",
              "Firebase",
              "MongoDB",
              "PostgreSQL",
              "AWS",
              "Figma",
              "UI/UX Design",
              "Agile",
            ].map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-muted/30 text-muted-foreground rounded-full text-sm hover:bg-muted/50 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
