export interface Question {
  id: number;
  question: string;
  answer: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  codeExample?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}