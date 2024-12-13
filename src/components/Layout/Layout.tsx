import React, { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  onAnalyze: () => void;
  isAnalyzing: boolean;
  hasCode: boolean;
}

export function Layout({ children, onAnalyze, isAnalyzing, hasCode }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Header
        onAnalyze={onAnalyze}
        isAnalyzing={isAnalyzing}
        hasCode={hasCode}
      />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}