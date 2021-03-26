import React from "react";
import MyCard from "./outlinedCard";
export default function CourseCard({ courses }) {
  return (
    <div className="Courses">
      {courses.map((obj) => (
        <MyCard grade={obj.grade} module={obj.module} id={obj.id} />
      ))}
    </div>
  );
}
