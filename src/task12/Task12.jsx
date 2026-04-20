 import React, { useState } from "react";
import "./task12.css";

function Task12() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim() === "") return;

    const userMessage = {
      text: message,
      sender: "user",
      status: "sent",
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");

    // ✔ delivered
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg, index) =>
          index === prev.length - 1
            ? { ...msg, status: "delivered" }
            : msg
        )
      );
    }, 1000);

    // ✔✔ blue (seen)
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg, index) =>
          index === prev.length - 1
            ? { ...msg, status: "seen" }
            : msg
        )
      );
    }, 2000);

    // 🤖 Bot reply (LEFT + green ✔✔)
    setTimeout(() => {
      const botMessage = {
        text: getBotReply(message),
        sender: "bot",
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1200);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  const getBotReply = (msg) => {
    const text = msg.toLowerCase();

    if (text.includes("hi") || text.includes("hello")) {
      return "Hello! ";
    } else if (text.includes("how are you")) {
      return "I'm doing great! ";
    } else if (text.includes("bye")) {
      return "Goodbye! ";
    } else {
      return "I’m still learning ";
    }
  };

  const renderTicks = (status) => {
    if (status === "sent") return "✔";
    if (status === "delivered") return "✔✔";
    if (status === "seen") return <span className="blue">✔✔</span>;
    return null;
  };

  return (
    <div className="chat-wrapper">
      <div className="chat-box">
        <h2 className="chat-title">💬 WhatsApp Chat UI</h2>

        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-bubble ${
                msg.sender === "user" ? "right" : "left"
              }`}
            >
              <span>{msg.text}</span>

              {/* ✔✔ ticks */}
              <span
                className={`ticks ${
                  msg.sender === "bot" ? "green" : ""
                }`}
              >
                {msg.sender === "bot"
                  ? "✔✔"
                  : renderTicks(msg.status)}
              </span>
            </div>
          ))}
        </div>

        <div className="chat-input-area">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Task12;