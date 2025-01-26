import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CoursesPage from "./Pages/CoursesPage";
import CourseDetailsPage from "./Pages/CourseDetailsPage";
import DashboardPage from "./Pages/DashboardPage";
import LoginPage from "./Pages/LoginPAge"; // Direct LoginPage
import SignupPage from "./Pages/SignupPage"; // Direct SignupPage
import ProfilePage from "./Pages/ProfilePages"; // Add the ProfilePage
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProfileInfo from "./Components/ProfileInfo";
import CartPage from "./Components/CartPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      {/* Parent container to manage flexbox layout */}
      <div className="app-container">
        <Navbar />
        <div className="content">
          {/* Routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/course/:id" element={<CourseDetailsPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/login" element={<LoginPage />} /> {/* Route for Login */}
            <Route path="/signup" element={<SignupPage />} /> {/* Route for Signup */}
            <Route path="/profile" element={<ProfilePage />} /> {/* Route for Profile */}
            <Route path="/profileinfo" element={<ProfileInfo />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
