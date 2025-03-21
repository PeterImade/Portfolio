
import { Server, Layout, Database, Code } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const skills = [
  {
    category: "Backend",
    icon: <Server className="w-6 h-6 text-accent" />,
    technologies: ["C#", ".NET Core Web API", ".NET Core MVC", "Node.js", "Express.js", "Python"]
  },
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6 text-accent" />,
    technologies: ["Angular", "Blazor", "HTML/CSS", "JavaScript/TypeScript"]
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6 text-accent" />,
    technologies: ["SQL Server", "Entity Framework", "MongoDB"]
  },
  {
    category: "Development",
    icon: <Code className="w-6 h-6 text-accent" />,
    technologies: ["Git", "CI/CD", "Docker", "Agile/Scrum", "RESTful API Design"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-navy/50">
      <div className="container max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-2 text-xs font-medium bg-accent/10 text-accent rounded-full">
              What I Know
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-offwhite">Technical Skills</h2>
            <p className="mt-4 text-offwhite/70 max-w-2xl mx-auto">
              I've developed expertise in various technologies across the full stack, enabling me to build complete and efficient solutions.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <AnimatedSection 
              key={skill.category} 
              className="glass-morphism rounded-xl p-8"
              delay={index * 100}
            >
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 rounded-lg p-3 mt-1">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-offwhite mb-4">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-white/10 text-offwhite/80 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
