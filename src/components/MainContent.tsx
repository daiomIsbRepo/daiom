import React from 'react';
import { Send } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const MainContent = () => {
  const { state, updateMainContent } = useAppContext();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSubmit = async () => {
    if (!state.mainContent.input.trim()) return;

    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('https://4hxh76qgti.execute-api.ap-south-1.amazonaws.com/dev/proxy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          uinput: state.mainContent.input,
          tool: 'Evaluator'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate ideas');
      }

      const data = await response.json();
      updateMainContent({ result: data });
    } catch (err) {
      setError('Failed to generate ideas. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="flex-1 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Content Ideas</h1>
        <div className="flex items-center gap-4">
          <select className="px-4 py-2 border rounded-lg">
            <option>English</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
        <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-6">
          <span className="text-white text-4xl font-bold">D</span>
        </div>
        <h2 className="text-2xl text-primary mb-2">Generate Ideas for LinkedIn Post</h2>
        
        <div className="w-full max-w-2xl mt-8">
          {error && (
            <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg">
              {error}
            </div>
          )}
          
          <div className="relative">
            <input
              type="text"
              placeholder="Give it a try, write whatever is in your mind..."
              className="w-full px-6 py-4 border rounded-full pr-16"
              value={state.mainContent.input}
              onChange={(e) => updateMainContent({ input: e.target.value })}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Send className={`w-6 h-6 ${isLoading ? 'text-gray-400' : 'text-primary'} cursor-pointer`} />
            </button>
          </div>

          {isLoading && (
            <div className="mt-8 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent"></div>
            </div>
          )}

          {state.mainContent.result && !isLoading && (
            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
              <pre className="whitespace-pre-wrap">{JSON.stringify(state.mainContent.result, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContent;