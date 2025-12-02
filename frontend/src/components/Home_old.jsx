import React from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut } from '@clerk/clerk-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="bg-blue-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">
            GrammAIze
          </h1>
          
          <p className="text-lg mb-8">
            Fix grammar and summarize text with AI
          </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <SignedOut>
                <Link to="/login">
                  <button className="bg-white text-blue-500 px-6 py-3 rounded font-medium hover:bg-gray-100">
                    Get Started
                  </button>
                </Link>
              </SignedOut>
              <SignedIn>
                <Link to="/grammaizer">
                  <button className="bg-white text-blue-500 px-6 py-3 rounded font-medium hover:bg-gray-100">
                    Open Tool
                  </button>
                </Link>
              </SignedIn>
              
              <Link to="/about">
                <button className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-blue-500">
                  Learn More
                </button>
              </Link>
            </div>
            

          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Features
            </h2>
            <p className="text-gray-600">
              Tools to help you write better
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded border">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Grammar Check</h3>
              <p className="text-gray-600 mb-3">
                Find and fix grammar errors, spelling mistakes, and punctuation issues.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Fix sentence structure</li>
                <li>• Correct spelling</li>
                <li>• Improve punctuation</li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded border">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Text Summary</h3>
              <p className="text-gray-600 mb-3">
                Turn long text into short summaries while keeping the main points.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Extract key points</li>
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

      <section className="py-16 bg-blue-500 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">
            Ready to improve your writing?
          </h2>
          <p className="text-lg mb-6">
            Try GrammAIze for free
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SignedOut>
              <Link to="/login">
                <button className="bg-white text-blue-500 px-6 py-3 rounded font-medium hover:bg-gray-100">
                  Get Started
                </button>
              </Link>
            </SignedOut>
            <SignedIn>
              <Link to="/grammaizer">
                <button className="bg-white text-blue-500 px-6 py-3 rounded font-medium hover:bg-gray-100">
                  Start Writing
                </button>
              </Link>
            </SignedIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;