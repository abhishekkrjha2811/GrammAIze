import { SignedIn, SignedOut, SignIn, SignUp } from '@clerk/clerk-react';
import { Navigate, Link } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(true); // Start with Sign Up as default

  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <SignedOut>
        <div className="min-h-screen w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
          {/* Back Button */}
          <div className="absolute top-4 left-4 z-20">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-white/20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>

          {/* Header */}
          <div className="relative z-10 pt-16 pb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight drop-shadow-lg">
              Grammar Aware Summarizer
            </h1>
            <p className="text-white/90 text-lg font-light drop-shadow">Master your writing with AI-powered insights</p>
          </div>

          {/* Toggle buttons */}
          <div className="relative z-10 flex justify-center px-4 mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-1 flex">
              <button
                onClick={() => setIsSignUp(true)}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  isSignUp 
                    ? 'bg-white text-indigo-600 shadow-md' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                Sign Up
              </button>
              <button
                onClick={() => setIsSignUp(false)}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  !isSignUp 
                    ? 'bg-white text-indigo-600 shadow-md' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                Sign In
              </button>
            </div>
          </div>

          {/* Main auth area */}
          <div className="relative z-10 flex justify-center px-4 pb-16">
            <div className="w-full max-w-md">
              {isSignUp ? (
                <SignUp 
                  routing="hash"
                  signInUrl="/login"
                  appearance={{
                    elements: {
                      rootBox: "w-full",
                      card: "w-full shadow-2xl border-0 bg-white/95 backdrop-blur-sm",
                      header: "pb-4",
                      headerTitle: "text-2xl font-bold text-gray-900",
                      headerSubtitle: "text-gray-600",
                      socialButtonsBlockButton: "border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50",
                      formButtonPrimary: "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700",
                      footerActionLink: "text-indigo-600 hover:text-indigo-700",
                    }
                  }}
                />
              ) : (
                <SignIn 
                  routing="hash"
                  signUpUrl="/login"
                  appearance={{
                    elements: {
                      rootBox: "w-full",
                      card: "w-full shadow-2xl border-0 bg-white/95 backdrop-blur-sm",
                      header: "pb-4",
                      headerTitle: "text-2xl font-bold text-gray-900",
                      headerSubtitle: "text-gray-600",
                      socialButtonsBlockButton: "border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50",
                      formButtonPrimary: "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700",
                      footerActionLink: "text-indigo-600 hover:text-indigo-700",
                    }
                  }}
                />
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10 pb-8 text-center">
            <p className="text-white/70 text-sm">🔒 Secure authentication powered by Clerk</p>
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <Navigate to="/" replace />
      </SignedIn>
    </div>
  );
}