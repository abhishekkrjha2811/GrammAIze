import { UserButton, useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
      
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">GrammAIze</h1>
            {isSignedIn ? (
              <UserButton />
            ) : (
              <button 
                onClick={handleLoginClick}
                className="px-6 py-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
              >
                Login
              </button>
            )}
          </div>
        </header>
        
        <main className="max-w-7xl mx-auto px-6 py-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to GrammAIze</h2>
            <p className="text-gray-600 mb-6">
              Start using our grammar-aware summarizer tool to improve your writing with AI-powered insights.
            </p>
            
            {/* Placeholder for future features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="bg-linear-to-br from-blue-50 to-indigo-100 p-6 rounded-lg border border-indigo-200">
                <h3 className="text-lg font-semibold text-indigo-900 mb-2">Text Summarizer</h3>
                <p className="text-indigo-700 text-sm">Summarize long texts with AI-powered insights</p>
              </div>
              
              <div className="bg-linear-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Grammar Check</h3>
                <p className="text-purple-700 text-sm">Get grammar suggestions and corrections</p>
              </div>
              
              <div className="bg-linear-to-br from-green-50 to-emerald-100 p-6 rounded-lg border border-emerald-200">
                <h3 className="text-lg font-semibold text-emerald-900 mb-2">Writing Assistant</h3>
                <p className="text-emerald-700 text-sm">Improve your writing style and clarity</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}