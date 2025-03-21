
import { Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    position: "Full Stack Developer",
    company: "Maxfront Technologies",
    period: "Jan 2025 - Present",
  },
  {
    position: "Software Engineer",
    company: "Gurugeeks Royalty Ltd",
    period: "Jul 2024 - Dec 2024",
  },
  {
    position: "Full Stack Developer",
    company: "SDSD",
    period: "Aug 2022 - Jul 2024",
  },
  {
    position: "Software Engineer Intern",
    company: "Codebits Academy",
    period: "Jan 2022 - Jun 2022",
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-2 text-xs font-medium bg-accent/10 text-accent rounded-full">
              My Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-offwhite">Professional Experience</h2>
            <p className="mt-4 text-offwhite/70 max-w-2xl mx-auto">
              Over the years, I've had the opportunity to work with talented teams on diverse projects that have shaped my skills and expertise.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <AnimatedSection 
              key={index} 
              animation={index % 2 === 0 ? "slide-left" : "slide-right"}
              className="h-full"
              delay={index * 100}
            >
              <div className="glass-morphism rounded-xl p-5 h-full hover:bg-white/5 transition-colors"> {/* Reduced padding from p-6 to p-5 */}
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 rounded-lg p-2.5 mt-1"> {/* Reduced padding from p-3 to p-2.5 */}
                    <Briefcase className="w-5 h-5 text-accent" /> {/* Reduced size from w-6 h-6 to w-5 h-5 */}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-offwhite mb-1"> {/* Reduced margin from mb-1 to mb-1 */}
                      {exp.position}
                    </h3>
                    <p className="text-accent font-medium mb-1"> {/* Reduced margin from mb-2 to mb-1 */}
                      {exp.company}
                    </p>
                    <p className="text-offwhite/70 text-sm mb-3"> {/* Reduced margin from mb-4 to mb-3 */}
                      {exp.period}
                    </p>
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

export default Experience;
