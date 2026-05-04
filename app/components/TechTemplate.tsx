"use client";

import { useState } from "react";
import QuestionCard from "../components/QuestionCard";
import Sidebar from "../components/Sidebar";
import { theme } from "@/app/theme";
import { GiTeacher } from "react-icons/gi";
import { Category, Question } from "../types";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

interface TechTemplateProps {
  title: string;
  icon: React.ReactNode;
  questions: Question[];
  categories: Category[];
}

export default function TechTemplate({
  title,
  icon,
  questions,
  categories,
}: TechTemplateProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const filteredQuestions = questions.filter((q) => {
    const matchesCategory =
      selectedCategory === "all" ||
      q.category.toLowerCase().replace(" ", "-") === selectedCategory;
    const matchesSearch =
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty =
      selectedDifficulty === "All" || q.difficulty === selectedDifficulty;

    return matchesCategory && matchesSearch && matchesDifficulty;
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2 group">
                <Image
                  src="/images/logo-trans.png"
                  alt="Logo"
                  width={50}
                  height={50}
                  className="hidden sm:inline-block"
                />
              </Link>
              <div>
                <h1
                  className="text-2xl font-bold"
                  style={{ color: theme.primary }}
                >
                  {title} Interview Questions
                </h1>
                <p className="text-sm text-gray-500">
                  Prepare for your next interview with confidence
                </p>
              </div>
            </div>

            <div className="relative w-full sm:w-96">
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2.5 pl-10 pr-4 text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 transition-all"
                style={{
                  borderColor: searchTerm ? theme.primary : "#E5E7EB",
                }}
              />
              <CiSearch
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />
              ,
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <Sidebar
              categories={categories}
              icon={icon}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedDifficulty={selectedDifficulty}
              setSelectedDifficulty={setSelectedDifficulty}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Stats Bar */}
            <div className="bg-white rounded-xl p-4 mb-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3">
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: theme.primaryLight }}
                >
                  <GiTeacher size={20} style={{ color: theme.primary }} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Showing Results</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {filteredQuestions.length} questions
                  </p>
                </div>
              </div>
            </div>

            {filteredQuestions.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
                <p className="text-gray-500 text-lg">
                  No questions found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedDifficulty("All");
                    setSearchTerm("");
                  }}
                  className="mt-4 px-6 py-2 rounded-lg text-white font-medium transition-all hover:shadow-lg"
                  style={{ backgroundColor: theme.primary }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredQuestions.map((question) => (
                  <QuestionCard key={question.id} question={question} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
