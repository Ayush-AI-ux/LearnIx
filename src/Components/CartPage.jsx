import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart); // Load cart from localStorage
    }
  }, []);

  const handleRemoveFromCart = (courseId) => {
    const updatedCart = cart.filter((course) => course.id !== courseId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout");
    // Implement checkout logic
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((course) => (
              <li key={course.id} className="cart-item">
                <div className="cart-item-info">
                  <h3>{course.title}</h3>
                  <p className="course-price">{course.price}</p>
                </div>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveFromCart(course.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="checkout-container">
        <button className="checkout-button" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
