import { useState } from 'react';
import ChatBotIcon from './components/ChatBotIcon';
import ChatForm from './components/ChatForm';
import './index.css';

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);


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

          <div className="message user-message">
            <p className="message-text">
              ITNIHTTTCSETSFATRHLHSTAWTH
            </p>
          </div>

          <div className="chat-footer">
            <ChatForm setChatHistory={setChatHistory} />
          </div>

        </div>

      </div>
    </div>
  )
};

export default App;