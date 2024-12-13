import React from 'react';
import type { CodeMetrics } from '../../types';

interface MetricsCardProps {
  metrics: CodeMetrics | null;
}

export function MetricsCard({ metrics }: MetricsCardProps) {
  if (!metrics) {
    return null;
  }

  const getComplexityColor = (value: number) => {
    if (value < 5) return 'text-green-400';
    if (value < 10) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getMaintainabilityColor = (value: number) => {
    if (value > 80) return 'text-green-400';
    if (value > 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Code Metrics</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Complexity Score:</span>
          <span className={getComplexityColor(metrics.complexity)}>
            {metrics.complexity} {metrics.complexity < 5 ? '(Good)' : metrics.complexity < 10 ? '(Medium)' : '(High)'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Maintainability:</span>
          <span className={getMaintainabilityColor(metrics.maintainability)}>
            {metrics.maintainability.toFixed(0)}%
          </span>
        </div>
      </div>
    </div>
  );
}