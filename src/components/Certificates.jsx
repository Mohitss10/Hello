import { ArrowRight, ExternalLink } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Javascript",
    description: "- Infosys",
    image: "projects/pp1.png",
    demoUrl: "https://github.com/Mohitss10/javascript_Certificate/commit/1655734597633da8bd2c61c73bad87372b41b359",
    date: "june 2025",
  },
  {
    id: 2,
    title: "Prompt Engineering",
    description: "- IBM Skillbuild",
    image: "/projects/pp2.webp",
    demoUrl: "https://github.com/Mohitss10/Prompt_Engineering/blob/main/Screenshot%202025-06-12%20223048.png",
    date: "Dec 2024",
  },
  {
    id: 3,
    title: "Getting Started with React",
    description: "- IBM Skillbuild",
    image: "/projects/pp3.avif",
    demoUrl: "https://www.credly.com/badges/e6145204-c4cd-46c1-b7b9-569c1daa3d87",
    date: "July 2025",
  },
  {
    id: 4,
    title: "TCS_iCON",
    description: "- Tata",
    image: "/projects/pp4.jpg",
    demoUrl: "https://github.com/Mohitss10/tcs/blob/main/Screenshot%202025-06-12%20222945.png",
    date: "Dec 2024",
  },
  {
    id: 5,
    title: "Html CSS & JavaScript Course for Beginners",
    description: "- Udemy",
    image: "/projects/pp5.jpg",
    demoUrl: "https://www.udemy.com/certificate/UC-af4d144d-d2bf-431d-bd50-f3c6c132b69e/",
    date: "Dec 2024",
  },
];


export const Certificates = () => {
  return (
    <section id="certificates" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">Certificates</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I've earned these certifications through hands-on learning and consistent effort. They highlight the skills I've built along the way.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

<div className="p-6 relative">
  <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
  <p className="text-muted-foreground text-sm mb-5">{cert.description}</p>

  <div className="absolute bottom-6 left-6 text-xs text-muted-foreground">
    {cert.date}
  </div>

  <div className="flex justify-end">
    <a
      href={cert.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground/80 hover:text-primary transition-colors duration-300"
    >
      <ExternalLink size={20} />
    </a>
  </div>
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
