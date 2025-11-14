import { Download } from "lucide-react";

function AboutSection(){
    return (
        <section id="about" className="relative py-28">
            <div className="max-w-5xl flex flex-col container mx-auto px-2">
                <h1 className="text-3xl text-center pb-16 font-bold">About {" "}<span className="text-primary">Me</span></h1>
                <div className="flex items-start space-x-8 max-md:flex-col max-md:space-y-5 max-md:text-center max-md:items-center">
                    <div className="w-1/3 max-md:w-3/4 gradient-border z-1 rounded-xl p-0.5">
                        <img src="/hero.png" alt="About PNG" className="w-full h-full object-cover bg-foreground z-2 rounded-xl" />
                    </div>
                    <div className="w-2/3 flex flex-col flex-start space-y-6">
                    <h1 className="text-2xl font-medium md:text-start text-primary pointer-events-none">Phan Huu Danh - Software Developer</h1>
                    <p className ="text-xl text-foreground md:text-start">I'm a software developer and a current student at the University of Science (VNU-HCMC). I am passionate about building dynamic and responsive web applications. I am constantly honing my skills and exploring new technologies to improve my craft.</p>
                    <div className="flex max-md:justify-center space-x-3">
                        <a href="#contact" className="cosmic-button items-center text-center">Get in touch</a>
                        <button onClick="" className="cosmic-button bg-transparent border-2 border-primary hover:bg-primary whitespace-nowrap flex text-center text-foreground items-center"><Download className="inline-block mr-2"/> Download CV </button></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;