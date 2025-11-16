import React from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut } from '@clerk/clerk-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              Write <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Perfectly</span>
              <br />
              Every Time
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your writing with AI-powered grammar correction and intelligent summarization. 
              Create professional content that captivates your audience.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <SignedOut>
                <Link to="/login">
                  <button className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105">
                    Start Writing Now
                  </button>
                </Link>
              </SignedOut>
              <SignedIn>
                <Link to="/grammaizer">
                  <button className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105">
                    Open GrammAIzer
                  </button>
                </Link>
              </SignedIn>
              
              <Link to="/about">
                <button className="w-full sm:w-auto border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all">
                  Learn More
                </button>
              </Link>
            </div>
            
            {/* Stats */}
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Core Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional writing tools designed to improve your content quality
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Grammar Correction */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Grammar Correction</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Fix grammatical errors, spelling mistakes, and punctuation issues. Our tool helps you write with confidence and clarity.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Sentence structure analysis</li>
                <li>• Spelling and typo detection</li>
                <li>• Punctuation optimization</li>
              </ul>
            </div>
            
            {/* Text Summarization */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Text Summarization</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Transform long documents into clear, concise summaries. Save time while keeping all the important information.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Key points extraction</li>
                <li>• Customizable length</li>
                <li>• Context preservation</li>
              </ul>
            </div>
            
            {/* Tone Adaptation */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Tone Adaptation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Adjust your writing style to match your audience. Whether formal or casual, we help you communicate effectively.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Professional tone</li>
                <li>• Casual conversation</li>
                <li>• Academic writing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Getting Started
            </h2>
            <p className="text-lg text-gray-600">
              Three easy steps to improve your writing
            </p>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                    1
                  </span>
                  <h3 className="text-2xl font-semibold text-gray-900">Input Your Text</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Copy and paste your text into the editor. Works with emails, essays, reports, or any written content you want to improve.
                </p>
                <ul className="text-gray-500 space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Supports documents up to 10,000 words</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>No file uploads needed - just paste and go</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300">
                  <div className="bg-white p-4 rounded border">
                    <div className="text-gray-400 text-sm mb-2">Your text here...</div>
                    <div className="h-20 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                    2
                  </span>
                  <h3 className="text-2xl font-semibold text-gray-900">Choose Your Options</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Select whether you want grammar correction, text summarization, or both. Pick your preferred writing tone.
                </p>
                <ul className="text-gray-500 space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Grammar check finds and fixes errors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Summarization condenses long text</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Choose formal, casual, or academic tone</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white p-6 rounded-lg shadow-md border">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" className="w-4 h-4" checked readOnly />
                      <span className="text-gray-700">Grammar Correction</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-gray-700">Text Summary</span>
                    </div>
                    <div className="mt-4">
                      <select className="w-full p-2 border border-gray-300 rounded text-gray-700">
                        <option>Professional Tone</option>
                        <option>Casual Tone</option>
                        <option>Academic Tone</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                    3
                  </span>
                  <h3 className="text-2xl font-semibold text-gray-900">Get Your Results</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Review the improved text with corrections highlighted. Copy the final result or download it for use in your projects.
                </p>
                <ul className="text-gray-500 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>See all changes clearly marked</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Copy improved text with one click</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Download as text file if needed</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white p-6 rounded-lg shadow-md border">
                  <div className="text-sm text-gray-500 mb-3">Improved Text:</div>
                  <div className="bg-green-50 p-4 rounded border-l-4 border-green-400">
                    <div className="text-gray-700 leading-relaxed">
                      Your polished, error-free content appears here with all improvements applied.
                    </div>
                  </div>
                  <div className="mt-4 flex space-x-3">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                      Copy Text
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-50">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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