import logo from '../assets/grammalze.png';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-4 hover:opacity-90 transition-opacity">
            <img 
              src={logo} 
              alt="GrammAIze Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white">
                GrammAIze
              </h1>
              <div className="text-blue-100 text-xs sm:text-sm">
                AI Writing Assistant
              </div>
            </div>
          </Link>
          
          {/* Centered Navigation */}
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

          {/* Right Side - Auth */}
          <div className="flex items-center space-x-4">
            <SignedOut>
              <Link to="/login">
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-md">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
