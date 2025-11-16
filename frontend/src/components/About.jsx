
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About GrammAIze
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A practical writing tool that helps you improve your grammar and create better summaries. 
            Built for students, professionals, and anyone who wants to write more effectively.
          </p>
        </div>

        {/* What We Do Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Do</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              GrammAIze helps you write better by checking your grammar and creating summaries of long text. 
              Whether you're writing an email, essay, or report, our tool catches common mistakes and helps 
              you communicate more clearly.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We focus on English writing and offer three main features: grammar checking, text summarization, 
              and tone adjustment. The tool is designed to be simple and straightforward – paste your text, 
              choose your options, and get improved results.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start mb-4">
                <svg className="w-8 h-8 text-blue-600 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Grammar Checking</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Finds and suggests corrections for common grammar mistakes, spelling errors, and punctuation issues in English text.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start mb-4">
                <svg className="w-8 h-8 text-purple-600 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Text Summarization</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Creates shorter versions of long documents while keeping the main points. Useful for reports, articles, and research papers.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start mb-4">
                <svg className="w-8 h-8 text-green-600 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Tone Options</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Adjust your writing style to be more professional for work, casual for everyday use, or academic for school projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start mb-4">
                <svg className="w-8 h-8 text-orange-600 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Processing</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Get results in seconds, not minutes. No waiting around – paste your text, click submit, and see your improved content right away.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Who Is This For */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Who Is This For?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Students</h3>
              <p className="text-gray-600">
                Check essays, research papers, and assignments before submitting them.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Professionals</h3>
              <p className="text-gray-600">
                Improve emails, reports, and business documents for clearer communication.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Writers</h3>
              <p className="text-gray-600">
                Polish articles, blog posts, and creative writing projects.
              </p>
            </div>
          </div>
        </div>

        {/* Simple Stats */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">English</div>
              <div className="text-gray-600">Language Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600 mb-2">10,000</div>
              <div className="text-gray-600">Word Limit</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600 mb-2">Free</div>
              <div className="text-gray-600">To Use</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;