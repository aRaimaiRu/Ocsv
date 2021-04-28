import React from "react";
import MyCard from "./outlinedCard";
import { deleteCourse } from "../../utils";
export default function CourseCard({ courses, token, setState }) {
  const handleDelete = (_id) => {
    deleteCourse(token, _id)
      .then((data) => {
        window.location.reload();
      })
      .catch((e) => {
        console.log("Delete error ", e);
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
