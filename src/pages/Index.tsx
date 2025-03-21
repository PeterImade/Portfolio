
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

const Index = () => {
  return (
    <div className="bg-navy min-h-screen text-offwhite">
      <Header sections={sections} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-8 text-center border-t border-white/10">
        <div className="container mx-auto px-6">
          <p className="text-offwhite/60 text-sm">
            © {new Date().getFullYear()} Peter Imade. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
