import React from 'react';
import ChatBotIcon from './ChatBotIcon';

const ChatMessage = ({ chat }) => {
  if (chat.hideInChat) return null;

  const roleClass = chat.role === 'model' ? 'bot' : 'user';
  const errorClass = chat.isError ? 'error' : '';

  return (
    <div className={`message ${roleClass}-message ${errorClass}`}>
      {chat.role === 'model' && <ChatBotIcon />}
      <p className="message-text">{chat.text}</p>
    </div>
  );
};

export default ChatMessage;