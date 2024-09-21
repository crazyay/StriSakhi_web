import React, { useState } from 'react';
import styles from '../compoCSS/Chatbot.module.css';
import { FaMicrophone, FaTimes } from 'react-icons/fa';

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className={styles.chatbotContainer}>
      {/* Chat Icon */}
      {!isChatOpen && (
        <div className={styles.chatIcon} onClick={toggleChat}>
          <img src="https://e7.pngegg.com/pngimages/191/906/png-clipart-internet-bot-chatbot-business-chatbot-avatar-child-face-thumbnail.png" alt="Chatbot" />
        </div>
      )}

      {/* Chat Window */}
      {isChatOpen && (
        <div className={`${styles.chatWindow} ${isChatOpen ? styles.open : ''}`}>
          <div className={styles.chatHeader}>
            <img src="https://e7.pngegg.com/pngimages/191/906/png-clipart-internet-bot-chatbot-business-chatbot-avatar-child-face-thumbnail.png" alt="Chatbot" className={styles.chatHeaderImage} />
            <p className={styles.chatHeaderText}>Stree Sakhi Assistant</p>
            <FaTimes className={styles.closeIcon} onClick={toggleChat} />
          </div>
          <div className={styles.chatBody}>
            {/* Chat messages will go here */}
          </div>
          <div className={styles.chatFooter}>
            <input type="text" className={styles.chatInput} placeholder="Type a message..." />
            <button className={styles.chatVoiceButton}>
              <FaMicrophone />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
