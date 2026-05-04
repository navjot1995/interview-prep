'use client';

import { useState } from 'react';
import { Question } from '../types';
import { theme, difficultyColors } from '@/app/theme';
import { 
  AiOutlineEye, 
  AiOutlineEyeInvisible, 
  AiOutlineCode, 
  AiOutlineClose 
} from 'react-icons/ai';
import { HiOutlineLightBulb } from 'react-icons/hi';

interface QuestionCardProps {
  question: Question;
}

export default function QuestionCard({ question }: QuestionCardProps) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(true);
  const [isCodeVisible, setIsCodeVisible] = useState(false);

//   const getDifficultyStyle = () => {
//     const colors = difficultyColors[question.difficulty];
//     return `bg-opacity-10 ${colors.bg} text-[${colors.text}]`;
//   };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="p-6">
        {/* Question Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <span 
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ 
                  backgroundColor: `${theme.primaryLight}`,
                  color: theme.primaryDark
                }}
              >
                {question.category}
              </span>
              <span 
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ 
                  backgroundColor: difficultyColors[question.difficulty].bg,
                  color: difficultyColors[question.difficulty].text
                }}
              >
                {question.difficulty}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 leading-relaxed">
              {question.question}
            </h3>
          </div>
          <button
            onClick={() => setIsAnswerVisible(!isAnswerVisible)}
            className="ml-4 px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 font-medium"
            style={{ 
              backgroundColor: isAnswerVisible ? theme.primaryLight : '#F3F4F6',
              color: isAnswerVisible ? theme.primary : '#374151'
            }}
          >
            {isAnswerVisible ? (
              <>
                <AiOutlineEyeInvisible size={18} />
                <span className="text-sm">Hide</span>
              </>
            ) : (
              <>
                <AiOutlineEye size={18} />
                <span className="text-sm">Show Answer</span>
              </>
            )}
          </button>
        </div>

        {/* Answer */}
        {isAnswerVisible && (
          <div className="mt-6 pt-4 border-t border-gray-100 animate-fadeIn">
            <div className="flex items-start gap-3">
              <HiOutlineLightBulb className="text-yellow-500 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700 leading-relaxed">
                {question.answer}
              </p>
            </div>
            
            {/* Code Example */}
            {question.codeExample && (
              <div className="mt-5">
                <button
                  onClick={() => setIsCodeVisible(!isCodeVisible)}
                  className="text-sm font-medium mb-3 flex items-center gap-2 transition-colors"
                  style={{ color: theme.primary }}
                >
                  <AiOutlineCode size={16} />
                  {isCodeVisible ? 'Hide Code Example' : 'Show Code Example'}
                </button>
                {isCodeVisible && (
                  <div className="relative mt-2 bg-gray-900 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setIsCodeVisible(false)}
                      className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
                    >
                      <AiOutlineClose size={16} />
                    </button>
                    <pre className="p-5 overflow-x-auto">
                      <code className="text-sm text-gray-100 font-mono">
                        {question.codeExample}
                      </code>
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}