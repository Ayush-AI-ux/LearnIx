import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve user information from sessionStorage
  const user = JSON.parse(sessionStorage.getItem("user"));

  // Retrieve cart items from sessionStorage
  useEffect(() => {
    const cartItems = JSON.parse(sessionStorage.getItem("cart")) || [];
    setCartCount(cartItems.length);

    // Event listener to update cart count when it's changed
    const handleCartUpdated = () => {
      const updatedCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];
      setCartCount(updatedCartItems.length);
    };

    window.addEventListener("cartUpdated", handleCartUpdated);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdated);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user"); // Clear user from sessionStorage
    navigate("/"); // Redirect to the homepage
  };

  const handleCartClick = () => {
    navigate("/cart"); // Redirect to the cart page
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">EduPlatform</div>
      <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/courses"
            className={location.pathname === "/courses" ? "active" : ""}
          >
            Courses
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            className={location.pathname === "/dashboard" ? "active" : ""}
          >
            Dashboard
          </Link>
        </li>
        <li className="cart-icon" onClick={handleCartClick}>
          <span className="cart-icon-symbol">🛒</span>
        </li>
        {user ? (
          <li className="user-avatar">
            <div
              className="avatar"
              title={`Welcome, ${user.name}`}
              onClick={() => navigate("/profileinfo")}
              style={{ cursor: "pointer" }}
            >
              A
            </div>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </li>
        ) : (
          <li>
            <Link to="/login">
              <button className="navbar-button">Login/Signup</button>
            </Link>
          </li>
        )}
        {/* <li className="cart-icon" onClick={handleCartClick}>
          <span className="cart-icon-symbol">🛒</span>
        </li> */}
      </ul>
      <div className="hamburger-menu" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
