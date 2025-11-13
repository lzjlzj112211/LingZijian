import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../index.css';

const MessagePage: React.FC = () => {
  const { channelId } = useParams(); // channelId 对应手绘的 "Tom"
  const navigate = useNavigate();
  // 模拟聊天消息（可替换为真实数据）
  const [messages, setMessages] = useState([
    { sender: 'Tom', content: 'Hi', time: '10:00' },
    { sender: 'You', content: 'Hi', time: '10:01' },
    { sender: 'Tom', content: '绿色', time: '10:02' },
    { sender: 'You', content: '绿色', time: '10:03' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        sender: 'You',
        content: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setNewMessage('');
    }
  };

  return (
    <div className="message-container">
      <div className="channel-header">
        <button onClick={() => navigate('/channels')} className="back-btn">←</button>
        <h2>Channels: {channelId}</h2>
      </div>
      <div className="messages-list">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`message-bubble ${msg.sender === 'You' ? 'self-message' : 'other-message'}`}
          >
            <span className="message-sender">{msg.sender}</span>
            <div className="message-content">{msg.content}</div>
            <span className="message-time">{msg.time}</span>
          </div>
        ))}
      </div>
      <div className="message-input-area">
        <input
          type="text"
          placeholder="Type new messages here..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          className="message-input"
        />
        <button onClick={sendMessage} className="send-btn">
          ↗
        </button>
      </div>
    </div>
  );
};

export default MessagePage;