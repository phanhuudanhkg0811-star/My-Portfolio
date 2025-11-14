function SkillsSection() {
  const backend = [
    { name: "Node.js", imgUrl: "/nodejs.png" },
    { name: "Express", imgUrl: "/express.png" },
    { name: "MongoDB", imgUrl: "/mongodb.png" },
    { name: "MySQL", imgUrl: "/mysql.png" },
    { name: "Spring Boot", imgUrl: "/spring.png" },
    { name: "Javascript", imgUrl: "/javascript.png" },
    { name: "Mongoose", imgUrl: "/mongoose.png"}
  ];

  const frontend = [
    { name: "Javascript", imgUrl: "/javascript.png" },
    { name: "React", imgUrl: "/react.png" },
    { name: "HTML5", imgUrl: "/html.png" },
    { name: "CSS3", imgUrl: "/css.png" },
    { name: "Tailwind CSS", imgUrl: "/tailwind.png" },
    { name: "Git/Github", imgUrl: "/github.png" },
    { name: "VS Code", imgUrl: "/vs-code.png" },
  ]

  const skillCategories = [
    { title: "Backend", items: backend },
    { title: "Frontend", items: frontend }
  ];

  return (
    <section id="skills" className="relative py-24">
      <div className="max-w-6xl flex flex-col container mx-auto px-2">
        <h1 className="text-3xl text-center pb-8 font-bold">
          My <span className="text-primary">Skills</span>
        </h1>
        <p className="text-2xl font-light text-center py-10">
          Technology is always evolving. Here are the skills I've been focusing on and am actively working to improve.
        </p>
        {skillCategories.map((category) => (
          <div key={category.title} className="mb-12">
            <h2 className="text-3xl text-primary font-bold mb-8">{category.title}</h2>
            <div className="w-full mx-auto border-2 border-primary overflow-x-auto backdrop-blur-sm scrollbarnone flex p-4 border-l-0 border-r-0 blur-side">
              <div className="flex flex-nowrap space-x-4 animate-spin-round pr-2">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                                            flex-none w-38 h-38 p-4
                                            flex flex-col items-center justify-center space-y-2
                                            bg-white/50 rounded-lg card-hover
                                            text-center
                                        "
                  >
                    <img
                      src={skill.imgUrl}
                      alt={skill.name}
                      className="h-17 w-17 object-contain"
                    />
                    <span className="text-[1rem] font-medium text-foreground">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
              <div aria-hidden="true" className="flex flex-nowrap space-x-4 animate-spin-round pl-2">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                                            flex-none w-38 h-38 p-4
                                            flex flex-col items-center justify-center space-y-2
                                            bg-white/50 rounded-lg card-hover
                                            text-center
                                        "
                  >
                    <img
                      src={skill.imgUrl}
                      alt={skill.name}
                      className="h-17 w-17 object-contain"
                    />
                    <span className="text-[1rem] font-medium text-foreground">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
