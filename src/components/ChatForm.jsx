import React from  'react';

const ChatForm = ({setChatHistory}) => {
    const inputRef = useRef();
    const handleFormSubmit = () => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;
        inputRef.current.value = "";

        //Update chat history with the user message
        setChatHistory(history => [...history, { role: 'user', text: userMessage }]);
    }
    return (
        <form action="#" classform="chat-form" onSubmit={handleFormSubmit}>
            <input ref={inputRef} type="text" placeholder="Type your message in here..."
            className="message-input" Required/>
            <button type="submit" className="send-button">Send</button>
        </form>
    )
}

export default ChatForm;