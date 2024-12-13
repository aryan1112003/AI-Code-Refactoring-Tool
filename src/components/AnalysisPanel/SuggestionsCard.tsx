import React from 'react';
import type { CodeSmell, Suggestion } from '../../types';

interface SuggestionsCardProps {
  codeSmells: CodeSmell[];
  suggestions: Suggestion[];
}

export function SuggestionsCard({ codeSmells, suggestions }: SuggestionsCardProps) {
  if (!codeSmells?.length && !suggestions?.length) {
    return null;
  }

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Suggestions</h2>
      <div className="space-y-3">
        {codeSmells.map((smell, index) => (
          <div key={`smell-${index}`} className="p-3 bg-gray-700 rounded">
            <div className="flex items-center justify-between">
              <p className="text-sm text-yellow-400">{smell.type}</p>
              <span className={`text-xs px-2 py-1 rounded ${
                smell.severity === 'high' ? 'bg-red-900 text-red-200' :
                smell.severity === 'medium' ? 'bg-yellow-900 text-yellow-200' :
                'bg-blue-900 text-blue-200'
              }`}>
                {smell.severity}
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Line {smell.lineNumber}: {smell.description}
            </p>
          </div>
        ))}
        {suggestions.map((suggestion, index) => (
          <div key={`suggestion-${index}`} className="p-3 bg-gray-700 rounded">
            <p className="text-sm text-blue-400">{suggestion.description}</p>
            <div className="mt-2 space-y-1">
              <p className="text-xs text-gray-400">Original (Line {suggestion.lineStart}):</p>
              <pre className="text-xs bg-gray-800 p-2 rounded">{suggestion.originalCode}</pre>
              <p className="text-xs text-gray-400">Suggested:</p>
              <pre className="text-xs bg-gray-800 p-2 rounded">{suggestion.suggestedCode}</pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}