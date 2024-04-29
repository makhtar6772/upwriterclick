import React, { useState, useEffect, useRef } from "react";

function AiMentor() {
  const key = import.meta.env.VITE_OPENAI_K;
  const url = import.meta.env.VITE_OPENAI_URL;

  const [userInput, setUserInput] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const chatAreaRef = useRef(null); // Reference for chat area div

  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem("chatMessages"));
    if (savedMessages) {
      setChatMessages(savedMessages);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(chatMessages));
    scrollToBottom(); // Scroll to bottom whenever chat messages change
  }, [chatMessages]);

  const scrollToBottom = () => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSend = async () => {
    if (userInput.trim() === "") return;

    const newUserMessage = { text: userInput, user: true };
    setChatMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setUserInput("");

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: chatMessages
            .map((message) => ({
              role: message.user ? "user" : "assistant",
              content: message.text,
            }))
            .concat({ role: "user", content: userInput }),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const aiReply = { text: data.choices[0].message.content, user: false };
      setChatMessages((prevMessages) => [...prevMessages, aiReply]);
    } catch (error) {
      console.error("Error occurred while sending message:", error);
    }
  };
  const handleNewChat = () => {
    setChatMessages([]);
  };

  return (
    <div
      className="max-w-[98%] p-10 bg-white rounded-[20px] overflow-auto "
      style={{ maxHeight: "900px" }}
    >
      <div className="bg-white h-[800px] flex flex-col justify-end">
        <div className="mx-auto p-6">
          {/* Chat Area */}
          <div
            id="chat-area"
            className="bg-white shadow-lg border-2 border-gray-200 rounded-lg p-6 mt-4 w-[960px] overflow-auto"
            style={{ maxHeight: "650px" }}
            ref={chatAreaRef} // Set ref to chat area div
          >
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.user ? "user" : "chatgpt"}`}
                style={{ marginBottom: "10px" }} // Add margin bottom instead of margin top
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* Message Input Area */}
          <div className="flex items-center gap-4 justify-between p-4 mt-4 w-[960px]">
            <input
              className="flex-1 py-2 px-6  border-2 border-gray-200 rounded-full focus:outline-none "
              type="text"
              placeholder="Type here..."
              value={userInput}
              onChange={handleUserInput}
            />
            <button
              className="bg-green-500 text-white rounded-[30px] p-2 w-[90px] hover:bg-green-600 focus:outline-none"
              onClick={handleSend}
            >
              Send
            </button>
            <button
              className="bg-blue-500 text-white rounded-[40px] w-[100px] p-2  hover:bg-blue-600 focus:outline-none"
              onClick={handleNewChat}
            >
              New Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiMentor;
