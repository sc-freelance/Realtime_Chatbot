import React, { useRef } from 'react';

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = '';

    // Add user's message
    setChatHistory((history) => [...history, { role: 'user', text: userMessage }]);

    // Delay before bot "thinking"
    setTimeout(() => {
      setChatHistory((history) => [...history, { role: 'model', text: 'Thinking...' }]);

      // Call API with user message appended
      generateBotResponse([
        ...chatHistory,
        {
          role: 'user',
          text: `Using the details provided above, please address this query: ${userMessage}`,
        },
      ]);
    }, 600);
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type your message here..."
        className="message-input"
        required
      />
      <button type="submit" className="send-button">Send</button>
    </form>
  );
};

export default ChatForm;