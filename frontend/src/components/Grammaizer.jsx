
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
  const [copySuccess, setCopySuccess] = useState(false);

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
      
      if (data.corrections_made.length > 0) {
        let resultText = `Corrected Text:\n${data.corrected_text}\n\n`;
        resultText += `Found ${data.mistakes_count} issue${data.mistakes_count > 1 ? 's' : ''}:\n`;
        data.corrections_made.forEach((correction, index) => {
          resultText += `${index + 1}. ${correction}\n`;
        });
        resultText += `\nConfidence: ${(data.confidence * 100).toFixed(1)}%`;
        setResult(resultText);
      } else {
        setResult(`No grammar errors found! Your text looks good.\n\nOriginal Text:\n${data.original_text}`);
      }
      
    } catch (error) {
      console.error('Grammar check error:', error);
      setResult(`Error: ${error.message}\nMake sure the backend server is running on ${API_CONFIG.BASE_URL}`);
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
      
      let resultText = `${data.summary}\n\n`;
      resultText += `Original: ${summaryText.length} characters\n`;
      resultText += `Summary: ${data.summary.length} characters\n`;
      resultText += `Reduced by: ${(((summaryText.length - data.summary.length) / summaryText.length) * 100).toFixed(1)}%`;
      
      setResult(resultText);
    } catch (error) {
      console.error('Summarization error:', error);
      setResult(`Error: ${error.message}\nMake sure the backend server is running and your Gemini API key is configured.`);
    } finally {
      setIsLoading(false);
    }
  };

  const clearAll = () => {
    setGrammarText('');
    setSummaryText('');
    setResult('');
    setErrorCount(0);
    setCopySuccess(false);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(result);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = result;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            GrammAIze
          </h1>
          <p className="text-gray-600">
            Grammar checker & text summarizer
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg border p-1">
            <button
              onClick={() => setActiveTab('grammar')}
              className={`px-4 py-2 rounded-md text-sm ${
                activeTab === 'grammar'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Grammar
            </button>
            <button
              onClick={() => setActiveTab('summary')}
              className={`px-4 py-2 rounded-md text-sm ${
                activeTab === 'summary'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Summary
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border p-5">
            {activeTab === 'grammar' ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-800">
                    Check Grammar
                  </h2>
                  <span className="text-xs text-gray-500">{grammarText.length}/5000</span>
                </div>
                <textarea
                  value={grammarText}
                  onChange={(e) => setGrammarText(e.target.value)}
                  className="w-full h-48 p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 resize-none"
                  placeholder="Enter your text here..."
                  maxLength={5000}
                />
                <div className="flex gap-3">
                  <button
                    onClick={handleGrammarCheck}
                    disabled={!grammarText.trim() || isLoading}
                    className="flex-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Checking...' : 'Check'}
                  </button>
                  <button
                    onClick={clearAll}
                    className="px-4 py-2 border text-gray-600 rounded hover:bg-gray-50"
                  >
                    Clear
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-800">
                    Summarize Text
                  </h2>
                  <span className="text-xs text-gray-500">{summaryText.length}/5000</span>
                </div>
                <textarea
                  value={summaryText}
                  onChange={(e) => setSummaryText(e.target.value)}
                  className="w-full h-40 p-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 resize-none"
                  placeholder="Enter text to summarize..."
                  maxLength={5000}
                />
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Style:
                  </label>
                  <select
                    value={toneStyle}
                    onChange={(e) => setToneStyle(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
                  >
                    <option value="professional">Professional</option>
                    <option value="casual">Casual</option>
                    <option value="academic">Academic</option>
                    <option value="creative">Creative</option>
                  </select>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={handleSummarization}
                    disabled={!summaryText.trim() || isLoading}
                    className="flex-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Summarizing...' : 'Summarize'}
                  </button>
                  <button
                    onClick={clearAll}
                    className="px-4 py-2 border text-gray-600 rounded hover:bg-gray-50"
                  >
                    Clear
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg border p-5">
            <h3 className="text-lg font-medium text-gray-800 mb-3">
              Results
            </h3>
            
            {result ? (
              <div className="space-y-3">
                {activeTab === 'grammar' && errorCount > 0 && (
                  <div className="bg-green-50 border border-green-200 rounded p-2">
                    <div className="text-green-700 text-sm">
                      Fixed {errorCount} error{errorCount > 1 ? 's' : ''}
                    </div>
                  </div>
                )}
                
                <div className="bg-gray-50 rounded p-3 max-h-64 overflow-y-auto">
                  <div className="whitespace-pre-wrap text-gray-700 text-sm">
                    {result}
                  </div>
                </div>
                
                <button 
                  onClick={copyToClipboard}
                  className={`w-full py-2 px-3 rounded text-sm ${
                    copySuccess 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {copySuccess ? 'Copied!' : 'Copy'}
                </button>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-sm">
                  {activeTab === 'grammar' 
                    ? 'Results will appear here'
                    : 'Summary will appear here'
                  }
                </p>
              </div>
            )}
          </div>
        </div>


      </div>
    </div>
  );
};

export default Grammaizer;