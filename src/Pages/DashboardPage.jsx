import React from 'react';
import CourseCard from '../Components/CourseCard';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <h1>Your Enrolled Courses</h1>
      <div className="course-list">
        <CourseCard
          title="React for Beginners"
          instructor="John Doe"
          rating={4.8}
          image="https://i.ytimg.com/vi/nTeuhbP7wdE/maxresdefault.jpg" // Replace with actual image URLs
        />
        <CourseCard
          title="Python for Data Science"
          instructor="Michael Scott"
          rating={4.6}
          image="https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/python-for-data-science-course.jpeg" // Replace with actual image URLs
        />
      </div>
    </div>
  );
};

export default DashboardPage;
