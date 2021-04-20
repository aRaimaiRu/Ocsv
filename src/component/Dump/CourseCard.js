import React from "react";
import MyCard from "./outlinedCard";
export default function CourseCard({ courses, token }) {
  const handleDelete = (_id) => {
    fetch("http://localhost:3001/api/v1/allcontent/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
      body: JSON.stringify({
        _id,
      }),
    });
  };
  return (
    <div className="Courses">
      {Object.values(courses).map((obj, key) => (
        <MyCard
          // grade={obj.grade}
          // module={obj.module}
          // id={obj.id}
          obj={obj}
          token={token}
          key={key}
          handleDelete={() => handleDelete(obj._id)}
        />
      ))}
    </div>
  );
}
