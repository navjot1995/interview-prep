"use client";

import Link from "next/link";
import { theme } from "@/app/theme";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
} from "react-icons/si";
import { FiArrowRight, FiDatabase } from "react-icons/fi";
import { FaDocker, FaGitAlt, FaVuejs } from "react-icons/fa6";
import { GrSystem } from "react-icons/gr";

export default function TechCards() {
  const technologies = [
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-500" size={48} />,
      description:
        "Master core JavaScript concepts, closures, promises, ES6+, and more.",
      path: "/javascript",
      color: "#F7DF1E",
      bg: "#FEF9C3",
      questionCount: 50,
      difficulty: "Beginner to Advanced",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="text-green-600" size={48} />,
      description:
        "Understand event loop, streams, clustering, and backend development.",
      path: "/nodejs",
      color: "#339933",
      bg: "#DCFCE7",
      questionCount: 40,
      difficulty: "Intermediate to Advanced",
    },
    {
      name: "React.js",
      icon: <SiReact className="text-blue-500" size={48} />,
      description:
        "Learn hooks, state management, lifecycle methods, and React best practices.",
      path: "/reactjs",
      color: "#61DAFB",
      bg: "#E0F2FE",
      questionCount: 45,
      difficulty: "Intermediate to Advanced",
    },
    {
      name: "Vue.js",
      icon: <FaVuejs className="text-green-500" size={48} />,
      description:
        "Learn component-based development, reactivity, and Vue.js best practices.",
      path: "/vuejs",
      color: "#42B883",
      bg: "#E8F5E9",
      questionCount: 40,
      difficulty: "Intermediate to Advanced",
    },

    {
      name: "Git & Version Control",
      icon: <FaGitAlt className="text-orange-600" size={48} />,
      description:
        "Learn Git commands, branching strategies, and version control best practices.",
      path: "/git",
      color: "#F54927",
      bg: "#DBEAFE",
      questionCount: 35,
      difficulty: "Beginner to Advanced",
    },
    {
      name: "System Design",
      icon: <GrSystem className="text-blue-600" size={48} />,
      description:
        "Understand how to design scalable systems, databases, and APIs for technical interviews.",
      path: "/system-design",
      color: "#336791",
      bg: "#DBEAFE",
      questionCount: 35,
      difficulty: "Beginner to Advanced",
    },
    {
      name: "Database",
      icon: <FiDatabase className="text-blue-600" size={48} />,
      description:
        "SQL queries, indexing, normalization, and database design patterns.",
      path: "/database",
      color: "#336791",
      bg: "#DBEAFE",
      questionCount: 35,
      difficulty: "Beginner to Advanced",
    },
    {
      name: "Docker & Jenkins",
      icon: <FaDocker className="text-blue-500" size={48} />,
      description:
        "Master containerization, Docker commands, orchestration, and CI/CD with Jenkins.",
      path: "/docker",
      color: "#2496ED",
      bg: "#E0F2FE",
      questionCount: 18,
      difficulty: "Intermediate to Advanced",
    },
  ];

  return (
    <div className="py-20" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Interview Topics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your technology stack and start preparing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech) => (
            <Link href={tech.path} key={tech.name}>
              <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-transparent cursor-pointer">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="p-3 rounded-xl transition-all group-hover:scale-110"
                      style={{ backgroundColor: tech.bg }}
                    >
                      {tech.icon}
                    </div>
                    <div className="text-right">
                      <div
                        className="text-2xl font-bold"
                        style={{ color: theme.primary }}
                      >
                        {tech.questionCount}+
                      </div>
                      <div className="text-xs text-gray-500">Questions</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tech.name}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {tech.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span
                      className="text-sm px-3 py-1 rounded-full"
                      style={{ backgroundColor: tech.bg, color: tech.color }}
                    >
                      {tech.difficulty}
                    </span>
                    <span
                      className="flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                      style={{ color: theme.primary }}
                    >
                      Start Learning
                      <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
