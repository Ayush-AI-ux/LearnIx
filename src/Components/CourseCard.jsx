import React from 'react';

const CourseCard = ({ title, instructor, rating }) => {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>Instructor: {instructor}</p>
      <p>Rating: {rating} ⭐</p>
    </div>
  );
};

export default CourseCard;
