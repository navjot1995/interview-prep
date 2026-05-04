import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex justify-center px-4">
      <main className="w-full max-w-6xl py-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/interviewPrep-logo-trans.png"
            alt="InterviewPrep Logo"
            width={260}
            height={50}
            className="h-40"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-semibold text-center mb-6 text-gray-900 dark:text-white">
          Privacy Policy
        </h1>

        {/* Content */}
        <div className="space-y-6 text-gray-600 dark:text-gray-400 text-base leading-7">
          <p>
            At{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              InterviewPrep
            </span>
            , your privacy is important to us. This Privacy Policy explains how
            we collect, use, and protect your information.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            1. Information We Collect
          </h2>
          <p>
            We may collect personal information such as your name and email
            address when you contact us or use our platform. We also collect
            non-personal data such as browser type and usage patterns to improve
            our services.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To respond to your inquiries and messages</li>
            <li>To improve platform performance and user experience</li>
            <li>To analyze usage trends and optimize content</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            3. Data Protection
          </h2>
          <p>
            We implement reasonable security measures to protect your data.
            However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            4. Third-Party Services
          </h2>
          <p>
            We may use third-party tools (such as analytics or email services)
            that may collect information in accordance with their own privacy
            policies.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            5. Cookies
          </h2>
          <p>
            Our platform may use cookies to enhance your browsing experience.
            You can disable cookies through your browser settings if you prefer.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            6. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Continued use
            of the platform means you accept those changes.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            7. Contact Us
          </h2>
          <p>
            If you have any questions regarding this policy, please contact us
            through the Contact page.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link
            href="/contact"
            className="px-6 py-2 rounded-full text-white font-medium transition-all hover:opacity-90"
            style={{ backgroundColor: "#F54927" }}
          >
            Contact Us
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
