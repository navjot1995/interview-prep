import { Metadata } from "next";
import TechTemplate from "../../components/TechTemplate";
import { GrSystem } from "react-icons/gr";
import { systemDesignCategories, systemDesignQuestions } from "@/app/data/systemDesignData";

export const metadata: Metadata = {
  title: "Interview Prep - System Design Questions",
  description:
    "Prepare for your system design interviews with our comprehensive Q&A platform",
};

export default function SystemDesignPage() {
  return (
    <TechTemplate
      title="System Design"
      icon={<GrSystem size={28} style={{ color: "#336791" }} />}
      questions={systemDesignQuestions}
      categories={systemDesignCategories}
    />
  );
}
