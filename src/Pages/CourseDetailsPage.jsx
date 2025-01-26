import React from 'react';
import VideoPlayer from '../Components/VideoPlayer';

const CourseDetailsPage = () => {
  return (
    <div className="course-details-page">
      <h1>Course Title</h1>
      <p>Instructor: John Doe</p>
      <p>Rating: 4.8 ⭐</p>
      <h2>Course Overview</h2>
      <p>This is a detailed description of the course. It includes the topics covered, objectives, and other important information.</p>
      <VideoPlayer src="https://www.w3schools.com/html/mov_bbb.mp4" />
    </div>
  );
};

export default CourseDetailsPage;
