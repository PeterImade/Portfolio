
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  sections: { id: string; label: string }[];
}

const Header = ({ sections }: HeaderProps) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add the scrolled class when page is scrolled
      setScrolled(window.scrollY > 10);

      // Find which section is in view
      const pageYOffset = window.pageYOffset;
      let newActiveSection = sections[0]?.id || "";

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;
        
        const offsetTop = element.offsetTop - 100;
        const offsetHeight = element.offsetHeight;
        
        if (pageYOffset >= offsetTop && pageYOffset < offsetTop + offsetHeight) {
          newActiveSection = section.id;
          break;
        }
      }
      
      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        scrolled ? "bg-black/40 backdrop-blur-lg" : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-xl font-semibold text-offwhite">
          <span className="text-accent">P.</span>Imade
        </div>
        
        <div className="hidden md:flex items-center space-x-1 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/20">
          {sections.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "px-4 py-2 text-sm rounded-full transition-all duration-300",
                activeSection === item.id
                  ? "bg-accent text-white"
                  : "text-offwhite/80 hover:text-white"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
        
        <div className="md:hidden">
          <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DropdownMenuTrigger asChild>
              <button className="p-2 text-offwhite bg-white/10 backdrop-blur-lg rounded-full border border-white/20">
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end"
              className="w-56 mt-2 bg-navy/90 backdrop-blur-xl border border-white/10 p-2 rounded-xl shadow-xl animate-fade-in"
            >
              {sections.map((item) => (
                <DropdownMenuItem
                  key={item.id}
                  className={cn(
                    "flex items-center p-2 my-1 rounded-lg cursor-pointer transition-all duration-300",
                    activeSection === item.id
                      ? "bg-accent text-white"
                      : "text-offwhite/80 hover:bg-white/10"
                  )}
                  onClick={() => scrollToSection(item.id)}
                >
                  <span className="text-base">{item.label}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Header;
