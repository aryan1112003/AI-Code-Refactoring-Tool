import React from 'react';
import { Code, GitBranch } from 'lucide-react';
import { HeaderActions } from './HeaderActions';

interface HeaderProps {
  onAnalyze: () => void;
  isAnalyzing: boolean;
  hasCode: boolean;
}

export function Header({ onAnalyze, isAnalyzing, hasCode }: HeaderProps) {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 border-b border-gray-700">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Code className="w-6 h-6 text-blue-400" />
            <h1 className="text-xl font-bold">AI Code Refactor</h1>
          </div>
          <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-400">
            <GitBranch className="w-4 h-4" />
            <span>by Aryan Acharya</span>
          </div>
        </div>
        <HeaderActions
          onAnalyze={onAnalyze}
          isAnalyzing={isAnalyzing}
          hasCode={hasCode}
        />
      </div>
    </header>
  );
}