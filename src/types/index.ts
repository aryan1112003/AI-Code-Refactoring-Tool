export interface CodeAnalysis {
  codeSmells: CodeSmell[];
  suggestions: Suggestion[];
  metrics: CodeMetrics;
}

export interface CodeSmell {
  type: string;
  description: string;
  lineNumber: number;
  severity: 'low' | 'medium' | 'high';
}

export interface Suggestion {
  description: string;
  originalCode: string;
  suggestedCode: string;
  lineStart: number;
  lineEnd: number;
}

export interface CodeMetrics {
  complexity: number;
  maintainability: number;
  duplicateCode: number;
  unusedCode: number;
}