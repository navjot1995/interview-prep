import { Metadata } from 'next';
import TechTemplate from '../../components/TechTemplate';
import { reactQuestions, categories } from '../../data/reactData';
import { SiReact } from 'react-icons/si';

export const metadata: Metadata = {
  title: 'Interview Prep - ReactJs Questions',
  description: 'Prepare for your ReactJs interviews with our comprehensive Q&A platform',
};


export default function ReactPage() {
  return (
    <TechTemplate
      title="React.js"
      icon={<SiReact size={28} style={{ color: '#61DAFB' }} />}
      questions={reactQuestions}
      categories={categories}
    />
  );
}