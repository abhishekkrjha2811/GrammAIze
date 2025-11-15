import { SignedIn, SignedOut, SignIn } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <SignedOut>
        <div className="min-h-screen w-full bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500">
          {/* Header */}
          <div className="relative z-10 pt-16 pb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight drop-shadow-lg">
              Grammar Aware Summarizer
            </h1>
            <p className="text-white/90 text-lg font-light drop-shadow">Master your writing with AI-powered insights</p>
          </div>

          {/* Main login area */}
          <div className="relative z-10 flex justify-center px-4 pb-16">
            <div className="w-full max-w-md">
              <SignIn 
                routing="hash"
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