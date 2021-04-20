import Button from "@material-ui/core/Button";
import CourseCard from "../Dump/CourseCard";
import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class CoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = [
      { id: 1, grade: "วิทยาการคำนวน ม.1", module: "วิทยาการคอมพิวเตอร์" },
      { id: 2, grade: "วิทยาการคำนวน ม.2", module: "วิทยาการคอมพิวเตอร์" },
    ];
    // console.log("CoursePageToken", JSON.parse(props.token)._id);

    const handleDeleteCourse = (_id) => {
      fetch("http://localhost:3001/api/v1/allcontent/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",

          "x-auth-token": JSON.parse(this.props.token)._id,
        },
        body: JSON.stringify({
          _id,
        }),
      });
    };

    const test = "justtest";
  }

  async componentDidMount() {
    fetch("http://localhost:3001/api/v1/allcontent/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "x-auth-token": JSON.parse(this.props.token)._id,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        this.setState(Object.values(data));
        return data;
      });
  }

  render() {
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

              token: JSON.parse(this.props.token)._id,
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
          courses={this.state}
          token={JSON.parse(this.props.token)._id}
          deletee={this.handleDeleteCourse}
          test={this.test}
        ></CourseCard>
      </>
    );
  }
}
