import { Metadata } from "next";
import TechTemplate from "../../components/TechTemplate";
import { SiVuedotjs } from "react-icons/si";
import { vueQuestions,categories } from "@/app/data/vueData";

export const metadata: Metadata = {
  title: "Interview Prep - Vue.js Questions",
  description:
    "Prepare for your Vue.js interviews with our comprehensive Q&A platform",
};

export default function VueJsPage() {
  return (
    <TechTemplate
      title="Vue.js"
      icon={<SiVuedotjs size={28} style={{ color: "#42b883" }} />}
      questions={vueQuestions}
      categories={categories}
    />
  );
}
