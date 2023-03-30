import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import openai_icon from '../static/images/openai_icon.png';
import chatbot_icon from '../static/images/dalle_chatbot.png';
import soccer_fan2 from '../static/images/soccer_fan2.png';
import popout_icon from '../static/images/popout_icon.png';
import close_icon from '../static/images/close_icon.png';
import submit_icon from '../static/images/submit_icon.png';

const API_FB_KEY = process.env.REACT_APP_OPENAI_API_KEY;
// const API_FB_KEY = ''

const ChatGPT4 = (props) => {
  const configuration = new Configuration({
    apiKey: API_FB_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const chatWithGPT4 = (input) => {
    setIsTyping(true);
    openai
      .createChatCompletion({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'You are a soccer expert.' },
          ...messages,
          { role: 'user', content: input },
        ],
        temperature: 0,
        n: 1,
        max_tokens: 1500,
      })
      .then((ai) => {
        if (ai.data.choices[0].message) {
          setMessages([
            ...messages,
            { role: 'user', content: input },
            { role: 'assistant', content: ai.data.choices[0].message.content },
          ]);
          setIsTyping(false);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
        console.log(error.response.status);
        console.log(error.response.data);
        console.log(error.message);
      });
  };

  const handleSend = () => {
    if (userInput.trim()) {
      chatWithGPT4(userInput);
      setUserInput('');
    }
  };

  const handlePopoutClick = () => {
    // Your custom click event handler logic here
    console.log('Button clicked');
  };

  const handleCloseClick = () => {
    // Your custom click event handler logic here
    console.log('Button clicked');
  };

  return (
    <div className="chatGPT4">
      <div className="chatGPT4-window">
        {/* Chat header */}
        <div className="chatGPT4-header">
          <img src={openai_icon} alt="Bot" className="chatGPT4-bot-image" />
          <div className="chatGPT4-bot-name">ChatGPT-4 Soccer Expert</div>
          {/* <button className="chatGPT4-popout">{popout_icon}</button> */}
          <input onClick={handlePopoutClick} className="chatGPT4-popout" type="image" src={popout_icon} alt="Submit" />
        </div>
        {/* Messages */}
        <div className="chatGPT4-messages">
          {messages.map((message, index) => (
            <div key={index} className={`chatGPT4-message chatGPT4-${message.role}`}>
              <img
                className="chatImages"
                src={message.role === 'user' ? props.profileImg || soccer_fan2 : chatbot_icon}
                alt={message.role}
              />
              <div className="chatGPT4-message-content">{message.content}</div>
            </div>
          ))}
          {isTyping && (
            <div className="chatGPT4-typing">
              <span className="chatGPT4-dot">.</span>
              <span className="chatGPT4-dot">.</span>
              <span className="chatGPT4-dot">.ChatGPT-4 Soccer Expert is responding...</span>
            </div>
          )}
        </div>
        {/* Input */}
        <div className="chatGPT4-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onClick={() => handleSend()}
            className="chatGPT4-input-text"
          />
          <input onClick={handleSend} className="chatGPT-submitBtn" type="image" src={submit_icon} alt="Close" />
        </div>
        {/* Privacy message */}
        <div className="chatGPT4-privacy">
          ChatGPT4 Bot by FootyStats | At this time, we are not saving any data submitted or returned from OpenAI{' '}
          {/* ChatGPT4 Bot by FootyStats | By chatting, you consent to the storing of your messages according to our{' '} */}
          {/* <a href="https://example.com/privacy" target="_blank" rel="noreferrer">
            privacy policy
          </a>
          . */}
        </div>
      </div>
      <input onClick={handleCloseClick} className="chatGPT-closeBtn" type="image" src={close_icon} alt="Close" />
    </div>
  );
};

export default ChatGPT4;
