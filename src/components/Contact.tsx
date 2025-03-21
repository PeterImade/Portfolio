
import { Linkedin, Github, Twitter, Mail, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-navy/50">
      <div className="container max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-2 text-xs font-medium bg-accent/10 text-accent rounded-full">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-offwhite">Let's Connect</h2>
            <p className="mt-4 text-offwhite/70 max-w-2xl mx-auto">
              I'm always open to discussing new projects, opportunities, or partnerships.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="scale-in">
          <div className="glass-morphism rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-offwhite mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 rounded-lg p-2 mt-1">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-offwhite/70 mb-1">Email</p>
                  <p className="text-offwhite font-medium">peterimadeosakpolor@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 rounded-lg p-2 mt-1">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-offwhite/70 mb-1">Phone</p>
                  <p className="text-offwhite font-medium">+234 808 299 8285</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="font-medium mb-4 text-offwhite">Connect with me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/peter-imade/" 
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/PeterImade" 
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://x.com/Imadepeter2" 
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;
