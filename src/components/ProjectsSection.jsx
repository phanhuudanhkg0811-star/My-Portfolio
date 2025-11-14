import { ExternalLink, Github } from "lucide-react";

function ProjectsSection() {
  const projects = [
    {
      id: 1,
      name: "Translation Extension",
      desc: "This is my mini project to learn HTML, CSS and JavaScript.",
      image: "/Chrome-Extension.jpg",
      tags: ["HTML5", "CSS3", "JavaScript"],
      demoUrl:
        "https://github.com/phanhuudanhkg0811-star/Translation-Chrome-Extension",
      srcUrl:
        "https://github.com/phanhuudanhkg0811-star/Translation-Chrome-Extension",
    },
    {
      id: 2,
      name: "Empty Project",
      desc: "No thing here",
      image: "/hero.png",
      tags: ["React", "Tailwind CSS", "HTML5", "CSS3", "Spring Boot"],
      demoUrl:
        "#",
      srcUrl:
        "#",
    },
        {
      id: 3,
      name: "Empty Project",
      desc: "No thing here",
      image: "/hero.png",
      tags: ["React", "Tailwind CSS", "HTML5", "CSS3"],
      demoUrl:
        "#",
      srcUrl:
        "#",
    },
  ];
  return (
    <section id="projects" className="relative py-26">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold items-center text-center">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-2xl font-light text-center py-10">
          A collection of my recent projects. Feel free to take a look.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className="card-hover group bg-card rounded-lg overflow-hidden shadow-xs border-2 border-primary/30 flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                 <div className="p-4 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.tags.map((tag) => {
                        return (
                          <div className="text-sm font-semibold p-1 bg-primary/50 text-white rounded-sm">
                            {tag}
                          </div>
                        );
                      })}
                    </div>
                    <h3 className="text-xl font-semibold text-start mb-2">{project.name}</h3>
                    <p className="text-muted-foreground h-full text-sm mb-4 text-start flex-1 ">{project.desc}</p>
                    <div className="flex space-x-3 items-center ">
                        <a target="_blank" href={project.demoUrl} className="text-foreground/80 hover:text-primary hover:scale-105 transition-all duration-300 "><ExternalLink/></a>
                        <a target="_blank" href={project.srcUrl} className="text-foreground/80 hover:text-primary hover:scale-105 transition-all duration-300 "><Github/></a>
                    </div>
                  </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
