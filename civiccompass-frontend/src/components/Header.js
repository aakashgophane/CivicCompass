import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">CivicCompass</h1>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/tracker">Accountability</Link>
          <Link to="/chatbot">Chatbot</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
