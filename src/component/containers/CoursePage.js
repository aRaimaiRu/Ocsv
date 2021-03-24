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
  }

  render() {
    return (
      <>
        {console.log(this.state)}
        <Button variant="contained" color="primary" href="/CreateCoursePage">
          Create Course
        </Button>
        <CourseCard courses={this.state}></CourseCard>
      </>
    );
  }
}
