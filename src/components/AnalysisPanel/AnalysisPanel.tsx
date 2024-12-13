import React from 'react';
import { MetricsCard } from './MetricsCard';
import { SuggestionsCard } from './SuggestionsCard';
import type { CodeAnalysis } from '../../types';

interface AnalysisPanelProps {
  analysis: CodeAnalysis | null;
}

export function AnalysisPanel({ analysis }: AnalysisPanelProps) {
  if (!analysis) {
    return (
      <div className="w-1/3 p-4 border-l border-gray-700">
        <div className="h-full flex items-center justify-center text-gray-500">
          Enter some code and click "Analyze Code" to get started
        </div>
      </div>
    );
  }

  return (
    <div className="w-1/3 p-4 border-l border-gray-700 overflow-y-auto">
      <div className="space-y-4">
        <MetricsCard metrics={analysis.metrics} />
        <SuggestionsCard
          codeSmells={analysis.codeSmells}
          suggestions={analysis.suggestions}
        />
      </div>
    </div>
  );
}