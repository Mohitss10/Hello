import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 75, category: "frontend", description: "Building the structure and styling of modern, responsive websites.", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "JavaScript", level: 70, category: "frontend", description: "Adding interactivity and logic to web pages with dynamic behavior.", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "React", level: 80, category: "frontend", description: "Component-based architecture for scalable and maintainable UIs.", icon: <FaReact className="text-sky-500" /> },
  { name: "Tailwind CSS", level: 90, category: "frontend", description: "Utility-first CSS framework for fast and consistent styling.", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Next.js", level: 60, category: "frontend", description: "React framework with powerful routing and server-side rendering.", icon: <SiNextdotjs className="text-white dark:text-black" /> },

  // Backend
  { name: "Node.js", level: 55, category: "backend", description: "JavaScript runtime for building fast and scalable server-side apps.", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express", level: 50, category: "backend", description: "Minimalist web framework for building RESTful APIs.", icon: <SiExpress className="text-gray-700 dark:text-gray-200" /> },
  { name: "MongoDB", level: 20, category: "backend", description: "NoSQL database for flexible and document-oriented data storage.", icon: <SiMongodb className="text-green-500" /> },
];

const categories = ["frontend", "backend"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const filteredSkills = skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
className={cn(
  "px-5 py-2 rounded-full transition-all duration-300 capitalize font-medium",
  activeCategory === category
    ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md"
    : " text-white/80 hover:bg-gray-700"
)}

            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-card p-6 rounded-lg shadow-xs transition-transform transform hover:scale-[1.02] hover:shadow-lg duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-center gap-2 mb-4 text-left">
                  <span className="text-xl">{skill.icon}</span>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>

                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <motion.div
                    className="bg-primary h-2 rounded-full origin-left"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>

                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>

                <hr className="my-4 border-muted-foreground/30" />

                <div className="bg-muted/30 p-3 rounded-md transition duration-300 hover:bg-muted/50">
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
