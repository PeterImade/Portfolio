
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Farmstedi",
    description: "Farmstedi help farmers detect weather patterns and help them decide on the best crops to cultivate and also gives them the most efficient irrigation schedules.",
    image: "https://images.unsplash.com/photo-1602867741746-6df80f40b3f6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Node.js", "MongoDB", "Express", "LLMs", "GeminiAI", "LangChain"],
    link: "https://github.com/PeterImade/Farmstedi", 
  },
  {
    title: "IT Training Portal",
    description: "A Learning Management System (LMS) with task management, class scheduling, secure payments, real-time messaging, and role-based access for students, instructors and admins, supporting over 500+ active users.",
    image: "https://images.unsplash.com/photo-1600195077909-46e573870d99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVhcm58ZW58MHx8MHx8fDA%3D",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "AWS"],
    link: "https://gurugeeksacademy.com/"
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
                    target="_blank"
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
