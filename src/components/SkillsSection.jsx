import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiCplusplus,
} from "react-icons/si";
import { PiFigmaLogoLight } from "react-icons/pi";
import { TbMessageChatbot } from "react-icons/tb";
import { GiBrain } from "react-icons/gi";

import { Code, Server, Wrench, Brain } from "lucide-react"; // Category icons

const categoryData = [
  { key: "frontend", label: "Frontend", icon: <Code size={16} /> },
  { key: "backend", label: "Backend", icon: <Server size={16} /> },
  { key: "tools", label: "Tools", icon: <Wrench size={16} /> },
  { key: "problem-solving", label: "Problem Solving", icon: <Brain size={16} /> },
];

const skills = [
  // Frontend
  {
    name: "HTML/CSS",
    level: 75,
    category: "frontend",
    description: "Building the structure and styling of modern, responsive websites.",
    icon: <FaHtml5 className="text-orange-500" />,
  },
  {
    name: "JavaScript",
    level: 70,
    category: "frontend",
    description: "Adding interactivity and logic to web pages with dynamic behavior.",
    icon: <FaJsSquare className="text-yellow-400" />,
  },
  {
    name: "React",
    level: 80,
    category: "frontend",
    description: "Component-based architecture for scalable and maintainable UIs.",
    icon: <FaReact className="text-sky-500" />,
  },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "frontend",
    description: "Utility-first CSS framework for fast and consistent styling.",
    icon: <SiTailwindcss className="text-cyan-400" />,
  },
  {
    name: "Next.js",
    level: 60,
    category: "frontend",
    description: "React framework with powerful routing and server-side rendering.",
    icon: <SiNextdotjs className="text-white dark:text-black" />,
  },

  // Backend
  {
    name: "Node.js",
    level: 55,
    category: "backend",
    description: "JavaScript runtime for building fast and scalable server-side apps.",
    icon: <FaNodeJs className="text-green-600" />,
  },
  {
    name: "Express",
    level: 50,
    category: "backend",
    description: "Minimalist web framework for building RESTful APIs.",
    icon: <SiExpress className="text-gray-700 dark:text-gray-200" />,
  },
  {
    name: "MongoDB",
    level: 20,
    category: "backend",
    description: "NoSQL database for flexible and document-oriented data storage.",
    icon: <SiMongodb className="text-green-500" />,
  },

  // Problem Solving
  {
    name: "C++",
    level: 80,
    category: "problem-solving",
    description: "Developing efficient and robust C++ solutions with a strong focus on data structures, algorithms, and system-level programming.",
    icon: <SiCplusplus className="text-blue-600" />,
  },
  {
    name: "DSA & Problem Solving",
    level: 45,
    category: "problem-solving",
    description: "Writing optimized solutions using data structures and algorithms.",
    icon: <GiBrain className="text-purple-500" />,
  },

  // Tools
  {
    name: "GitHub",
    level: 70,
    category: "tools",
    description: "Version control and collaboration platform for code hosting.",
    icon: <FaGithub className="text-white" />,
  },
  {
    name: "UI/UX Design",
    level: 50,
    category: "tools",
    description: "Designing intuitive user interfaces and user-friendly experiences.",
    icon: <PiFigmaLogoLight className="text-pink-500" />,
  },
  {
    name: "Prompt Engineering",
    level: 80,
    category: "tools",
    description: "Crafting effective prompts for AI to deliver accurate results.",
    icon: <TbMessageChatbot className="text-blue-400" />,
  },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
            Skills
          </span>
        </h2>

        {/* Category Buttons with Icons */}
        <div className="relative mb-12">
          {/* Left Gradient */}
          <div className="absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>

          {/* Right Gradient */}
          <div className="absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>

          <div className="flex overflow-x-auto scrollbar-hide space-x-4 px-2 py-2 border-b border-gray-700 sm:flex-wrap sm:justify-center sm:gap-4 sm:overflow-visible transition-all duration-300">
            {categoryData.map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={cn(
                  "flex-shrink-0 flex items-center gap-2 px-5 py-2 rounded-full transition-all duration-300 capitalize font-semibold backdrop-blur-sm shadow-md hover:scale-[1.05]",
                  activeCategory === key
                    ? "bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white shadow-lg"
                    : "bg-muted text-foreground hover:bg-gray-800"
                )}
              >
                {icon}
                {label}
              </button>
            ))}
          </div>
        </div>



        {/* Skill Cards */}
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
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>

                <hr className="my-4 border-muted-foreground/30" />

                <div className="bg-muted/30 p-3 rounded-md transition duration-300 hover:bg-muted/50">
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
