'use client';

import { theme } from '@/app/theme';
import { 
  FiCode, 
  FiBook, 
  FiUsers, 
  FiTrendingUp, 
  FiShield, 
  FiZap 
} from 'react-icons/fi';

export default function Features() {
  const features = [
    {
      icon: <FiCode />,
      title: 'Curated Questions',
      description: 'Hand-picked interview questions from top tech companies with detailed explanations.',
      color: '#F54927'
    },
    {
      icon: <FiBook />,
      title: 'Detailed Answers',
      description: 'Comprehensive answers with code examples and best practices.',
      color: '#3B82F6'
    },
    {
      icon: <FiUsers />,
      title: 'Community Driven',
      description: 'Regularly updated content based on real interview experiences.',
      color: '#10B981'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Progress Tracking',
      description: 'Monitor your learning progress and identify weak areas.',
      color: '#8B5CF6'
    },
    {
      icon: <FiShield />,
      title: 'Expert Verified',
      description: 'All answers reviewed by industry experts and senior developers.',
      color: '#F59E0B'
    },
    {
      icon: <FiZap />,
      title: 'Fast Learning',
      description: 'Optimized learning path to master concepts quickly.',
      color: '#EC4899'
    },
  ];

  return (
    <div className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose{' '}
            <span style={{ color: theme.primary }}>InterviewPrep</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to succeed in your technical interviews
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent"
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
              >
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}