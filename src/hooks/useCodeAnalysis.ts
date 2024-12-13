import { useState, useCallback } from 'react';
import { analyzeCode } from '../utils/codeAnalysis';
import type { CodeAnalysis } from '../types';

export function useCodeAnalysis() {
  const [code, setCode] = useState('');
  const [analysis, setAnalysis] = useState<CodeAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const runAnalysis = useCallback(async () => {
    if (!code.trim()) {
      setError('Please enter some code to analyze');
      return;
    }

    try {
      setIsAnalyzing(true);
      setError(null);
      const result = await analyzeCode(code);
      setAnalysis(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to analyze code');
    } finally {
      setIsAnalyzing(false);
    }
  }, [code]);

  return {
    code,
    setCode,
    analysis,
    isAnalyzing,
    error,
    runAnalysis
  };
}