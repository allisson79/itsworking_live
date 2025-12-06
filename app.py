from flask import Flask, request, jsonify, send_from_directory
from openai import OpenAI
import os

app = Flask(__name__, static_folder='.', static_url_path='')

# Initialize OpenAI client with Replit AI Integrations
client = OpenAI(
    api_key=os.environ.get("AI_INTEGRATIONS_OPENAI_API_KEY"),
    base_url=os.environ.get("AI_INTEGRATIONS_OPENAI_BASE_URL"),
)

@app.route('/')
def serve_index():
    """Serve the main website"""
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    """Serve static files"""
    if path and '.' in path:
        return send_from_directory('.', path)
    return send_from_directory('.', 'index.html')

@app.route('/api/chat', methods=['POST'])
def chat():
    """Handle chat requests with AI assistant"""
    try:
        data = request.get_json()
        
        if not data or 'message' not in data:
            return jsonify({'error': 'Message is required'}), 400
        
        user_message = data['message']
        
        # Get conversation history if provided
        history = data.get('history', [])
        
        # Build messages array
        messages = history + [{'role': 'user', 'content': user_message}]
        
        # Call OpenAI API
        response = client.chat.completions.create(
            model='gpt-4o-mini',
            messages=messages,
            temperature=0.7,
            max_tokens=1000,
        )
        
        assistant_message = response.choices[0].message.content
        
        return jsonify({
            'success': True,
            'message': assistant_message,
            'model': response.model,
        })
    
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@app.route('/api/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({'status': 'ok'})

if __name__ == '__main__':
    # Bind to 0.0.0.0:5000 as required by Replit
    app.run(host='0.0.0.0', port=5000, debug=False)
