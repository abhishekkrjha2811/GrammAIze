import React from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut } from '@clerk/clerk-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-20">
        {/* Dotted background pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
        
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
            Write <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Perfectly</span>
            <br />
            Every Time
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your writing with AI-powered grammar correction and intelligent summarization. 
            Create professional content that captivates your audience.
          </p>
            
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <SignedOut>
              <Link to="/login">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105">
                  Start Writing Now
                </button>
              </Link>
            </SignedOut>
            <SignedIn>
              <Link to="/grammaizer">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105">
                  Open GrammAIzer
                </button>
              </Link>
            </SignedIn>
            
            <Link to="/about">
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all">
                Learn More
              </button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">Advanced</div>
              <div className="text-gray-300">AI Technology</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">English</div>
              <div className="text-gray-300">Language Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-pink-400 mb-2">Instant</div>
              <div className="text-gray-300">Processing</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Main Features
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to improve your writing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Grammar Correction</h3>
              <p className="text-gray-600 mb-4">
                Find and fix grammar errors, spelling mistakes, and punctuation issues instantly.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Fix sentence structure</li>
                <li>• Correct spelling errors</li>
                <li>• Improve punctuation</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Text Summarization</h3>
              <p className="text-gray-600 mb-4">
                Transform long documents into clear, concise summaries while preserving key information.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Extract main points</li>
                <li>• Choose summary style</li>
                <li>• Maintain context</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-blue-500 text-2xl font-bold mb-2">1</div>
              <h3 className="font-medium mb-2">Enter Text</h3>
              <p className="text-gray-600 text-sm">Paste your text into the editor</p>
            </div>
            <div>
              <div className="text-blue-500 text-2xl font-bold mb-2">2</div>
              <h3 className="font-medium mb-2">Choose Tool</h3>
              <p className="text-gray-600 text-sm">Select grammar check or summary</p>
            </div>
            <div>
              <div className="text-blue-500 text-2xl font-bold mb-2">3</div>
              <h3 className="font-medium mb-2">Get Results</h3>
              <p className="text-gray-600 text-sm">Copy your improved text</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Writing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of writers who trust GrammAIze for perfect content every time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SignedOut>
              <Link to="/login">
                <button className="w-full sm:w-auto bg-white text-indigo-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl transform hover:scale-105">
                  Get Started Free
                </button>
              </Link>
            </SignedOut>
            <SignedIn>
              <Link to="/grammaizer">
                <button className="w-full sm:w-auto bg-white text-indigo-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl transform hover:scale-105">
                  Start Writing
                </button>
              </Link>
            </SignedIn>
            
            <Link to="/about">
              <button className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;