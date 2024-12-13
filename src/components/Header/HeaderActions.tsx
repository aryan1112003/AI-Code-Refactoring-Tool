import React from 'react';

interface HeaderActionsProps {
  onAnalyze: () => void;
  isAnalyzing: boolean;
  hasCode: boolean;
}

export function HeaderActions({ onAnalyze, isAnalyzing, hasCode }: HeaderActionsProps) {
  return (
    <div className="flex items-center space-x-4">
      <button
        className={`px-4 py-2 rounded-md transition ${
          hasCode && !isAnalyzing
            ? 'bg-blue-600 hover:bg-blue-700'
            : 'bg-gray-600 cursor-not-allowed'
        }`}
        onClick={onAnalyze}
        disabled={!hasCode || isAnalyzing}
      >
        {isAnalyzing ? 'Analyzing...' : 'Analyze Code'}
      </button>
    </div>
  );
}