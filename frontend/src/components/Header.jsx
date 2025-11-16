import React from 'react';
import logo from '../assets/grammalze.png';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <img 
              src={logo} 
              alt="GrammAIze Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
            <div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                GrammAIze
              </h1>
              <div className="text-blue-100 text-xs sm:text-sm hidden sm:block">
                AI Writing Assistant
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation - Centered */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-blue-200 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-blue-200 transition-colors font-medium">
              About
            </Link>
            <SignedIn>
              <Link to="/grammaizer" className="text-white hover:text-blue-200 transition-colors font-medium">
                GrammAIzer
              </Link>
            </SignedIn>
          </nav>

          {/* Right Side - Auth & Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop Auth */}
            <div className="hidden sm:flex items-center space-x-3">
              <SignedOut>
                <Link to="/login">
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-md text-sm">
                    Login
                  </button>
                </Link>
              </SignedOut>
              <SignedIn>
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8 sm:w-10 sm:h-10"
                    }
                  }}
                />
              </SignedIn>
            </div>

            {/* Mobile Auth */}
            <div className="sm:hidden flex items-center">
              <SignedOut>
                <Link to="/login">
                  <button className="bg-white text-blue-600 px-3 py-1.5 rounded-md font-medium hover:bg-blue-50 transition-colors shadow-md text-sm">
                    Login
                  </button>
                </Link>
              </SignedOut>
              <SignedIn>
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-7 h-7"
                    }
                  }}
                />
              </SignedIn>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-blue-500/30 mt-4 pt-4">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-white hover:text-blue-200 transition-colors font-medium py-2 px-4 rounded-md hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-blue-200 transition-colors font-medium py-2 px-4 rounded-md hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <SignedIn>
                <Link 
                  to="/grammaizer" 
                  className="text-white hover:text-blue-200 transition-colors font-medium py-2 px-4 rounded-md hover:bg-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  GrammAIzer
                </Link>
              </SignedIn>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
