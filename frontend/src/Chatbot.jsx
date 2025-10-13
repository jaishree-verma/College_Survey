import './Chatbot.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Chatbot() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Chat box closed by default

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/chatbot', {
        message: input,
      });
      const botMessage = { sender: 'bot', text: res.data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Oops! Something went wrong.' },
      ]);
    } finally {
      setInput('');
      setLoading(false);
    }
  };

  return (
    <div className={`chatbot-wrapper ${isLandingPage ? 'landing-style' : ''}`}>
      <button className="chat-avatar" onClick={() => setIsOpen(!isOpen)}>
        <div className="avatar-with-bubble">
          <img
            src="/avatar-hi.png"
            alt="Hi!"
            className={`avatar-img ${isLandingPage ? 'landing-avatar' : ''}`}
          />
          {isLandingPage && !isOpen && (
            <div className="chat-bubble">Hi! How may I help you?</div>
          )}
        </div>
      </button>

      {isOpen && (
        <div className={`chat-container ${isLandingPage ? 'landing-chat' : ''}`}>
          <div className="chat-window">
            {/* ✅ Intro message only when no messages yet */}
            {messages.length === 0 && (
              <div className="chat-intro">
                <p>👋 Hi! How can I help you?</p>
                <p> My name is <strong>CollegeAIBruh</strong>.</p>
                <p> <i>or you can call me -- Ai Bruh </i></p>
                <select
                  className="faq-dropdown"
                  onChange={(e) => setInput(e.target.value)}
                  defaultValue=""
                >
                  <option value="" disabled>Select a question...</option>
                  <option value="What facilities do hostels offer?">🏠 Hostel facilities</option>
                  <option value="How does the AI survey work?">📊 How AI survey works</option>
                  <option value="Do you help with placements?">🎓 Placement support</option>
                  <option value="Are scholarships available?">💰 Scholarships info</option>
                  <option value="How can I contact support?">📞 Contact support</option>
                </select>
              </div>
            )}

            {/* ✅ Chat messages */}
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {loading && <div className="message bot">Typing...</div>}
          </div>

          {/* ✅ Input + Send */}
          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
