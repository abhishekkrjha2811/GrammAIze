
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            About GrammAIze
          </h1>
          <p className="text-xl text-blue-100">
            A simple writing tool to help you improve your grammar and create summaries.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h2>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/50">
            <p className="text-gray-700 mb-4">
              GrammAIze helps you write better by checking your grammar and creating summaries of long text. 
              Whether you're writing an email, essay, or report, our tool catches common mistakes and helps 
              you communicate more clearly.
            </p>
            <p className="text-gray-700">
              We focus on English writing and offer grammar checking and text summarization. 
              The tool is simple – paste your text, choose your options, and get improved results.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-sm p-5 rounded-lg shadow-sm border border-white/50">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Grammar Checking</h3>
              <p className="text-gray-600">
                Finds and fixes common grammar mistakes, spelling errors, and punctuation issues.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-5 rounded-lg shadow-sm border border-white/50">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Text Summarization</h3>
              <p className="text-gray-600">
                Creates shorter versions of long documents while keeping the main points.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Can Use This?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm p-5 rounded-lg shadow-sm border border-white/50 text-center">
              <h3 className="font-medium text-gray-900 mb-2">Students</h3>
              <p className="text-gray-600 text-sm">
                Check essays and assignments
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-5 rounded-lg shadow-sm border border-white/50 text-center">
              <h3 className="font-medium text-gray-900 mb-2">Professionals</h3>
              <p className="text-gray-600 text-sm">
                Improve emails and reports
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-5 rounded-lg shadow-sm border border-white/50 text-center">
              <h3 className="font-medium text-gray-900 mb-2">Writers</h3>
              <p className="text-gray-600 text-sm">
                Polish articles and blogs
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-center text-white">
          <h2 className="text-xl font-bold mb-4">Current Info</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <div className="text-xl font-bold text-cyan-300 mb-1">English</div>
              <div className="text-blue-100 text-sm">Language</div>
            </div>
            <div>
              <div className="text-xl font-bold text-cyan-300 mb-1">5000</div>
              <div className="text-blue-100 text-sm">Character Limit</div>
            </div>
            <div>
              <div className="text-xl font-bold text-cyan-300 mb-1">Free</div>
              <div className="text-blue-100 text-sm">To Use</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;