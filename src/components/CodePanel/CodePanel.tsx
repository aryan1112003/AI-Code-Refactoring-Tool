import React from 'react';

interface CodePanelProps {
  code: string;
  onChange: (code: string) => void;
  isAnalyzing: boolean;
}

export function CodePanel({ code, onChange, isAnalyzing }: CodePanelProps) {
  return (
    <div className="w-2/3 p-4">
      <div className="h-full bg-gray-800 rounded-lg p-4 relative">
        <textarea
          className="w-full h-full bg-transparent resize-none focus:outline-none font-mono text-sm text-white"
          placeholder="Paste your code here..."
          value={code}
          onChange={(e) => onChange(e.target.value)}
          disabled={isAnalyzing}
          spellCheck={false}
          style={{ minHeight: '300px' }}
        />
        {isAnalyzing && (
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        )}
      </div>
    </div>
  );
}