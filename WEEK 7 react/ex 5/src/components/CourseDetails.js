import React from "react";

export default function CourseDetails({ courses }) {
  return (
    <div>
      <h2>Course Details</h2>
      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <h4>{course.date}</h4>
        </div>
      ))}
    </div>
  );
}
