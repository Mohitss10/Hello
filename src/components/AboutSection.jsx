import { Briefcase, Code, User } from "lucide-react";
import { GraduationCap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer
            </h3>

            <p className="text-muted-foreground">
              Crafting engaging, high-performance web experiences is what I do best.
              As a front-end developer with a keen eye for detail and a commitment to clean, scalable code, I specialize in building modern, responsive websites that are as impressive as they are intuitive.            </p>

            <p className="text-muted-foreground">
              I'm driven by a passion for elegant solutions to complex challenges, and I stay at the cutting edge of web development by continuously exploring new technologies, frameworks, and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">B.Tech in Computer Science</h4>
                  <p className="text-muted-foreground">
                    GH Raisoni University, Saikheda (2022 – 2026)
                  </p>
                  <p className="text-muted-foreground">
                    Current CGPA: 8.6
                  </p>
                  <p className="text-muted-foreground mt-1">
                    Focused on software engineering, algorithms, and data structures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 pt-10 justify-center">

          <a
            href="projects/resume.pdf"
            download="Mohit-Gawande-CV.pdf"
            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};
