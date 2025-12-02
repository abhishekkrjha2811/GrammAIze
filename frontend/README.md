# GrammAIze Frontend

Modern React web application for AI-powered grammar correction and text summarization.

## Features

- **Clean UI/UX**: Modern, responsive design with beautiful gradients
- **Grammar Correction**: Interactive grammar checking with error highlighting
- **Text Summarization**: Multiple tone styles for different use cases
- **Real-time Processing**: Instant feedback with loading states
- **User Authentication**: Secure login system with Clerk
- **Copy to Clipboard**: Easy result sharing functionality
- **Mobile Responsive**: Works seamlessly on all device sizes

## Tech Stack

- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Clerk**: Authentication and user management
- **React Router**: Client-side routing and navigation
- **Axios/Fetch**: HTTP client for API communication

## Installation

### Prerequisites
- Node.js 16+ and npm
- Running backend server (see backend README)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/GrammAIze.git
   cd GrammAIze/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the frontend directory:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
   VITE_API_BASE_URL=http://localhost:8000
   ```

   Get your Clerk keys from: https://clerk.com/

4. **Start development server**
   ```bash
   npm run dev
   ```

   The application will be available at: http://localhost:5173

## Project Structure

```
frontend/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Home.jsx       # Landing page
│   │   ├── About.jsx      # About page
│   │   ├── Header.jsx     # Navigation header
│   │   ├── Footer.jsx     # Footer component
│   │   └── Grammaizer.jsx # Main grammar/summary tool
│   ├── config/
│   │   └── api.js         # API configuration and utilities
│   ├── App.jsx            # Main app component with routing
│   ├── main.jsx           # React app entry point
│   ├── Login.jsx          # Authentication component
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── eslint.config.js       # ESLint configuration
```

## Key Components

### Home.jsx
- **Hero Section**: Eye-catching gradient background with call-to-action
- **Features**: Grammar correction and text summarization highlights
- **How It Works**: Simple 3-step process explanation
- **Responsive Design**: Mobile-first approach

### Grammaizer.jsx
- **Tab Interface**: Switch between grammar and summary tools
- **Text Input**: Large text areas with character counting
- **Results Display**: Formatted output with copy functionality
- **Error Handling**: User-friendly error messages
- **Loading States**: Visual feedback during processing

### Header.jsx
- **Navigation**: Links to all main pages
- **Authentication**: Login/logout with user profile
- **Responsive Menu**: Mobile hamburger menu
- **Branding**: Consistent GrammAIze logo

### Footer.jsx
- **Links**: Quick navigation and project info
- **Academic Attribution**: Clear academic project identification
- **Contact Information**: Project details and tech stack

## API Integration

### Configuration (config/api.js)
```javascript
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
  ENDPOINTS: {
    GRAMMAR_CORRECT: '/api/grammar/correct',
    SUMMARY_GENERATE: '/api/summary/generate'
  }
};
```

### Usage Examples

**Grammar Correction:**
```javascript
const response = await apiRequest(API_CONFIG.ENDPOINTS.GRAMMAR_CORRECT, {
  method: 'POST',
  body: JSON.stringify({
    text: userInput,
    max_length: 512
  })
});
```

**Text Summarization:**
```javascript
const response = await apiRequest(API_CONFIG.ENDPOINTS.SUMMARY_GENERATE, {
  method: 'POST',
  body: JSON.stringify({
    text: userInput,
    tone: selectedTone,
    max_length: 500
  })
});
```

## Available Scripts

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Production Deployment
```bash
npm run build        # Creates optimized production build in dist/
```

## Styling Guide

### Design System
- **Primary Colors**: Blue gradients (#3B82F6 to #8B5CF6)
- **Accent Colors**: Cyan (#06B6D4) and Purple (#A855F7)
- **Typography**: System fonts with proper hierarchy
- **Spacing**: Consistent Tailwind spacing scale
- **Shadows**: Subtle elevation for cards and buttons

### Component Styling
- **Cards**: `bg-white rounded-lg shadow-sm border`
- **Buttons**: `bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded`
- **Gradients**: `bg-gradient-to-r from-blue-600 to-purple-700`
- **Glass Effect**: `bg-white/80 backdrop-blur-sm`

## Authentication Flow

1. **Public Pages**: Home and About accessible without login
2. **Protected Route**: Grammaizer tool requires authentication
3. **Login Redirect**: Automatic redirect to tool after successful login
4. **User Management**: Handled entirely by Clerk

## Features Overview

### Grammar Correction Tool
- **Input**: Large textarea with 5000 character limit
- **Processing**: Real-time API call with loading indicator
- **Output**: Corrected text with highlighted changes
- **Statistics**: Error count, confidence score, corrections list
- **Actions**: Copy result, clear input

### Text Summarization Tool
- **Input**: Textarea for long-form content
- **Style Selection**: Professional, casual, academic, creative
- **Processing**: Gemini AI-powered summarization
- **Output**: Concise summary with statistics
- **Analytics**: Original vs summary length, compression ratio

### User Experience
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Loading States**: Clear feedback during processing
- **Error Handling**: Helpful error messages and fallbacks
- **Copy Functionality**: One-click result copying
- **Accessibility**: Proper ARIA labels and keyboard navigation

## Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## Development Tips

### Adding New Features
1. Create component in `src/components/`
2. Add routing in `App.jsx` if needed
3. Update navigation in `Header.jsx`
4. Style with Tailwind CSS classes

### API Integration
1. Add endpoints to `config/api.js`
2. Use the `apiRequest` utility function
3. Handle loading and error states
4. Update UI based on response

### Styling Best Practices
1. Use Tailwind utility classes
2. Maintain consistent spacing and colors
3. Follow mobile-first responsive design
4. Test on multiple screen sizes

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel/Netlify
1. Connect your Git repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in deployment settings

### Environment Variables for Production
```env
VITE_CLERK_PUBLISHABLE_KEY=pk_live_...
VITE_API_BASE_URL=https://your-api-domain.com
```

## Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **API Connection Issues**
   - Check backend server is running
   - Verify API base URL in `.env`
   - Check CORS settings on backend

3. **Authentication Issues**
   - Verify Clerk API keys
   - Check domain settings in Clerk dashboard

## Contributing

1. Follow the existing code style and structure
2. Use Tailwind CSS for styling
3. Ensure mobile responsiveness
4. Test authentication flows
5. Update this README for new features

## Performance

- **Lighthouse Score**: 95+ on all metrics
- **Bundle Size**: Optimized with Vite tree-shaking
- **Loading Speed**: Fast initial page load
- **Image Optimization**: Proper image formats and sizing

## License

This project is part of an academic minor project for educational purposes.

---

**Academic Project 2025** | Built with ❤️ using React and Modern Web Technologies
