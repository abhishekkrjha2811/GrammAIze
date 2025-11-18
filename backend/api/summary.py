from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional
import os
import google.generativeai as genai
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Create router
router = APIRouter()

# Pydantic models
class SummaryRequest(BaseModel):
    text: str
    style: Optional[str] = "professional"  # professional, casual, academic, creative
    max_length: Optional[int] = 50

class SummaryResponse(BaseModel):
    original_text: str
    summary: str
    original_word_count: int
    summary_word_count: int
    style: str

# Configure Gemini
api_key = os.getenv('GOOGLE_API_KEY')
if api_key:
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel('gemini-2.5-flash')
else:
    model = None

def create_tone_prompt(text: str, style: str, max_length: int) -> str:
    """Create tone-specific prompts for different styles"""
    
    style_prompts = {
        "professional": f"Summarize this text in a professional, business-appropriate tone in exactly {max_length} words or less. Use formal language and focus on key points:",
        
        "casual": f"Summarize this text in a friendly, conversational tone in exactly {max_length} words or less. Make it sound natural and easy to understand:",
        
        "academic": f"Summarize this text in an academic, scholarly tone in exactly {max_length} words or less. Use formal academic language and emphasize key concepts:",
        
        "creative": f"Summarize this text in a creative, engaging tone in exactly {max_length} words or less. Make it interesting and captivating while keeping the main message:"
    }
    
    prompt = style_prompts.get(style, style_prompts["professional"])
    return f"{prompt}\n\nText: {text}\n\nSummary:"

def fallback_summary(text: str, max_length: int) -> str:
    """Simple fallback when Gemini fails"""
    words = text.split()
    if len(words) <= max_length:
        return text
    return ' '.join(words[:max_length]) + "..."

@router.post("/generate", response_model=SummaryResponse)
async def generate_summary(request: SummaryRequest):
    """Generate tone-specific summary using Gemini 2.5 Flash"""
    
    if not request.text.strip():
        raise HTTPException(status_code=400, detail="Text cannot be empty")
    
    # Set defaults
    style = request.style or "professional"
    max_length = request.max_length or 50
    original_word_count = len(request.text.split())
    
    try:
        if model and api_key:
            # Create tone-specific prompt
            prompt = create_tone_prompt(request.text, style, max_length)
            
            # Generate summary with Gemini 2.5 Flash
            response = model.generate_content(prompt)
            summary = response.text.strip()
            
            # Clean up the response
            if summary.startswith(("Summary:", "Here's", "The summary")):
                summary = summary.split(":", 1)[-1].strip()
                
        else:
            # Fallback if no API key or model
            summary = fallback_summary(request.text, max_length)
            
    except Exception as e:
        print(f"Gemini error: {e}")
        summary = fallback_summary(request.text, max_length)
    
    return SummaryResponse(
        original_text=request.text,
        summary=summary,
        original_word_count=original_word_count,
        summary_word_count=len(summary.split()),
        style=style
    )

@router.get("/model-info")
async def get_model_info():
    """Get model information"""
    return {
        "model": "gemini-2.5-flash",
        "status": "active" if model and api_key else "fallback",
        "api_configured": api_key is not None,
        "supported_styles": ["professional", "casual", "academic", "creative"]
    }
