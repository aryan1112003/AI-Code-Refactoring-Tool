import type { CodeAnalysis, CodeSmell, Suggestion, CodeMetrics } from '../types';

function analyzeComplexity(code: string): number {
  const complexityIndicators = [
    /for\s*\(/g,
    /while\s*\(/g,
    /if\s*\(/g,
    /switch\s*\(/g,
    /function/g,
    /\?\s*:/g, // Ternary operators
    /\&\&|\|\|/g, // Logical operators
    /catch\s*\(/g, // Try-catch blocks
  ];

  return complexityIndicators.reduce((total, pattern) => {
    const matches = code.match(pattern);
    return total + (matches ? matches.length : 0);
  }, 0);
}

function findCodeSmells(code: string): CodeSmell[] {
  const smells: CodeSmell[] = [];
  const lines = code.split('\n');

  // Check for long functions
  let functionStartLine = -1;
  let functionLines = 0;
  let braceCount = 0;

  lines.forEach((line, index) => {
    // Count braces to track function scope
    braceCount += (line.match(/{/g) || []).length;
    braceCount -= (line.match(/}/g) || []).length;

    if (line.includes('function') || line.match(/=>\s*{/)) {
      functionStartLine = index;
      functionLines = 0;
    }

    if (functionStartLine !== -1) {
      functionLines++;
      if (functionLines > 20) {
        smells.push({
          type: 'Long Function',
          description: 'Function is too long (> 20 lines). Consider breaking it down into smaller functions.',
          lineNumber: functionStartLine + 1,
          severity: 'medium'
        });
        functionStartLine = -1;
      }
    }

    // Reset function tracking when we exit the function scope
    if (braceCount === 0) {
      functionStartLine = -1;
    }

    // Check for long lines
    if (line.length > 80) {
      smells.push({
        type: 'Long Line',
        description: 'Line exceeds 80 characters. Consider breaking it into multiple lines for better readability.',
        lineNumber: index + 1,
        severity: 'low'
      });
    }

    // Check for nested callbacks
    if (line.includes('callback') || line.includes('=>')) {
      const indentation = line.search(/\S/);
      if (indentation > 12) { // More than 3 levels deep
        smells.push({
          type: 'Callback Hell',
          description: 'Deeply nested callback detected. Consider using async/await or Promise chaining.',
          lineNumber: index + 1,
          severity: 'high'
        });
      }
    }
  });

  return smells;
}

function generateSuggestions(code: string): Suggestion[] {
  const suggestions: Suggestion[] = [];
  const lines = code.split('\n');

  lines.forEach((line, index) => {
    // forEach to map conversion
    if (line.includes('.forEach(') && !line.includes('return')) {
      suggestions.push({
        description: 'Consider using map instead of forEach for transformation operations',
        originalCode: line.trim(),
        suggestedCode: line.replace('.forEach(', '.map('),
        lineStart: index + 1,
        lineEnd: index + 1
      });
    }

    // var to const/let conversion
    if (line.includes('var ')) {
      suggestions.push({
        description: 'Use const or let instead of var for better scoping',
        originalCode: line.trim(),
        suggestedCode: line.replace('var ', 'const '),
        lineStart: index + 1,
        lineEnd: index + 1
      });
    }

    // Promise callback to async/await
    if (line.includes('.then(') && line.includes('.catch(')) {
      suggestions.push({
        description: 'Consider using async/await instead of Promise callbacks',
        originalCode: line.trim(),
        suggestedCode: 'try {\n  const result = await promise;\n} catch (error) {\n  // Handle error\n}',
        lineStart: index + 1,
        lineEnd: index + 1
      });
    }
  });

  return suggestions;
}

function calculateMetrics(code: string): CodeMetrics {
  const complexity = analyzeComplexity(code);
  const duplicateLines = findDuplicateCode(code);
  
  return {
    complexity,
    maintainability: Math.max(0, 100 - (complexity * 2) - (duplicateLines * 1.5)),
    duplicateCode: duplicateLines,
    unusedCode: 0 // This would require more sophisticated analysis
  };
}

function findDuplicateCode(code: string): number {
  const lines = code.split('\n').map(line => line.trim());
  const duplicates = new Set<string>();
  
  // Look for duplicate lines of meaningful code
  lines.forEach((line, index) => {
    if (line.length > 10 && !line.startsWith('//') && !line.startsWith('import')) {
      const count = lines.filter(l => l === line).length;
      if (count > 1) {
        duplicates.add(line);
      }
    }
  });
  
  return duplicates.size;
}

export async function analyzeCode(code: string): Promise<CodeAnalysis> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  const codeSmells = findCodeSmells(code);
  const suggestions = generateSuggestions(code);
  const metrics = calculateMetrics(code);

  return {
    codeSmells,
    suggestions,
    metrics
  };
}