class ChatAssistant {
  constructor() {
    this.conversationHistory = [];
    this.container = null;
    this.init();
  }

  init() {
    this.createChatWidget();
    this.attachEventListeners();
  }

  createChatWidget() {
    const widget = document.createElement('div');
    widget.id = 'chat-widget';
    widget.innerHTML = `
      <div class="chat-container">
        <div class="chat-header">
          <h3>Its Working Assistant</h3>
          <button class="chat-close" aria-label="Close chat">&times;</button>
        </div>
        <div class="chat-messages" id="chat-messages"></div>
        <div class="chat-input-area">
          <input 
            type="text" 
            id="chat-input" 
            placeholder="Spørsmål om IT-tjenester..." 
            autocomplete="off"
          />
          <button id="chat-send" aria-label="Send message">
            <span>Send</span>
          </button>
        </div>
      </div>
      <button class="chat-toggle" id="chat-toggle" aria-label="Open chat">
        💬 Spørsmål?
      </button>
    `;
    document.body.appendChild(widget);
    this.container = document.getElementById('chat-messages');
  }

  attachEventListeners() {
    const sendBtn = document.getElementById('chat-send');
    const input = document.getElementById('chat-input');
    const closeBtn = document.querySelector('.chat-close');
    const toggleBtn = document.getElementById('chat-toggle');
    const chatWidget = document.querySelector('.chat-container');

    sendBtn.addEventListener('click', () => this.sendMessage());
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });
    
    closeBtn.addEventListener('click', () => {
      chatWidget.classList.remove('open');
      toggleBtn.style.display = 'block';
    });

    toggleBtn.addEventListener('click', () => {
      chatWidget.classList.add('open');
      toggleBtn.style.display = 'none';
      input.focus();
    });
  }

  async sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();

    if (!message) return;

    this.addMessageToUI('Du', message, 'user');
    input.value = '';
    this.conversationHistory.push({ role: 'user', content: message });

    try {
      document.getElementById('chat-send').disabled = true;
      
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: message,
          history: this.conversationHistory,
        }),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();

      if (data.success) {
        this.addMessageToUI('Its Working Assistant', data.message, 'assistant');
        this.conversationHistory.push({ role: 'assistant', content: data.message });
      } else {
        this.addMessageToUI('Assistant', 'Beklager, en feil oppstod. Prøv igjen.', 'error');
      }
    } catch (error) {
      console.error('Chat error:', error);
      this.addMessageToUI('Assistant', 'Kunne ikke koble til assistenten. Prøv igjen senere.', 'error');
    } finally {
      document.getElementById('chat-send').disabled = false;
    }
  }

  addMessageToUI(sender, message, role) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message chat-message-${role}`;
    messageDiv.innerHTML = `
      <div class="message-sender">${sender}</div>
      <div class="message-text">${this.escapeHtml(message)}</div>
    `;
    this.container.appendChild(messageDiv);
    this.container.scrollTop = this.container.scrollHeight;
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Initialize chat when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ChatAssistant();
});
