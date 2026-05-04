import { FiDatabase } from 'react-icons/fi';
import TechTemplate from '../../components/TechTemplate';
import { databaseQuestions, categories } from '../../data/databaseData';

export default function DatabasePage() {
  return (
    <TechTemplate
      title="Database"
      icon={<FiDatabase size={28} style={{ color: '#336791' }} />}
      questions={databaseQuestions}
      categories={categories}
    />
  );
}