
import { Metadata } from 'next';
import TechTemplate from '@/app/components/TechTemplate';
import { SiJavascript } from 'react-icons/si';
import { javascriptQuestions,categories } from '@/app/data/js-questions';

export const metadata: Metadata = {
  title: 'Interview Prep - JavaScript Questions',
  description: 'Prepare for your JavaScript interviews with our comprehensive Q&A platform',
};

export default function JavaScriptPage() {
  return (
    <TechTemplate
      title="JavaScript"
      icon={<SiJavascript size={28} style={{ color: '#F7DF1E' }} />}
      questions={javascriptQuestions}
      categories={categories}
    />
  );
}
