
import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 
    | "fade-in" 
    | "slide-left" 
    | "slide-right" 
    | "scale-in";
  delay?: number;
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  animation = "fade-in",
  delay = 0
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const style = {
    opacity: 0,
    animationDelay: `${delay}ms`,
    animationFillMode: "forwards" as const,
  };

  return (
    <div
      ref={ref}
      className={`${className}`}
      style={isVisible ? { ...style, animation: `${animation} 0.7s ease-out forwards ${delay}ms` } : style}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
