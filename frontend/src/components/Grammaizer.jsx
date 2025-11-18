
import React, { useState } from 'react';
import { API_CONFIG, apiRequest } from '../config/api';

const Grammaizer = () => {
  const [activeTab, setActiveTab] = useState('grammar');
  const [grammarText, setGrammarText] = useState('');
  const [summaryText, setSummaryText] = useState('');
  const [toneStyle, setToneStyle] = useState('professional');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState('');
  const [errorCount, setErrorCount] = useState(0);

  const handleGrammarCheck = async () => {
    if (!grammarText.trim()) return;
    
    setIsLoading(true);
    setResult('');
    setErrorCount(0);
    
    try {
      const data = await apiRequest(API_CONFIG.ENDPOINTS.GRAMMAR_CORRECT, {
        method: 'POST',
        body: JSON.stringify({
          text: grammarText,
          max_length: 512
        }),
      });
      setErrorCount(data.mistakes_count);
      
      let resultText = `✨ Grammar Check Complete!\n\n`;
      resultText += `📊 Analysis Results:\n`;
      resultText += `• Mistakes found: ${data.mistakes_count}\n`;
      resultText += `• Confidence: ${(data.confidence * 100).toFixed(1)}%\n\n`;
      
      if (data.corrections_made.length > 0) {
        resultText += `🔧 Corrections Made:\n`;
        data.corrections_made.forEach((correction, index) => {
          resultText += `${index + 1}. ${correction}\n`;
        });
        resultText += `\n📝 Corrected Text:\n${data.corrected_text}`;
      } else {
        resultText += `✅ Great! No grammar errors found.\n\n📝 Original Text:\n${data.original_text}`;
      }
      
      setResult(resultText);
    } catch (error) {
      console.error('Grammar check error:', error);
      setResult(`❌ Error: ${error.message}. Please make sure the backend server is running on ${API_CONFIG.BASE_URL}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSummarization = async () => {
    if (!summaryText.trim()) return;
    
    setIsLoading(true);
    setResult('');
    
    try {
      const data = await apiRequest(API_CONFIG.ENDPOINTS.SUMMARY_GENERATE, {
        method: 'POST',
        body: JSON.stringify({
          text: summaryText,
          tone: toneStyle,
          max_length: 500
        }),
      });
      
      let resultText = `📝 ${toneStyle.charAt(0).toUpperCase() + toneStyle.slice(1)} Summary\n\n`;
      resultText += `${data.summary}\n\n`;
      resultText += `📊 Summary Stats:\n`;
      resultText += `• Original length: ${summaryText.length} characters\n`;
      resultText += `• Summary length: ${data.summary.length} characters\n`;
      resultText += `• Compression ratio: ${(((summaryText.length - data.summary.length) / summaryText.length) * 100).toFixed(1)}%\n`;
      resultText += `• Tone style: ${toneStyle}`;
      
      setResult(resultText);
    } catch (error) {
      console.error('Summarization error:', error);
      setResult(`❌ Error: ${error.message}. Please make sure the backend server is running on ${API_CONFIG.BASE_URL} and you have configured your Google Gemini API key.`);
    } finally {
      setIsLoading(false);
    }
  };

  const clearAll = () => {
    setGrammarText('');
    setSummaryText('');
    setResult('');
    setErrorCount(0);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(result);
      // You could add a toast notification here
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = result;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            GrammAIzer Studio
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your writing with AI-powered grammar correction and intelligent summarization. 
            Professional quality results in seconds.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-lg shadow-sm border">
            <button
              onClick={() => setActiveTab('grammar')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'grammar'
                  ? 'bg-gray-800 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Grammar Checker
            </button>
            <button
              onClick={() => setActiveTab('summary')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'summary'
                  ? 'bg-gray-800 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Text Summarizer
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Input Section */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow-md p-6">
            {activeTab === 'grammar' ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                                        <span className="text-gray-600 mr-3">✏️</span>
                    Grammar Correction
                  </h2>
                  <span className="text-sm text-gray-500">{grammarText.length}/5000 characters</span>
                </div>
                <textarea
                  value={grammarText}
                  onChange={(e) => setGrammarText(e.target.value)}
                                    className="w-full h-48 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 resize-none text-gray-700 leading-relaxed"
                  placeholder="Paste or type your text here for grammar correction. We'll identify and fix grammar errors, spelling mistakes, and improve sentence structure..."
                  maxLength={5000}
                />
                <div className="flex gap-3">
                  <button
                    onClick={handleGrammarCheck}
                    disabled={!grammarText.trim() || isLoading}
                    className="flex-1 bg-gray-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        Checking Grammar...
                      </>
                    ) : (
                      'Check Grammar'
                    )}
                  </button>
                  <button
                    onClick={clearAll}
                    className="px-6 py-3 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Clear
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                    <span className="text-gray-600 mr-3">📝</span>
                    Text Summarization
                  </h2>
                  <span className="text-sm text-gray-500">{summaryText.length}/5000 characters</span>
                </div>
                <textarea
                  value={summaryText}
                  onChange={(e) => setSummaryText(e.target.value)}
                  className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 resize-none text-gray-700 leading-relaxed"
                  placeholder="Paste or type your text here for summarization. We'll create a concise summary that captures the main points..."
                  maxLength={5000}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Summary Style
                    </label>
                    <select
                      value={toneStyle}
                      onChange={(e) => setToneStyle(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                    >
                      <option value="professional">Professional</option>
                      <option value="casual">Casual & Friendly</option>
                      <option value="academic">Academic</option>
                      <option value="creative">Creative</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={handleSummarization}
                    disabled={!summaryText.trim() || isLoading}
                                        className="flex-1 bg-gray-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        Generating Summary...
                      </>
                    ) : (
                      'Generate Summary'
                    )}
                  </button>
                  <button
                    onClick={clearAll}
                    className="px-6 py-3 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Clear
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Results Section */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6 h-fit">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">🎯</span>
              Results
            </h3>
            
            {result ? (
              <div className="space-y-4">
                {activeTab === 'grammar' && errorCount > 0 && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center text-green-800 text-sm font-medium">
                      <span className="mr-2">✅</span>
                      {errorCount} issue{errorCount > 1 ? 's' : ''} corrected
                    </div>
                  </div>
                )}
                
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-l-gray-500 max-h-96 overflow-y-auto">
                  <div className="whitespace-pre-wrap text-gray-700 text-sm leading-relaxed font-sans overflow-wrap-anywhere">
                    {result}
                  </div>
                </div>
                
                <button 
                  onClick={copyToClipboard}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                >
                  Copy to Clipboard
                </button>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 text-4xl mb-4">
                  {activeTab === 'grammar' ? '✏️' : '📝'}
                </div>
                <p className="text-gray-500 text-sm">
                  {activeTab === 'grammar' 
                    ? 'Enter text and click "Check Grammar" to see corrections'
                    : 'Enter text and click "Generate Summary" to see results'
                  }
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <span className="mr-2">💡</span>
            Pro Tips
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start space-x-3">
              <span className="text-gray-600 text-lg">📊</span>
              <div>
                <p className="font-medium text-gray-800">Optimal Length</p>
                <p className="text-sm text-gray-600">For best results, use 50-1000 words of text</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-gray-600 text-lg">🎨</span>
              <div>
                <p className="font-medium text-gray-800">Style Matters</p>
                <p className="text-sm text-gray-600">Choose the right tone for your audience</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-green-500 text-lg">⚡</span>
              <div>
                <p className="font-medium text-gray-800">Quick Process</p>
                <p className="text-sm text-gray-600">Results typically ready in under 3 seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grammaizer;