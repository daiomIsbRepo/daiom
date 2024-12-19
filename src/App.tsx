import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CopyEnhancer from './components/CopyEnhancer';
import CopyEvaluator from './components/CopyEvaluator';
import CopyWriter from './components/CopyWriter';
import Support from './components/Support';
import Login from './components/Login';
import Inspiration from './components/Inspiration';
import BestPractices from './components/BestPractices';
import { useAuth } from './context/AuthContext';

function App() {
  const [currentPage, setCurrentPage] = useState('copy-evaluator');
  const { isAuthenticated } = useAuth();

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'copy-enhancer':
        return <CopyEnhancer />;
      case 'copy-evaluator':
        return <CopyEvaluator onPageChange={handlePageChange} />;
      case 'copy-writer':
        return <CopyWriter />;
      case 'best-practices':
        return <BestPractices />;
      case 'inspirations':
        return <Inspiration />;
      case 'support':
        return <Support />;
      default:
        return <CopyEvaluator onPageChange={handlePageChange} />;
    }
  };

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <div className="flex flex-1">
        <Sidebar currentPage={currentPage} onPageChange={handlePageChange} />
        {renderContent()}
      </div>
    </div>
  );
}

export default App;