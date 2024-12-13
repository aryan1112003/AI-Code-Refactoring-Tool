import React from 'react';
import { Layout } from './Layout/Layout';
import { CodePanel } from './CodePanel/CodePanel';
import { AnalysisPanel } from './AnalysisPanel/AnalysisPanel';
import { useCodeAnalysis } from '../hooks/useCodeAnalysis';

export function CodeEditor() {
  const {
    code,
    setCode,
    analysis,
    isAnalyzing,
    error,
    runAnalysis
  } = useCodeAnalysis();

  return (
    <Layout
      onAnalyze={runAnalysis}
      isAnalyzing={isAnalyzing}
      hasCode={Boolean(code.trim())}
    >
      {error && (
        <div className="bg-red-900/50 text-red-200 px-4 py-2 text-sm">
          {error}
        </div>
      )}
      <div className="flex-1 flex">
        <CodePanel
          code={code}
          onChange={setCode}
          isAnalyzing={isAnalyzing}
        />
        <AnalysisPanel analysis={analysis} />
      </div>
    </Layout>
  );
}