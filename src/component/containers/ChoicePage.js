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
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
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
            onClick={(e) => {
              this.handleEntailmentRequest(e);
              this.props.delete();
            }}
          >
            -
          </Button>
        </div>
      </div>
    );
  }
}
