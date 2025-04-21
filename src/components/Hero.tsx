
import { ArrowDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20 pb-10 px-6">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,196,182,0.05)_0,#1C1C28_80%)]" />
      </div>

      <div className="container max-w-5xl mx-auto flex flex-col items-center justify-center z-10">
        <AnimatedSection className="w-full mb-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-3/5 text-center md:text-left">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-accent/10 text-accent rounded-full">
              Software Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-balance">
              <span className="block text-offwhite opacity-85">I craft robust,</span>
              <span className="block text-offwhite">scalable applications</span>
              <span className="text-accent">with modern tech.</span>
            </h1>
            <p className="text-lg md:text-xl text-offwhite/70 max-w-xl mb-8">
              With 4 years of industry experience, I build efficient and elegant solutions 
              to complex problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}
                className="px-8 py-3 rounded-full bg-accent text-white font-medium transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                className="px-8 py-3 rounded-full bg-white/10 text-offwhite border border-white/20 backdrop-blur-sm font-medium transition-all hover:bg-white/20"
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="w-full md:w-2/5 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white/20 glass-morphism animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-70"></div>
                <img 
                  src="https://res.cloudinary.com/dnc36f0i0/image/upload/v1745238351/WhatsApp_Image_2025-04-21_at_1.24.38_PM_1_vvxmtp.jpg" 
                  alt="Professional portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center text-white text-sm font-medium border-4 border-navy animate-pulse-slow">
                4+ Years<br/>Experience
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-12 w-full">
          <button 
            onClick={scrollToAbout}
            className="flex flex-col items-center justify-center text-offwhite/50 hover:text-accent transition-colors duration-300 mx-auto"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="animate-bounce w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
