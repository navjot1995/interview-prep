import TechTemplate from '../../components/TechTemplate';
import { dockerQuestions, categories } from '../../data/dockerData';
import { FaDocker } from 'react-icons/fa';

export default function DockerPage() {
  return (
    <TechTemplate
      title="Docker & Jenkins"
      icon={<FaDocker size={28} style={{ color: '#2496ED' }} />}
      questions={dockerQuestions}
      categories={categories}
    />
  );
}