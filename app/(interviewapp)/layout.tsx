import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interview Prep - All Questions",
  description:
    "Prepare for  interviews with our comprehensive Q&A platform",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
