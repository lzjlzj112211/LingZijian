import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const ChannelList: React.FC = () => {
  const navigate = useNavigate();
  // 匹配手绘的频道数据
  const channels = [
    { id: '1', tag: 'TO', name: 'Tom' },
    { id: '2', tag: 'PE', name: 'Peter' },
    { id: '3', tag: 'JA', name: 'James' },
    { id: '4', tag: 'KE', name: 'Kevin' },
  ];

  return (
    <div className="channel-list-container">
      <h2 className="channel-header">Channels</h2>
      <div className="channel-list">
        {channels.map((channel) => (
          <div
            key={channel.id}
            className="channel-item"
            onClick={() => navigate(`/channels/${channel.name}`)} 
          >
            <div className="channel-tag">{channel.tag}</div>
            <span className="channel-name">{channel.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelList;