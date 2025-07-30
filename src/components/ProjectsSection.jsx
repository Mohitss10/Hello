import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Tic Tac Toe Game",
    description: "A fun and animated 2-player game built with React and Tailwind.",
    image: "/projects/img1.jpg",
    tags: ["Html", "CSS", "JavaScript"],
    demoUrl: "https://playgame1-tic-tac-toe.netlify.app/",
    githubUrl: "https://github.com/Mohitss10/TIC_TAC_TOE.git",
  },
  {
    id: 2,
    title: "To-Do App",
    description: "A clean and minimal task manager built with React and Tailwind.",
    image: "/projects/img2.jpg",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://saveyourtodos.netlify.app/",
    githubUrl: "https://github.com/Mohitss10/to-dos.git",
  },
  {
    id: 3,
    title: "Netflix Clone",
    description:
      "A responsive Netflix-inspired UI built with React and Tailwind CSS.",
    image: "/projects/img3.jpg",
    tags: ["Html", "CSS"],
    demoUrl: "https://netclonex.netlify.app/",
    githubUrl: "https://github.com/Mohitss10/Netflix-Clone.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-full shadow-md w-fit flex items-center mx-auto gap-2 transition-transform hover:scale-105"
            target="_blank"
            href="https://github.com/Mohitss10"
            rel="noopener noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};
