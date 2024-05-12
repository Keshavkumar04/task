import React, { useState } from "react";
import { HiOutlineChatAlt } from "react-icons/hi";
import { FcComments } from "react-icons/fc";

const ChatInput = ({ department }) => {
  const [message, setMessage] = useState("");
  const placeholder =
    department === "Sales"
      ? "Enter your sales query here..."
      : "Enter your marketing query here...";

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submitting the message
    console.log("Submitted message:", message);
    // Clear the input field
    setMessage("");
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-slate-700">
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-slate-700 rounded shadow-md p-4"
      >
        <span className="p-5">
          <FcComments className="w-8 h-8" />
        </span>
        <input
          type="text"
          value={message}
          onChange={handleChange}
          placeholder={placeholder}
          className="flex-1 px-4 py-2 border border-gray-300 rounded mr-2 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
