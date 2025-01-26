import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [cart, setCart] = useState([]); // State to hold items added to cart

  // List of courses
  const courses = [
    {
      id: 1,
      title: "React for Beginners",
      image: "https://i.ytimg.com/vi/nTeuhbP7wdE/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=miZ0vI1lSZw",
      description: "Learn React from scratch with this beginner-friendly course.",
      rating: 4.8,
      price: "$99",
      duration: "8 hours",
    },
    {
      id: 2,
      title: "Python for Data Science",
      image: "https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/python-for-data-science-course.jpeg",
      videoUrl: "https://www.youtube.com/watch?v=7XqKZck1ZlQ",
      description: "Master Python for data analysis and machine learning.",
      rating: 4.6,
      price: "$120",
      duration: "10 hours",
    },
    {
      id: 3,
      title: "UI/UX Design Basics",
      image: "https://swmultimedia.in/wp-content/uploads/2023/04/SW-MULTI-MEDIA-COURSES-01-min.png",
      videoUrl: "https://www.youtube.com/watch?v=-6fk3PXpznY",
      description: "A beginner's guide to designing user-friendly interfaces.",
      rating: 4.7,
      price: "$85",
      duration: "6 hours",
    },
    {
      id: 4,
      title: "Introduction to Data Analysis",
      image: "https://www.casact.org/sites/default/files/styles/story/public/2022-10/CAS-DISC-Course-III.jpg?itok=-QCfLT1W",
      videoUrl: "https://www.youtube.com/watch?v=dRZZHTxA6Q0",
      description: "Learn to do analysis of data with this beginner-friendly course.",
      rating: 4.6,
      price: "$109",
      duration: "20 hours",
    },
    {
      id: 5,
      title: "Business and Management",
      image: "https://www.venturelessons.com/wp-content/uploads/2020/08/business-management.jpg",
      videoUrl: "https://www.youtube.com/watch?v=3JLUxmV5wsQ",
      description: "Learn business and administration for industry purposes.",
      rating: 4.6,
      price: "$129",
      duration: "14 hours",
    },
  ];

  // Redirect to the home page if the user is not logged in
  if (!user) {
    navigate("/");
    return null;
  }

  // Add to cart function
  const addToCart = (e, course) => {
    e.stopPropagation(); // Prevent course detail click on add to cart
    console.log("Adding to cart:", course.title); // Log when adding to cart
    const updatedCart = [...cart, course];
    console.log("Updated cart:", updatedCart); // Log updated cart
    setCart(updatedCart); // Update state
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to localStorage
    console.log("Saved cart to localStorage"); // Log saving to localStorage
  };

  // Handle course click (opens a new tab with course details)
  const handleCourseClick = (course) => {
    if (!course.videoUrl) return;

    // Safely extract the video ID and create the embed URL
    const videoId = course.videoUrl.includes("embed/")
      ? course.videoUrl.split("embed/")[1]
      : course.videoUrl.split("v=")[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    const courseDetailsHtml = `
      <html>
        <head>
          <title>${course.title}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
            }
            .container {
              display: flex;
              height: 100vh;
              flex-direction: row;
            }
            .video-section {
              width: 65%;
              background-color: #000;
            }
            iframe {
              width: 100%;
              height: 100%;
              border: none;
            }
            .content-section {
              width: 35%;
              padding: 20px;
              overflow-y: auto;
              box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
            }
            .content-section h2 {
              font-size: 18px;
              margin-bottom: 10px;
              color: #333;
            }
            .progress-container {
              width: 100%;
              margin: 10px 0;
              display: flex;
              align-items: center;
              gap: 10px;
            }
            .progress-bar {
              flex: 1;
              height: 8px;
              background-color: #ddd;
              border-radius: 4px;
              overflow: hidden;
              position: relative;
            }
            .progress-bar-fill {
              width: 0%;
              height: 100%;
              background-color: #4caf50;
              transition: width 0.3s ease;
            }
            .progress-percentage {
              font-size: 12px;
              color: #555;
              font-weight: bold;
              width: 30px;
              text-align: right;
            }
            .content-section ul {
              list-style: none;
              padding: 0;
            }
            .content-section ul li {
              padding: 10px;
              margin-bottom: 8px;
              border-bottom: 1px solid #ddd;
              cursor: pointer;
              transition: background-color 0.3s ease;
            }
            .content-section ul li:hover {
              background-color: #f4f4f4;
            }
            .content-section ul li .title {
              font-weight: bold;
            }
            .content-section ul li .duration {
              font-size: 12px;
              color: #666;
            }
            .content-section::-webkit-scrollbar {
              width: 8px;
            }
            .content-section::-webkit-scrollbar-thumb {
              background-color: #ccc;
              border-radius: 4px;
            }
            .content-section::-webkit-scrollbar-track {
              background-color: #f4f4f4;
            }
            .bottom-details {
              padding: 20px;
            }
            .bottom-details p {
              margin: 5px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="video-section">
              <iframe id="videoPlayer" src="${embedUrl}" allowfullscreen></iframe>
            </div>
            <div class="content-section">
              <h2>Course Content</h2>
              <div class="progress-container">
                <div class="progress-bar">
                  <div id="progressBarFill" class="progress-bar-fill"></div>
                </div>
                <span id="progressPercentage" class="progress-percentage">0%</span>
              </div>
              <ul>
                <li onclick="updateVideo('${embedUrl}', 33)">
                  <span class="title">Beginner Level</span>
                  <br />
                  <span class="duration">Duration: 10 minutes</span>
                </li>
                <li onclick="updateVideo('https://www.youtube.com/embed/X8BYu3dMKf0', 66)">
                  <span class="title">Intermediate Level</span>
                  <br />
                  <span class="duration">Duration: 15 minutes</span>
                </li>
                <li onclick="updateVideo('https://www.youtube.com/embed/E9WGC0SLPVs', 100)">
                  <span class="title">Advanced Level</span>
                  <br />
                  <span class="duration">Duration: 20 minutes</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="bottom-details">
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Rating:</strong> ${course.rating} ★</p>
            <p><strong>Price:</strong> ${course.price}</p>
            <p><strong>Duration:</strong> ${course.duration}</p>
          </div>
          <script>
            function updateVideo(videoUrl, progress) {
              document.getElementById('videoPlayer').src = videoUrl;
              document.getElementById('progressBarFill').style.width = progress + '%';
              document.getElementById('progressPercentage').innerText = progress + '%';
            }
          </script>
        </body>
      </html>
    `;

    const newTab = window.open();
    newTab.document.write(courseDetailsHtml);
    newTab.document.close();
  };

  // Buy now function (placeholder for checkout)
  const buyNow = (course) => {
    alert(`Proceeding to buy: ${course.title}`);
    // Implement checkout process here
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      console.log("Loaded cart from localStorage:", savedCart); // Log loaded cart
      setCart(savedCart); // Load cart from localStorage on page load
    }
  }, []);

  return (
    <div className="profile-page">
      <h2>Welcome, {user.name}!</h2>
      <h3>Courses To Learn...</h3>
      <div className="course-list">
        {courses.map((course) => (
          <div
            className="course-card"
            key={course.id}
            onClick={() => handleCourseClick(course)} // Trigger course details view
            style={{ cursor: "pointer" }}
          >
            <img
              src={course.image || "https://via.placeholder.com/150"}
              alt={course.title}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>Rating: {course.rating} ★</p>
            <p>Price: {course.price}</p>
            <p>Duration: {course.duration}</p>
            <div className="course-actions">
              <button onClick={(e) => addToCart(e, course)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h4>Cart ({cart.length} items)</h4>
        <button onClick={() => navigate("/cart")}>View Cart</button>
      </div>
    </div>
  );
};

export default ProfilePage;
