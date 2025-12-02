# GrammAIze Backend

AI-powered grammar correction and text summarization API built with FastAPI.

## Features

- **Grammar Correction**: Uses T5 transformer model via HappyTransformer for accurate grammar checking
- **Text Summarization**: Powered by Google Gemini 2.5 Flash API for intelligent text summarization
- **Multiple Tone Styles**: Professional, casual, academic, and creative summary styles
- **RESTful API**: Clean FastAPI endpoints with automatic OpenAPI documentation

## Tech Stack

- **FastAPI**: Modern, fast web framework for building APIs
- **HappyTransformer**: Easy-to-use transformer models for NLP tasks
- **Google Gemini API**: Advanced AI for text summarization
- **PyTorch**: Deep learning framework
- **Pydantic**: Data validation using Python type annotations

## Installation

### Prerequisites
- Python 3.8+
- pip package manager

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/GrammAIze.git
   cd GrammAIze/backend
   ```

2. **Create virtual environment**
   ```bash
   python3 -m venv myenv
   source myenv/bin/activate  # On Windows: myenv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Environment Setup**
   Create a `.env` file in the backend directory:
   ```env
   GOOGLE_API_KEY=your_gemini_api_key_here
   ```

   Get your Google Gemini API key from: https://makersuite.google.com/app/apikey

## Running the Server

### Development Mode
```bash
uvicorn server:app --reload --host 0.0.0.0 --port 8000
```

### Production Mode
```bash
uvicorn server:app --host 0.0.0.0 --port 8000
```

The API will be available at:
- **API Base**: http://localhost:8000
- **Interactive Docs**: http://localhost:8000/docs
- **Alternative Docs**: http://localhost:8000/redoc

## API Endpoints

### Grammar Correction

**POST** `/api/grammar/correct`

Correct grammar errors in text using T5 transformer model.

```json
{
  "text": "they is going to spent time together",
  "max_length": 512
}
```

**Response:**
```json
{
  "original_text": "they is going to spent time together",
  "corrected_text": "they are going to spend time together",
  "corrections_made": ["is → are", "spent → spend"],
  "mistakes_count": 2,
  "confidence": 0.95
}
```

### Text Summarization

**POST** `/api/summary/generate`

Generate tone-specific summaries using Google Gemini API.

```json
{
  "text": "Long text to be summarized...",
  "style": "professional",
  "max_length": 50
}
```

**Supported Styles:**
- `professional` - Business-appropriate tone
- `casual` - Friendly, conversational tone
- `academic` - Scholarly, formal tone
- `creative` - Engaging, captivating tone

**Response:**
```json
{
  "original_text": "Long text...",
  "summary": "Professional summary...",
  "original_word_count": 150,
  "summary_word_count": 45,
  "style": "professional"
}
```

### Model Information

- **GET** `/api/grammar/model-info` - Grammar model details
- **GET** `/api/summary/model-info` - Summary model details
- **GET** `/api/grammar/test` - Test grammar correction with sample

## Project Structure

```
backend/
├── server.py              # FastAPI main application
├── requirements.txt       # Python dependencies
├── .env                  # Environment variables (create this)
├── api/
│   ├── __init__.py       # API package initialization
│   ├── grammar.py        # Grammar correction endpoints
│   └── summary.py        # Text summarization endpoints
└── myenv/               # Virtual environment (created after setup)
```

## Model Details

### Grammar Correction
- **Model**: `vennify/t5-base-grammar-correction`
- **Framework**: HappyTransformer + T5
- **Features**: Beam search, confidence scoring, detailed corrections

### Text Summarization
- **Model**: `gemini-2.5-flash`
- **Provider**: Google AI
- **Features**: Multiple tone styles, length control, high-quality summaries

## Development

### Adding New Features
1. Create new endpoints in `api/` directory
2. Import and include routers in `server.py`
3. Update this README with new endpoint documentation

### Testing
```bash
# Test grammar endpoint
curl -X POST "http://localhost:8000/api/grammar/correct" \
     -H "Content-Type: application/json" \
     -d '{"text": "they is going to spent time together"}'

# Test summary endpoint
curl -X POST "http://localhost:8000/api/summary/generate" \
     -H "Content-Type: application/json" \
     -d '{"text": "Your long text here...", "style": "professional"}'
```

## Troubleshooting

### Common Issues

1. **NumPy Version Conflicts**
   ```bash
   pip install "numpy<2"
   ```

2. **Model Loading Errors**
   - Ensure you have sufficient RAM (4GB+ recommended)
   - Check internet connection for initial model download

3. **Gemini API Issues**
   - Verify your API key in `.env` file
   - Check API quota and billing status

### Performance Tips

- **First Run**: Grammar model download may take 5-10 minutes
- **Memory**: Recommended 8GB+ RAM for optimal performance
- **GPU**: Optional but improves inference speed

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is part of an academic minor project for educational purposes.

## Support

For issues or questions:
1. Check the [API documentation](http://localhost:8000/docs) when server is running
2. Review common troubleshooting steps above
3. Create an issue in the repository

---

**Academic Project 2025** | Built with ❤️ using FastAPI and AI