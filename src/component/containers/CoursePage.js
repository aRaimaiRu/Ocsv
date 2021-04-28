import Button from "@material-ui/core/Button";
import CourseCard from "../Dump/CourseCard";
import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function CoursePage(props) {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3006/api/v1/allcontent/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "x-auth-token": JSON.parse(props.token)._id,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setState(Object.values(data));
        return data;
      });
  }, []);

  return (
    <>
      <Link
        to={{
          pathname: "/CreateCoursePage/",
          state: {
            grade: "",
            module: "",
            mainTopic: [{ id: 1, title: "main1" }],
            subTopic: [{ id: 1, title: "sub topic 1", main: 1 }],

            token: JSON.parse(props.token)._id,
            content: [
              {
                id: 0,
                content: "",
                sub: 1,
                contentType: "Content",
                Explain: "",
                outLink: "",
                Answer: [],
                Choice: [],
                Picture: [],
              },
            ],
          },
        }}
      >
        <Button href="/CreateCoursePage">Create Course</Button>
      </Link>
      <CourseCard
        courses={state}
        token={JSON.parse(props.token)._id}
        setState={setState}
      ></CourseCard>
    </>
  );
}
