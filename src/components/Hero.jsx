import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {/* 1. Added 'block md:inline' to put this on its own line on mobile */}
            {/* 2. Added 'mb-2 md:mb-0' for a little vertical gap on mobile */}
            <span className="block md:inline mb-2 md:mb-0 opacity-0 animate-fade-in">
              Hi, I'm{" "}
            </span>
            
            {/* Kept the name spans together */}
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Saketh Bhargava
            </span>
            {/* Removed 'ml-2' and added a manual space {" "} between spans to allow natural wrapping if needed */}
            {" "}
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              Rallapally
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I love building web applications with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both functional and beautiful.
          </p>

          <div className="pt-3 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View my work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};