import type { Metadata } from "next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Interview Prep - Public Pages",
  description:
    "Explore our public pages to learn more about InterviewPrep, read our terms and conditions, and get in touch with us.",
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
