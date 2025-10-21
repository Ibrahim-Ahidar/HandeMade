import { useEffect, useRef, useState } from "react";

export default function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
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
  }, [delay]);

  const animations = {
    "fade-up": `transition-all duration-1000 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`,
    "fade-down": `transition-all duration-1000 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
    }`,
    "fade-left": `transition-all duration-1000 ${
      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
    }`,
    "fade-right": `transition-all duration-1000 ${
      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
    }`,
    "fade-in": `transition-all duration-1000 ${
      isVisible ? "opacity-100" : "opacity-0"
    }`,
    "scale-in": `transition-all duration-1000 ${
      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
    }`,
  };

  return (
    <div ref={ref} className={`${animations[animation]} ${className}`}>
      {children}
    </div>
  );
}
