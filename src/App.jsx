import { useState } from 'react';
import ChatBotIcon from './components/ChatBotIcon';
import ChatForm from './components/ChatForm';
import ChatMessage from './components/ChatMessage';
import './index.css';

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    // Helper function to update chat history
    const updateHistory = (text) => {
      setChatHistory(prev => [...prev.filter(msg => msg.text !== "Thinking..."), { role: 'model', text }]);
    }

    // Format chat history for API call
    history = history.map(({role, text}) => ({role, parts: [{text}]}));

    const requestOptions = {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify({contents:  history}),
    }

    try {
      // Make API call to generate bot response
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error.message || "Something went wrong!");

      // Clean and update chat history with bot response
      const apiTextResponse = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      updateHistory(apiTextResponse);
    } catch (error) {
      updateHistory(error.message, true)
    }
  };

  useEffect(() => {
    // Auto-scroll to the bottom of chat on new message
    chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight, behaviour: "smooth"});
  }, [chatHistory]);

  return (
    <div className={'container ${showChatbot ? "show-chatbot" : ""}'}>
      <button onClick={() => setShowChatbot((prev) => !prev)}id="chatbot-toggler">
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-rounded">close</span>
      </button>
      <div className="chatbot-popup">
        {/* ChatBot Header*/}
        <div className="chat-header">
          <div className="header-info">
            <ChatBotIcon />
            <h2 className="logo-text">ChatBot</h2>
          </div>
          <button onClick={() => setShowChatbot((prev) => !prev)}
          className="materials-symbols-rounded">Keyboard_Arrow_Down</button>
        </div>

        {/* ChatBot Body */}
        <div ref= {chatBodyRef} className="chat-body">
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