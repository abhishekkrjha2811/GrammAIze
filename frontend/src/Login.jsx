import { SignedIn, SignedOut, SignIn, UserButton } from '@clerk/clerk-react';

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
        <div className="min-h-screen w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
          {/* Floating background elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          
          {/* Header */}
          <div className="relative z-10 pt-16 pb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight drop-shadow-lg">
              Grammar Aware Summariser
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
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
          {/* Header */}
          <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl font-black">GA</span>
                </div>
                <div>
                  <h1 className="text-2xl font-black text-gray-900">Grammar Aware</h1>
                  <p className="text-xs text-gray-500">Summariser</p>
                </div>
              </div>
              <UserButton />
            </div>
          </header>

          {/* Main Content */}
          <main className="max-w-7xl mx-auto px-6 py-12">
            {/* Welcome Section */}
            <div className="mb-12">
              <div className="bg-white rounded-3xl shadow-lg border border-gray-200/50 p-12 text-center">
                <div className="inline-block mb-6 bg-gradient-to-br from-indigo-100 to-purple-100 p-4 rounded-full">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a.75.75 0 00-1.788 0l-7 140a.75.75 0 001.497.092l1.745-8.757h11.268l1.745 8.757a.75.75 0 001.498-.092l-7-140zm3.894 8.791a.75.75 0 00-.674.419l-2.325 5.236-2.325-5.236a.75.75 0 00-1.348.674l3 6.75a.75.75 0 001.348 0l3-6.75a.75.75 0 00-.676-1.093z" />
                  </svg>
                </div>
                <h2 className="text-5xl font-black text-gray-900 mb-4">Welcome back!</h2>
                <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                  You're all set! Start summarizing your content with AI-powered grammar insights and enhance your writing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg text-lg">
                    ✨ Start Summarizing
                  </button>
                  <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:shadow-lg hover:bg-gray-50 transition-all duration-300 border-2 border-purple-200 text-lg">
                    📚 Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow-md border border-gray-200/50 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast</h3>
                <p className="text-gray-600">Summarize documents in seconds with advanced AI algorithms</p>
              </div>

              <div className="bg-white rounded-2xl shadow-md border border-gray-200/50 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Grammar Perfect</h3>
                <p className="text-gray-600">Get accurate grammar suggestions and writing improvements</p>
              </div>

              <div className="bg-white rounded-2xl shadow-md border border-gray-200/50 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-4">🔐</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Completely Secure</h3>
                <p className="text-gray-600">Your data is encrypted and protected with enterprise security</p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl shadow-xl p-12 text-white text-center">
              <h3 className="text-3xl font-black mb-10">Trusted by Users Worldwide</h3>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <p className="text-5xl font-black mb-2">50K+</p>
                  <p className="text-white/80 font-medium">Active Users</p>
                </div>
                <div>
                  <p className="text-5xl font-black mb-2">2M+</p>
                  <p className="text-white/80 font-medium">Documents Processed</p>
                </div>
                <div>
                  <p className="text-5xl font-black mb-2">99.9%</p>
                  <p className="text-white/80 font-medium">Uptime</p>
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="mt-12 border-t border-gray-200 py-8">
            <div className="max-w-7xl mx-auto px-6 text-center text-gray-600 text-sm">
              <p>© 2025 Grammar Aware Summariser. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </SignedIn>
    </div>
  );
}