from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional, List
from happytransformer import HappyTextToText, TTSettings
import difflib
import torch
import os

# Create router
router = APIRouter()

# Pydantic models
class GrammarRequest(BaseModel):
    text: str
    max_length: Optional[int] = 512

class GrammarResponse(BaseModel):
    original_text: str
    corrected_text: str
    corrections_made: List[str]
    mistakes_count: int
    confidence: float

# Global grammar model
grammar_model = None
beam_settings = TTSettings(num_beams=5, min_length=1, max_length=512)

def load_grammar_model():
    """Load HappyTransformer T5 grammar model"""
    global grammar_model
    
    if grammar_model is None:
        try:
            print("Loading T5 grammar correction model...")
            grammar_model = HappyTextToText("T5", "vennify/t5-base-grammar-correction")
            print("Grammar model loaded successfully")
            return True
        except Exception as e:
            print(f"Error loading grammar model: {e}")
            return False
    return True

class GrammarChecker:
    def __init__(self):
        self.grammar_check = grammar_model
        
    def correct_grammar(self, text: str, max_length: int = 512):
        """Correct grammar using T5 model and return detailed results"""
        try:
            # Update beam settings with custom max_length
            custom_settings = TTSettings(num_beams=5, min_length=1, max_length=max_length)
            
            # Generate corrected text
            result = self.grammar_check.generate_text(text, args=custom_settings)
            corrected_text = result.text if result and result.text else text
            
            # Calculate differences
            original_words = text.split()
            corrected_words = corrected_text.split()
            
            # Find differences using difflib
            differences = list(difflib.ndiff(original_words, corrected_words))
            
            # Extract corrections (additions and changes)
            corrections = []
            i = 0
            while i < len(differences):
                if differences[i].startswith('- '):  # Removed/changed word
                    original_word = differences[i][2:]
                    if i + 1 < len(differences) and differences[i + 1].startswith('+ '):
                        # Word was changed
                        new_word = differences[i + 1][2:]
                        corrections.append(f"{original_word} → {new_word}")
                        i += 2
                    else:
                        # Word was removed
                        corrections.append(f"Removed: {original_word}")
                        i += 1
                elif differences[i].startswith('+ '):  # Added word
                    new_word = differences[i][2:]
                    corrections.append(f"Added: {new_word}")
                    i += 1
                else:
                    i += 1
            
            # Calculate confidence based on similarity
            similarity = difflib.SequenceMatcher(None, text, corrected_text).ratio()
            confidence = similarity * 0.9 + 0.1  # Ensure minimum confidence
            
            mistakes_count = len(corrections)
            
            return {
                "corrected_text": corrected_text,
                "corrections": corrections,
                "mistakes_count": mistakes_count,
                "confidence": round(confidence, 2)
            }
            
        except Exception as e:
            print(f"Grammar correction error: {e}")
            return {
                "corrected_text": text,
                "corrections": [],
                "mistakes_count": 0,
                "confidence": 0.5
            }

@router.post("/correct", response_model=GrammarResponse)
async def correct_grammar(request: GrammarRequest):
    """Correct grammar in the provided text using T5 model"""
    
    if not request.text.strip():
        raise HTTPException(status_code=400, detail="Text cannot be empty")
    
    # Load model if not already loaded
    if not load_grammar_model():
        raise HTTPException(status_code=500, detail="Grammar model failed to load")
    
    try:
        # Create grammar checker instance
        checker = GrammarChecker()
        
        # Get corrections
        result = checker.correct_grammar(request.text, request.max_length or 512)
        
        return GrammarResponse(
            original_text=request.text,
            corrected_text=result["corrected_text"],
            corrections_made=result["corrections"],
            mistakes_count=result["mistakes_count"],
            confidence=result["confidence"]
        )
        
    except Exception as e:
        print(f"Grammar correction API error: {e}")
        raise HTTPException(status_code=500, detail="Grammar correction failed")

@router.get("/model-info")
async def get_grammar_model_info():
    """Get information about the grammar model"""
    model_loaded = grammar_model is not None
    
    return {
        "model_name": "vennify/t5-base-grammar-correction",
        "model_type": "T5 Grammar Correction",
        "framework": "HappyTransformer",
        "status": "loaded" if model_loaded else "not_loaded",
        "beam_search": True,
        "num_beams": 5,
        "max_length": 512
    }

@router.get("/test")
async def test_grammar():
    """Test endpoint with sample text"""
    if not load_grammar_model():
        return {"error": "Model not loaded"}
    
    sample_text = "they is going to spent time together."
    checker = GrammarChecker()
    result = checker.correct_grammar(sample_text)
    
    return {
        "sample_input": sample_text,
        "corrected_output": result["corrected_text"],
        "corrections": result["corrections"],
        "mistakes_found": result["mistakes_count"]
    }
