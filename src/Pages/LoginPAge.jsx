import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Error state

  const mockUser = {
    email: "test@example.com",
    password: "123",
    name: "Ayush",
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === mockUser.email && password === mockUser.password) {
      // Save mock user data temporarily
      sessionStorage.setItem("user", JSON.stringify(mockUser));
      navigate("/profile");
    } else {
      setError("Invalid credentials. Please try again."); // Show error message
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Log In</h2>
        <p>Please enter your credentials to access your account.</p>
        <form onSubmit={handleLogin}>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>} {/* Error message */}
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
        <a href="#" className="forgot-password">Forgot Password?</a>
        <div className="already-account">
          Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
