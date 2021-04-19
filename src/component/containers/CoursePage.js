import Button from "@material-ui/core/Button";
import CourseCard from "../Dump/CourseCard";
import React, { Component } from "react";

export default class CoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = [
      { id: 1, grade: "วิทยาการคำนวน ม.1", module: "วิทยาการคอมพิวเตอร์" },
      { id: 2, grade: "วิทยาการคำนวน ม.2", module: "วิทยาการคอมพิวเตอร์" },
    ];
    // console.log("CoursePageToken", JSON.parse(props.token)._id);
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
        <Button href="/CreateCoursePage">Create Course</Button>
        <CourseCard courses={this.state}></CourseCard>
      </>
    );
  }
}
