import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-600">Login</h2>
      <form className="mt-4" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="block w-full p-2 border border-gray-300 rounded mt-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-full p-2 border border-gray-300 rounded mt-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-600 text-white p-2 mt-4 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
