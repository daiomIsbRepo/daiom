import React from 'react';
import { CRMTheme } from './theme';

interface OutputPaneProps {
  content: string;
  error?: string;
  isLoading?: boolean;
  theme: CRMTheme;
}

const OutputPane: React.FC<OutputPaneProps> = ({
  content,
  error,
  isLoading,
  theme
}) => {
  const formatContent = (text: string) => {
    return text.split('\\n').map((line, index, array) => (
      <React.Fragment key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div 
      className="rounded-lg shadow-sm p-6 transition-all duration-300"
      style={{ backgroundColor: theme.background }}
    >
      <h2 className="text-lg font-semibold mb-6" style={{ color: theme.text }}>
        Output Pane
      </h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
          {error}
        </div>
      )}

      {isLoading ? (
        <div className="flex items-center justify-center h-48">
          <div 
            className="animate-spin rounded-full h-8 w-8 border-4 border-t-transparent"
            style={{ borderColor: `${theme.primary} transparent ${theme.primary} ${theme.primary}` }}
          />
        </div>
      ) : (
        <div 
          className="prose max-w-none whitespace-pre-wrap"
          style={{ color: theme.text }}
        >
          {formatContent(content || 'Enhanced copy will appear here...')}
        </div>
      )}
    </div>
  );
};

export default OutputPane;