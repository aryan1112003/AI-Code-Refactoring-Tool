import React from 'react';
import { Code } from 'lucide-react';
import { HeaderActions } from './HeaderActions';

interface HeaderProps {
  onAnalyze: () => void;
  isAnalyzing: boolean;
  hasCode: boolean;
}

export function Header({ onAnalyze, isAnalyzing, hasCode }: HeaderProps) {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-700">
      <div className="flex items-center space-x-2">
        <Code className="w-6 h-6" />
        <h1 className="text-xl font-bold">AI Code Refactor</h1>
      </div>
      <HeaderActions
        onAnalyze={onAnalyze}
        isAnalyzing={isAnalyzing}
        hasCode={hasCode}
      />
    </header>
  );
}