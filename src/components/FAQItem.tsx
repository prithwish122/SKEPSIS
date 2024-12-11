"use client"
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
}

export function FAQItem({ question, answer, isOpen = false }: FAQItemProps) {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm transition-all duration-800 hover:shadow-md">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left"
      >
        <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
        {isExpanded ? (
          <Minus className="w-5 h-5 text-gray-600 flex-shrink-0" />
        ) : (
          <Plus className="w-5 h-5 text-gray-600 flex-shrink-0" />
        )}
      </button>
      
      <div
        className={`mt-2 text-gray-600 transition-all duration-200 overflow-hidden ${
          isExpanded ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pt-2">{answer}</p>
      </div>
    </div>
  );
}