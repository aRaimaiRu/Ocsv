import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
export default class QuestionPage extends Component {
  handleEntailmentRequest(e) {
    e.preventDefault();
    //do something...
  }
  render() {
    return (
      <div
        style={{ display: "flex", flexDirection: "column" }}
        key={this.props.k}
      >
        <div style={{ margin: "auto" }}>
          <Checkbox inputProps={{ "aria-label": "primary checkbox" }} />
          <input type="text"></input>
          <Button
            variant="contained"
            color="primary"
            href="/ChoicePage"
            style={{ marginLeft: "1em" }}
          >
            +
          </Button>
          <Button
            variant="contained"
            color="primary"
            href="/CreateCoursePage"
            style={{ marginLeft: "1em" }}
          >
            -
          </Button>
        </div>
      </div>
    );
  }
}
