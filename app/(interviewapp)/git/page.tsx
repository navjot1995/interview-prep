import TechTemplate from '../../components/TechTemplate';
import { gitQuestions, categories } from '../../data/gitData';
import { SiGit } from 'react-icons/si';

export default function GitPage() {
  return (
    <TechTemplate
      title="Git"
      icon={<SiGit size={28} style={{ color: '#F05032' }} />}
      questions={gitQuestions}
      categories={categories}
    />
  );
}