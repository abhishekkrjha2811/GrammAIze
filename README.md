# 🔤 GrammAIze

> **AI-Powered Grammar Correction & Text Summarization Platform**

[![React](https://img.shields.io/badge/React-18.0-blue?logo=react)](https://reactjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.121.2-green?logo=fastapi)](https://fastapi.tiangolo.com/)
[![Python](https://img.shields.io/badge/Python-3.12-blue?logo=python)](https://python.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Academic-orange)](LICENSE)

A modern full-stack web application that leverages AI to provide intelligent grammar correction and text summarization services. Built as part of an academic minor project with a focus on natural language processing and modern web technologies.

## ✨ Features

### 🔧 Grammar Correction
- **Real-time Grammar Analysis**: Powered by HappyTransformer and T5 models
- **Error Highlighting**: Visual indicators for grammatical issues
- **Confidence Scoring**: Quality metrics for corrections
- **Copy to Clipboard**: Easy sharing of corrected text

### 📝 Text Summarization
- **Multiple Tone Styles**: Professional, casual, academic, and creative
- **AI-Powered**: Google Gemini API integration
- **Length Control**: Customizable summary length
- **Compression Analytics**: Original vs summary statistics

### 🔐 User Experience
- **Secure Authentication**: Clerk-powered user management
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, gradient-based interface
- **Real-time Feedback**: Loading states and error handling

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern component-based UI framework
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Clerk** - Authentication and user management
- **React Router** - Client-side routing

### Backend
- **FastAPI** - High-performance Python web framework
- **HappyTransformer** - NLP library for grammar correction
- **Google Gemini API** - Advanced text summarization
- **Uvicorn** - ASGI server for production deployment
- **Pydantic** - Data validation and serialization

### AI/ML
- **Transformers** - Hugging Face transformers library
- **PyTorch** - Deep learning framework
- **T5 Model** - Text-to-text transfer transformer
- **CUDA Support** - GPU acceleration for model inference

## 🚀 Quick Start

### Prerequisites
- **Node.js 16+** and npm
- **Python 3.12+** and pip
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abhishekkrjha2811/GrammAIze.git
   cd GrammAIze
   ```

2. **Backend Setup**
   ```bash
   cd backend
   python -m venv myenv
   source myenv/bin/activate  # On Windows: myenv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Configuration**
   
   **Backend** - Create `backend/.env`:
   ```env
   GOOGLE_API_KEY=your_gemini_api_key_here
   ```
   
   **Frontend** - Create `frontend/.env`:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key_here
   VITE_API_BASE_URL=http://localhost:8000
   ```

5. **Start Development Servers**
   
   **Backend**:
   ```bash
   cd backend
   source myenv/bin/activate
   uvicorn server:app --reload --host 0.0.0.0 --port 8000
   ```
   
   **Frontend**:
   ```bash
   cd frontend
   npm run dev
   ```

6. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:8000
   - API Documentation: http://localhost:8000/docs

## 📁 Project Structure

```
GrammAIze/
├── README.md                    # Main project documentation
├── frontend/                    # React web application
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── Home.jsx       # Landing page
│   │   │   ├── About.jsx      # About page
│   │   │   ├── Header.jsx     # Navigation
│   │   │   ├── Footer.jsx     # Footer component
│   │   │   └── Grammaizer.jsx # Main tool interface
│   │   ├── config/
│   │   │   └── api.js         # API configuration
│   │   ├── App.jsx            # Main app component
│   │   └── main.jsx           # Entry point
│   ├── public/                # Static assets
│   ├── package.json           # Dependencies
│   └── README.md              # Frontend documentation
└── backend/                    # FastAPI server
    ├── api/
    │   ├── grammar.py         # Grammar correction endpoint
    │   └── summary.py         # Text summarization endpoint
    ├── myenv/                 # Virtual environment
    ├── server.py              # FastAPI application
    ├── requirements.txt       # Python dependencies
    └── README.md              # Backend documentation
```

## 🔗 API Endpoints

### Grammar Correction
```http
POST /api/grammar/correct
Content-Type: application/json

{
  "text": "This is example text with some error.",
  "max_length": 512
}
```

**Response:**
```json
{
  "corrected_text": "This is example text with some errors.",
  "original_text": "This is example text with some error.",
  "corrections_made": 1,
  "confidence_score": 0.95
}
```

### Text Summarization
```http
POST /api/summary/generate
Content-Type: application/json

{
  "text": "Long form text to be summarized...",
  "tone": "professional",
  "max_length": 500
}
```

**Response:**
```json
{
  "summary": "Concise summary of the input text...",
  "original_length": 1250,
  "summary_length": 180,
  "compression_ratio": 0.144,
  "tone_used": "professional"
}
```

## 🎯 Key Components

### Frontend Components
- **Home.jsx**: Hero section with gradient backgrounds and feature highlights
- **Grammaizer.jsx**: Main tool interface with tabbed grammar/summary functionality
- **Header.jsx**: Responsive navigation with authentication
- **Footer.jsx**: Academic project attribution and links

### Backend Services
- **Grammar API**: HappyTransformer-powered grammar correction
- **Summary API**: Google Gemini API integration for text summarization
- **CORS Middleware**: Cross-origin request handling
- **Error Handling**: Comprehensive error responses

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradients (#3B82F6 to #8B5CF6)
- **Accent**: Cyan (#06B6D4) and Purple (#A855F7)
- **Backgrounds**: White with glass morphism effects
- **Text**: Dark grays for optimal readability

### Typography
- **Headings**: System fonts with proper hierarchy
- **Body Text**: Readable font sizes with consistent line heights
- **Code**: Monospace fonts for technical content

## 📱 Screenshots

*[Screenshots will be added here showing the application interface]*

### Landing Page
- Hero section with gradient background
- Feature cards highlighting main functionality
- Call-to-action buttons

### Grammar Tool
- Clean text input interface
- Real-time correction display
- Error highlighting and statistics

### Summarization Tool
- Tone selection interface
- Processing indicators
- Results with analytics

## 🚀 Deployment

### Production Build
```bash
# Frontend
cd frontend
npm run build

# Backend
cd backend
pip install -r requirements.txt
```

### Environment Variables
**Production Backend**:
```env
GOOGLE_API_KEY=your_production_api_key
PYTHONPATH=/path/to/your/app
```

**Production Frontend**:
```env
VITE_CLERK_PUBLISHABLE_KEY=pk_live_...
VITE_API_BASE_URL=https://your-api-domain.com
```

## 🔧 Development

### Adding New Features
1. Create components in appropriate directories
2. Update routing in `App.jsx`
3. Add API endpoints in backend
4. Update documentation

### Code Style
- **Frontend**: ESLint configuration with React best practices
- **Backend**: Black formatter with PEP 8 compliance
- **CSS**: Tailwind utility classes with consistent spacing

## 🤝 Contributing

This project is part of an academic minor project. Contributions are welcome following these guidelines:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-feature`
3. **Make changes** with proper documentation
4. **Test thoroughly** on both frontend and backend
5. **Submit a pull request** with detailed description

### Development Setup
- Follow existing code patterns and style
- Ensure mobile responsiveness
- Test API integrations thoroughly
- Update documentation for new features

## 📄 License

This project is developed as part of an **Academic Minor Project 2025** for educational purposes. 

### Academic Use
- Created for learning full-stack development
- Demonstrates modern web technologies
- Showcases AI/ML integration in web applications
- Serves as a portfolio project

## 👥 Authors

**Academic Project Team**
- Built with modern web development best practices
- Implemented as a learning exercise in full-stack development
- Focused on AI integration and user experience design

## 🙏 Acknowledgments

- **Hugging Face** for transformer models and libraries
- **Google** for Gemini AI API
- **Clerk** for authentication services
- **FastAPI** community for excellent documentation
- **React** ecosystem for modern frontend development

## 📞 Support

For questions about this academic project:
- Review the detailed README files in `frontend/` and `backend/` directories
- Check the API documentation at `/docs` endpoint
- Examine the codebase for implementation details

---

<div align="center">
  <strong>Academic Minor Project 2025</strong><br>
  Built with ❤️ using React, FastAPI, and Modern AI Technologies
</div>