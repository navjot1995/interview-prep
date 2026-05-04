'use client';

import Link from 'next/link';
import { theme } from '@/app/theme';
import { FiArrowRight, FiBookOpen, FiUsers, FiAward, FiDatabase } from 'react-icons/fi';
import { SiJavascript, SiReact, SiNodedotjs, SiPostgresql } from 'react-icons/si';

export default function Hero() {
  const stats = [
    { icon: <FiBookOpen />, value: '500+', label: 'Interview Questions' },
    { icon: <FiUsers />, value: '10K+', label: 'Active Users' },
    { icon: <FiAward />, value: '95%', label: 'Success Rate' },
  ];

  const techStack = [
    { name: 'JavaScript', icon: <SiJavascript size={32} />, color: '#F7DF1E', bg: '#FEF9C3' },
    { name: 'React.js', icon: <SiReact size={32} />, color: '#61DAFB', bg: '#E0F2FE' },
    { name: 'Node.js', icon: <SiNodedotjs size={32} />, color: '#339933', bg: '#DCFCE7' },
    { name: 'Database', icon: <FiDatabase size={32} />, color: '#336791', bg: '#DBEAFE' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6" style={{ backgroundColor: theme.primaryLight }}>
              <span className="text-sm font-semibold" style={{ color: theme.primary }}>🚀 Ace Your Next Interview</span>
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Master Technical Interviews with{' '}
              <span className="relative inline-block">
                <span className="relative z-10" style={{ color: theme.primary }}>
                  Confidence
                </span>
                <svg className="absolute bottom-2 left-0 w-full h-3 -z-0" style={{ color: theme.primaryLight }} viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 L100 5" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Comprehensive interview preparation platform with curated questions, detailed answers, and code examples for modern web technologies.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/javascript"
                className="px-8 py-3 rounded-lg text-white font-semibold transition-all hover:shadow-lg transform hover:scale-105"
                style={{ backgroundColor: theme.primary }}
              >
                Start Practicing Now
                <FiArrowRight className="inline ml-2" />
              </Link>
              <Link
                href="#features"
                className="px-8 py-3 rounded-lg text-gray-700 font-semibold border-2 border-gray-300 hover:border-gray-400 transition-all"
              >
                Explore Topics
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl text-gray-400 mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Tech Stack Icons */}
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {techStack.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div 
                    className="p-4 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{ backgroundColor: tech.bg }}
                  >
                    <div style={{ color: tech.color }}>{tech.icon}</div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}