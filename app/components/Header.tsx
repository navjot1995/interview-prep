'use client';

import { theme } from '@/app/theme';
import { SiJavascript } from 'react-icons/si';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiBookOpen } from 'react-icons/fi';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function Header({ searchTerm, setSearchTerm }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg" style={{ backgroundColor: theme.primaryLight }}>
              <SiJavascript size={28} style={{ color: theme.primary }} />
            </div>
            <div>
              <h1 className="text-2xl font-bold" style={{ color: theme.primary }}>
                Interview Prep
              </h1>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <FiBookOpen size={12} />
                JavaScript Questions & Answers
              </p>
            </div>
          </div>
          
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              placeholder="Search questions or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2.5 pl-11 pr-4 text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 transition-all"
              style={{ 
                borderColor: searchTerm ? theme.primary : '#E5E7EB',
              }}
            />
            <AiOutlineSearch 
              className="absolute left-3.5 top-3 text-gray-400" 
              size={18}
              style={{ color: searchTerm ? theme.primary : '#9CA3AF' }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}