"use client";

import { Category } from "../types";
import { theme } from "@/app/theme";
import { SiJavascript, SiReact, SiNodedotjs } from "react-icons/si";
import { MdCategory, MdSignalCellularAlt, MdTrendingUp } from "react-icons/md";
import { FaCode, FaDatabase } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

interface SidebarProps {
  icon: React.ReactNode;
  categories: Category[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedDifficulty: string;
  setSelectedDifficulty: (difficulty: string) => void;
}

const difficultyIcons = {
  All: <MdTrendingUp />,
  Easy: <MdSignalCellularAlt className="text-green-500" />,
  Medium: <MdSignalCellularAlt className="text-yellow-500" />,
  Hard: <MdSignalCellularAlt className="text-red-500" />,
};

export default function Sidebar({
  icon,
  categories,
  selectedCategory,
  setSelectedCategory,
  selectedDifficulty,
  setSelectedDifficulty,
}: SidebarProps) {
  const difficulties = ["All", "Easy", "Medium", "Hard"];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24 border border-gray-100">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div
            className="p-2 rounded-lg"
          >
            {icon}
          </div>
          <h3 className="text-lg font-bold text-gray-900">Categories</h3>
        </div>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 ${
                selectedCategory === category.id
                  ? "bg-opacity-10 shadow-sm"
                  : "hover:bg-gray-50"
              }`}
              style={
                selectedCategory === category.id
                  ? {
                      backgroundColor: theme.primaryLight,
                      color: theme.primary,
                    }
                  : { color: "#374151" }
              }
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </div>
              <span
                className="text-xs px-2 py-0.5 rounded-full font-semibold"
                style={
                  selectedCategory === category.id
                    ? {
                        backgroundColor: theme.primary,
                        color: "white",
                      }
                    : {
                        backgroundColor: "#F3F4F6",
                        color: "#6B7280",
                      }
                }
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <FaCode className="text-[#F54927]" size={20} />
          <h3 className="text-lg font-bold text-gray-900">Difficulty</h3>
        </div>
        <div className="space-y-2">
          {difficulties.map((difficulty) => (
            <button
              key={difficulty}
              onClick={() => setSelectedDifficulty(difficulty)}
              className={`w-full text-left px-3 py-2.5 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                selectedDifficulty === difficulty
                  ? "bg-opacity-10 shadow-sm"
                  : "hover:bg-gray-50"
              }`}
              style={
                selectedDifficulty === difficulty
                  ? {
                      backgroundColor: theme.primaryLight,
                      color: theme.primary,
                    }
                  : { color: "#374151" }
              }
            >
              {difficultyIcons[difficulty as keyof typeof difficultyIcons]}
              <span className="text-sm font-medium">{difficulty}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100">
        <div
          className="bg-gradient-to-br p-4 rounded-lg"
          style={{
            background: `linear-gradient(135deg, ${theme.primaryLight} 0%, white 100%)`,
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <GiBrain size={24} style={{ color: theme.primary }} />
            <h4 className="font-semibold text-gray-900">Preparation Tips</h4>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            Practice these questions daily. Focus on understanding concepts
            rather than memorizing answers.
          </p>
        </div>
      </div>
    </div>
  );
}
