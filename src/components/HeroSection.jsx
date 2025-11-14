import { ArrowDown } from "lucide-react";

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative container max-w-5xl min-h-screen flex items-center md:justify-between max-md:flex-col-reverse max-md:pb-20 max-md:p-0 px-4 "
    >
      <div className="flex flex-col items-start space-y-2 w-full md:max-w-[50%] max-md:items-center p-4 md:p-1 ">
        <span className="text-2xl font-medium opacity-0 animate-fade-in-delay-1 pointer-events-none">
          Hello, It's me!
        </span>
        <h1 className="text-primary flex-1 text-nowrap text-5xl font-bold opacity-0 animate-fade-in-delay-2 pointer-events-none">Huu Danh</h1>
        <h2 className="text-3xl flex flex-start whitespace-nowrap opacity-0 animate-fade-in-delay-3">I'm a <span>&nbsp;</span><span className="auto-typing">Software Developer</span></h2>
        <p className="text-xl font-normal text-foreground text-start max-md:text-center opacity-0 animate-fade-in-delay-3">Welcome to my digital portfolio. Take a look at my work and let's build something great together.</p>
        <div className="mt-4 opacity-0 animate-fade-in-delay-4">
        <a href="#projects" className="cosmic-button hover:bg-primary/80">View My Projects</a>
      </div>
      </div>
      <div className="z-1 relative w-[320px] h-80 p-0.5 max-md:w-[250px] max-md:h-[250px] bg-background rounded-full gradient-border">
        <img src="/hero.png" alt="Hero Image" className="w-full h-full object-cover rounded-full bg-foreground "/>
      </div>
      <div className="absolute bottom-8 left-1/2 translate-x-[-50%] flex flex-col items-center animate-bounce max-md:bottom-4">
        <span>Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary"/>
      </div>
    </section>
  );
}

export default HeroSection;
