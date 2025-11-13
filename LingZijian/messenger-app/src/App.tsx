import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ChannelList from './pages/ChannelList';
import MessagePage from './pages/MessagePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/channels" element={<ChannelList />} />
        <Route path="/channels/:channelId" element={<MessagePage />} />
      </Routes>
    </Router>
  );
}

export default App;