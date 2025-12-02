import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import Login from './Login';
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Grammaizer from './components/Grammaizer.jsx';
import About from './components/About.jsx';

// Protected Route Component
function ProtectedRoute({ children }) {
  const { isSignedIn } = useUser();
  
  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

// Component to conditionally render Header
function AppContent() {
  const { isLoaded } = useUser();
  const location = useLocation();
  
  // Show loading state while Clerk is loading
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-200 border-t-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading GrammAIze...</p>
        </div>
      </div>
    );
  }
  
  // Don't show header and footer on login page
  const showHeaderFooter = location.pathname !== '/login';

  return (
    <>
      {showHeaderFooter && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route 
          path="/grammaizer" 
          element={
            <ProtectedRoute>
              <Grammaizer />
            </ProtectedRoute>
          } 
        />
      </Routes>
      {showHeaderFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}