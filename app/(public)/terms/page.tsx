import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interview Prep - Terms & Conditions",
  description:
    "Read the terms and conditions for using InterviewPrep, your go-to platform for interview preparation.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex justify-center px-4">
      <main className="w-full max-w-6xl py-8">
        {/* Logo */}
        <Link href="/" className="flex justify-center mb-8">
          <Image
            src="/images/interviewPrep-logo-trans.png"
            alt="InterviewPrep Logo"
            width={260}
            height={50}
            className="h-40"
            priority
          />
        </Link>

        {/* Title */}
        <h1 className="text-3xl font-semibold text-center mb-6 text-gray-900 dark:text-white">
          Terms & Conditions
        </h1>

        {/* Content */}
        <div className="space-y-6 text-gray-600 dark:text-gray-400 text-base leading-7">
          <p>
            Welcome to{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              InterviewPrep
            </span>
            . By accessing or using this platform, you agree to comply with and
            be bound by the following terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            1. Use of Platform
          </h2>
          <p>
            This platform is designed to help users prepare for technical
            interviews through curated questions, answers, and examples. You
            agree to use the content for personal learning purposes only.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            2. Content Accuracy
          </h2>
          <p>
            While we strive to provide accurate and up-to-date information,
            InterviewPrep does not guarantee the completeness or accuracy of all
            content.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            3. User Responsibility
          </h2>
          <p>
            You are responsible for how you use the information provided. We are
            not liable for any outcomes related to interviews or job
            applications.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            4. Intellectual Property
          </h2>
          <p>
            All content on this platform is the property of InterviewPrep unless
            otherwise stated. Unauthorized copying or distribution is
            prohibited.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            5. Updates to Terms
          </h2>
          <p>
            We may update these terms from time to time. Continued use of the
            platform means you accept the changes.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            6. Contact
          </h2>
          <p>For any questions, feel free to reach out via our platform.</p>
        </div>

        {/* Back Button */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="px-6 py-2 rounded-full text-white font-medium transition-all hover:opacity-90"
            style={{ backgroundColor: "#F54927" }}
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
