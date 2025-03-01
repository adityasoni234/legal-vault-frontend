import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you choose a legal agreement?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  // Function to handle user queries
  const handleUserMessage = () => {
    if (!input.trim()) return;

    // Add user message to chat
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    // Determine chatbot response
    setTimeout(() => {
      let response = getLegalTemplateResponse(input);
      setMessages([...newMessages, { text: response, sender: "bot" }]);
    }, 1000);
  };

  // Function to determine response based on user input
  const getLegalTemplateResponse = (query) => {
    const lowerCaseQuery = query.toLowerCase();

    if (lowerCaseQuery.includes("rent") || lowerCaseQuery.includes("flat")) {
      return "I recommend using a Rent Agreement for your situation.";
    }
    if (lowerCaseQuery.includes("partnership") || lowerCaseQuery.includes("business partner")) {
      return "You should use a Partnership Agreement.";
    }
    if (lowerCaseQuery.includes("nda") || lowerCaseQuery.includes("confidential")) {
      return "For confidentiality, an NDA (Non-Disclosure Agreement) is best.";
    }
    if (lowerCaseQuery.includes("employment") || lowerCaseQuery.includes("hire")) {
      return "An Employment Contract would be ideal for hiring someone.";
    }
    if (lowerCaseQuery.includes("loan") || lowerCaseQuery.includes("borrow money")) {
      return "A Loan Agreement should be used for lending or borrowing money.";
    }
    if (lowerCaseQuery.includes("freelance") || lowerCaseQuery.includes("contractor")) {
      return "A Freelance Work Contract is best for hiring a freelancer.";
    }

    return "I'm not sure. Can you provide more details about your requirement?";
  };

  return (
    <div className={`chatbot-container ${isOpen ? "open" : ""}`}>
      {/* Chatbot Toggle Button */}
      <div className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "💬"}
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">Legal Chatbot</div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Ask about legal agreements..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleUserMessage()}
            />
            <button onClick={handleUserMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
