import React from 'react';
import CourseCard from '../Components/CourseCard';

const CoursesPage = () => {
  return (
    <div className="courses-page">
      <h1>All Courses</h1>
      <div className="course-list">
        <CourseCard title="Advanced JavaScript" instructor="Sarah Lee" rating={4.9} />
        <CourseCard title="Python for Data Science" instructor="Michael Scott" rating={4.6} />
        <CourseCard title="Intro to Web Development" instructor="Kevin Brown" rating={4.7} />
      </div>
    </div>
  );
};

export default CoursesPage;
