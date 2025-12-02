import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Brand Section */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-cyan-300">GrammAIze</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              AI-powered writing assistant for better communication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-2 text-purple-300">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="/" className="text-gray-300 hover:text-cyan-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-cyan-300 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/grammaizer" className="text-gray-300 hover:text-cyan-300 transition-colors">
                  Grammar Tool
                </a>
              </li>
            </ul>
          </div>

          {/* Project Info */}
          <div>
            <h4 className="font-semibold mb-2 text-purple-300">Project Info</h4>
            <div className="text-gray-300 text-sm space-y-1">
              <p>Minor Project 2025</p>
              <p>React + AI Technology</p>
              <p className="text-cyan-300">Free to Use ✨</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-4 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 GrammAIze. All rights reserved.</p>
            <p className="mt-1 sm:mt-0">Academic Project 🎓</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;