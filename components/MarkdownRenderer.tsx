import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="prose prose-sm md:prose-base max-w-none text-gray-600 prose-headings:font-semibold prose-headings:text-gray-900 prose-a:text-primary-content prose-a:underline hover:prose-a:text-primary-hover prose-code:text-gray-800 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-50">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};