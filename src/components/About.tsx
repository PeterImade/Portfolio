
import AnimatedSection from "./AnimatedSection";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <span className="inline-block px-3 py-1 mb-2 text-xs font-medium bg-accent/10 text-accent rounded-full">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-offwhite">Passionate about creating impactful digital experiences</h2>
              
              <div className="space-y-4 text-offwhite/70">
                <p className="leading-relaxed">
                  I'm a Full Stack Developer with over 4 years of industry experience, 
                  specializing in creating robust, scalable applications with modern technologies.
                </p>
                <p className="leading-relaxed">
                  Over the past 5 years, I've worked with diverse teams on challenging projects in different industries 
                  that have shaped my professional growth. I pride myself on writing clean, maintainable code and building 
                  intuitive user experiences.
                </p>
                <p className="leading-relaxed">
                  I'm constantly learning and adapting to new technologies, allowing me to bring innovative 
                  solutions to complex problems. My goal is to create software that not only meets but exceeds expectations.
                </p>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative">
                <div className="p-1 bg-gradient-to-br from-accent to-accent/50 rounded-2xl">
                  <div className="bg-navy rounded-xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                      alt="Working on laptop" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="glass-morphism absolute -bottom-8 -left-8 p-6 rounded-xl max-w-xs">
                  <div className="text-xl font-bold text-accent mb-1">4+</div>
                  <div className="text-offwhite/90 text-sm">Years of professional experience</div>
                </div>
                
                <div className="glass-morphism absolute -top-8 -right-8 p-6 rounded-xl max-w-xs">
                  <div className="text-xl font-bold text-accent mb-1">20+</div>
                  <div className="text-offwhite/90 text-sm">Projects completed</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
