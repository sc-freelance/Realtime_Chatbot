import React, { useRef } from  'react';

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
    const inputRef = useRef();
    const handleFormSubmit = () => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;
        inputRef.current.value = "";

        // Update chat history with the user message
        setChatHistory((history) => [...history, { role: 'user', text: userMessage }]);
        
        // Delay 600 ms before generating Bot response
        setTimeout(() => {
            // Add a "Thinking..." placeholder from the model
            setChatHistory((history) => [...history, { role: 'bot', text: 'Thinking...' }]);

            // Call the function to generate bot response
            generateBotResponse([...chatHistory, { role: 'user', text: userMessage }]);
        }, 600);

    }
    return (
        <form action="#" classform="chat-form" onSubmit={handleFormSubmit}>
            <input 
            ref={inputRef} 
            type="text" 
            placeholder="Type your message in here..."
            className="message-input" 
            required
            />
            <button type="submit" className="send-button">Send</button>
        </form>
    );
};

export default ChatForm;