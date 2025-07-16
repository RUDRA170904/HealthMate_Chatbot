from flask import Flask, request, jsonify
from voice_of_the_patient import record_audio, transcribe_with_groq
from voice_of_the_doctor import text_to_speech_with_gtts
import os
from dotenv import load_dotenv, find_dotenv

app = Flask(__name__)

# Load environment variables
load_dotenv(find_dotenv())
GROQ_API_KEY = os.environ.get("GROQ_API_KEY")
ELEVENLABS_API_KEY = os.environ.get("ELEVENLABS_API_KEY")

@app.route("/api/audio", methods=["POST"])
def audio():
    data = request.json
    user_message = data.get("message")
    
    # Simulate processing the audio message
    response_message = f"Processed audio message: {user_message}"
    
    return jsonify({"response": response_message})

if __name__ == "__main__":
    app.run(debug=True)
