import React from 'react';
import CategoryCard from '../Components/CategoryCard';
import CourseCard from '../Components/CourseCard';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="hero">
        <h1>Learn Smarter, Earn Faster – Redefining Education and learning process</h1>
        <p>Thousands of courses to build your skills.</p>
            <div className="hero-buttons">
                <button className="hero-button hero-button-primary">Get Started</button>
                <button className="hero-button hero-button-secondary">Learn More</button>
            </div>
        </div>
        <div className="categories-image">
        <img 
          src="https://www.2coms.com/images/depositphotos_24797123-stock-illustration-learn-and-earn.jpg" 
          alt="Learning Categories" 
          className="categories-banner" 
        />
      </div>
      <section className="categories">
        <h2>Categories</h2>
        <div className="category-list">
          <CategoryCard name="Programming" />
          <CategoryCard name="Design" />
          <CategoryCard name="Business" />
          <CategoryCard name="Databases" />
          <CategoryCard name="Operating System" />
          <CategoryCard name="Structures and Algorithms" />
        </div>
      </section>
      <section className="featured-courses">
        <h2>Featured Courses</h2>
        <div className="course-list">
          <CourseCard title="React for Beginners" instructor="John Doe" rating={4.8} />
          <CourseCard title="UI/UX Design Mastery" instructor="Jane Smith" rating={4.7} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
