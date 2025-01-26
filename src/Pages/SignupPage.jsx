import React from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <div className="signup-page">
      <div className="form-container">
        <h2>Sign Up</h2>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <button type="submit" className="btn">Sign Up</button>
          <div className="have-account">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
