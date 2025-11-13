import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // 登录后跳转频道列表页
    navigate('/channels');
  };

  return (
    <div className="login-container">
      <h1 className="login-title">The Message</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />
      <button onClick={handleLogin} className="login-btn">
        Login
      </button>
    </div>
  );
};

export default Login;