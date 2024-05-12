import React, { useState } from "react";
import LoginPage from "./LoginPage";
import ChatInput from "./ChatInput";
import { HiChatAlt2 } from "react-icons/hi";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [department, setDepartment] = useState("Marketing");

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleDepartmentChange = (selectedDepartment) => {
    setDepartment(selectedDepartment);
  };

  return (
    <div>
      {!loggedIn && <LoginPage onLogin={handleLogin} />}
      {loggedIn && (
        <div
          className="bg-contain bg-center min-h-screen bg-no-repeat bg-slate-700"
          style={{ backgroundImage: 'url("/empty.png")' }}
        >
          {" "}
          <h1 className="flex  border-b border-stone-200 bg-blue-400 px-4 py-3 uppercase sm:px-6 text-center">
            <HiChatAlt2 />
            Chat App
          </h1>
          <div className="flex justify-center items-center mt-10">
            <select
              className="w-full lg:w-64 p-2 rounded-md border border-gray-300 shadow-md"
              value={department}
              onChange={(e) => handleDepartmentChange(e.target.value)}
            >
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
            </select>
          </div>
          <ChatInput department={department} />
        </div>
      )}
    </div>
  );
};

export default App;
