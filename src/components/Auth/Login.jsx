import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="border-2 rounded-xl p-10 border-cyan-700">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            className="px-3 py-2 border-2 outline-none bg-transparent border-cyan-700 font-medium text-lg rounded-full placeholder:text-gray-400"
            required
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your email"
          />
          <input
            className="px-3 py-2 border-2 outline-none bg-transparent border-cyan-700 font-medium text-lg rounded-full placeholder:text-gray-400 mt-3"
            required
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter password"
          />
          <button className="mt-5 px-4 py-1 rounded-full font-medium text-lg border-none bg-cyan-700 outline-none">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
