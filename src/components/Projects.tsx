
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with payment integration, user authentication, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    link: "#"
  },
  {
    title: "Healthcare Management System",
    description: "A comprehensive system for managing patient records, appointments, and medical histories.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    technologies: [".NET Core", "SQL Server", "Angular", "Azure"],
    link: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative tool for teams to manage projects, track progress, and meet deadlines.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    technologies: ["React", "Firebase", "TypeScript", "Material UI"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-2 text-xs font-medium bg-accent/10 text-accent rounded-full">
              My Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-offwhite">Featured Projects</h2>
            <p className="mt-4 text-offwhite/70 max-w-2xl mx-auto">
              Here are some of the projects I've worked on that showcase my skills and expertise.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={project.title}
              delay={index * 100}
            >
              <div className="glass-morphism rounded-xl overflow-hidden h-full transition-transform duration-300 hover:translate-y-[-8px]">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-40 object-cover" // Reduced height from h-48 to h-40
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent"></div>
                </div>
                
                <div className="p-5"> {/* Reduced padding from p-6 to p-5 */}
                  <h3 className="text-xl font-bold text-offwhite mb-1">{project.title}</h3> {/* Reduced margin from mb-2 to mb-1 */}
                  <p className="text-offwhite/70 text-sm mb-3">{project.description}</p> {/* Reduced margin from mb-4 to mb-3 */}
                  
                  <div className="flex flex-wrap gap-2 mb-4"> {/* Reduced margin from mb-6 to mb-4 */}
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded" // Reduced padding from py-1 to py-0.5
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link} 
                    className="inline-flex items-center text-accent font-medium text-sm hover:underline"
                  >
                    View Project <ArrowUpRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
