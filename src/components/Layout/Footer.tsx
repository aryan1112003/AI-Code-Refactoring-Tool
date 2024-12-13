import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 px-6 border-t border-gray-700">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-sm mb-4 sm:mb-0">
          <p>Created by <span className="font-semibold">Aryan Acharya</span></p>
          <p className="text-gray-400">AI-Powered Code Analysis Tool</p>
        </div>
        
        <div className="flex space-x-4">
          <a
            href="https://github.com/aryanacharya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/aryanacharya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:contact@aryanacharya.com"
            className="hover:text-white transition-colors"
            aria-label="Email Contact"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}