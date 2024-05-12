import React, { useState } from "react";
import { HiChatAlt2 } from "react-icons/hi";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "user123" && password === "pass123") {
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-slate-600">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <HiChatAlt2 className="w-10 h-10 " color="green" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className=" p-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <button
            onClick={handleLogin}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2px "
          >
            Login
          </button>
          {error && <div className="text-red-500 mt-4">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
