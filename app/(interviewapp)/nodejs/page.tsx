import TechTemplate from '../../components/TechTemplate';
import { nodeQuestions, categories } from '../../data/nodeData';
import { SiNodedotjs } from 'react-icons/si';

export default function NodePage() {
  return (
    <TechTemplate
      title="Node.js"
      icon={<SiNodedotjs size={28} style={{ color: '#339933' }} />}
      questions={nodeQuestions}
      categories={categories}
    />
  );
}