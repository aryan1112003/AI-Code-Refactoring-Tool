import React from 'react';
import { Play } from 'lucide-react';

interface HeaderActionsProps {
  onAnalyze: () => void;
  isAnalyzing: boolean;
  hasCode: boolean;
}

export function HeaderActions({ onAnalyze, isAnalyzing, hasCode }: HeaderActionsProps) {
  return (
    <div className="flex items-center space-x-4">
      <button
        className={`flex items-center space-x-2 px-4 py-2 rounded-md transition ${
          hasCode && !isAnalyzing
            ? 'bg-blue-600 hover:bg-blue-700 text-white'
            : 'bg-gray-700 text-gray-400 cursor-not-allowed'
        }`}
        onClick={onAnalyze}
        disabled={!hasCode || isAnalyzing}
      >
        <Play className="w-4 h-4" />
        <span>{isAnalyzing ? 'Analyzing...' : 'Analyze Code'}</span>
      </button>
    </div>
  );
}