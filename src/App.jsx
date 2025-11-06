import { useState } from 'react';
import ChatBotIcon from './components/ChatBotIcon';
import ChatForm from './components/ChatForm';
import ChatMessage from './components/ChatMessage';
import './index.css';

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  const generateBotResponse = () => {

  }

  return (
    <div className="container">
      <div className="chatbot-popup">
        {/* ChatBot Header*/}
        <div className="chat-header">
          <div className="header-info">
            <ChatBotIcon />
            <h2 className="logo-text">ChatBot</h2>
          </div>
          <button 
          className="materials-symbols-rounded">Keyboard Arrow Down</button>
        </div>

        {/* ChatBot Body */}
        <div className="chat-body">
          <div className="message bot-message">
            <ChatBotIcon />
            <p className="message-text">
              Greetings, I am an AI powered Chatbot, here to fill your curiosity
            </p>
          </div>


          {/* Render the chat history dynamically */}
          {chatHistory.map((chat, index) => (
            <ChatMessage  key={index} chat={chat} />
          ))}

          <div className="chat-footer">
            <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory}  generateBotResponse={generateBotResponse}/>
          </div>

        </div>

      </div>
    </div>
  )
};

export default App;