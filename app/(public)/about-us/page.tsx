import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interview Prep - About Us",
  description:
    "Learn more about InterviewPrep and our mission to help you succeed in technical interviews.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex justify-center px-4">
      <main className="w-full max-w-6xl py-8">
        {/* Heading */}
        <h1 className="text-3xl font-semibold text-center mb-6 text-gray-900 dark:text-white">
          About Interview
          <span
            style={{
              color: "var(--primary)",
            }}
          >
            Prep
          </span>
        </h1>

        {/* Intro */}
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-7">
          InterviewPrep is a modern platform designed to help developers master
          technical interviews with curated questions, detailed explanations,
          and real-world code examples.
        </p>

        {/* Sections */}
        <div className="space-y-10 text-gray-600 dark:text-gray-400 leading-7">
          {/* Mission */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              🚀 Our Mission
            </h2>
            <p>
              To simplify interview preparation by providing structured,
              practical, and high-quality content that helps developers gain
              confidence and crack top tech interviews.
            </p>
          </section>

          {/* What we offer */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              💡 What We Offer
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Curated questions across frontend, backend, and system design
              </li>
              <li>Clear explanations with real-world examples</li>
              <li>Hands-on code snippets for better understanding</li>
              <li>Topic-wise filtering and quick search</li>
            </ul>
          </section>

          {/* Why */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              🎯 Why InterviewPrep?
            </h2>
            <p>
              Unlike scattered resources, InterviewPrep focuses on structured
              learning. Every question is designed to reflect real interview
              scenarios, helping you prepare smarter—not harder.
            </p>
          </section>

          {/* Tech */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              ⚙️ Built With
            </h2>
            <p>
              Built using Next.js, TypeScript, and TailwindCSS to ensure a fast,
              scalable, and modern user experience.
            </p>
          </section>

          {/* Creator */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              👨‍💻 Creator
            </h2>
            <p>
              Created by{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Navjot Mall
              </span>
              , a full-stack developer passionate about building tools that help
              developers grow and succeed in their careers.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="px-6 py-2 rounded-full text-white font-medium transition-all hover:opacity-90"
            style={{ backgroundColor: "#F54927" }}
          >
            Explore Questions
          </Link>

          <Link
            href="/terms"
            className="px-6 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Terms & Conditions
          </Link>
        </div>
      </main>
    </div>
  );
}
