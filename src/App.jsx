const App = () => {
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
            <form action="#" classform="chat-form">
              <input type="text" placeholder="Type your message in here..."
              className="message-input" Required/>
              <button type="submit" className="send-button">Send</button>
              
            </form>
          </div>

        </div>

      </div>
    </div>
  )
};

export default App;