import { Category, Question } from "../types";

export const nodeQuestions : Question[] = [
  {
    id: 1,
    question: "What is the event loop in Node.js?",
    answer: "The event loop is what allows Node.js to perform non-blocking I/O operations despite JavaScript being single-threaded.",
    category: "Core Concepts",
    difficulty: "Medium",
    codeExample: `console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');
// Output: Start, End, Promise, Timeout`
  },
  // Add more Node.js questions...
];

export const categories: Category[] = [
  { id: 'all', name: 'All Questions', icon: '🟢', count: nodeQuestions.length },
  // Add more categories...
];