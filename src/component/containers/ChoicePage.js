import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
export default class ChoicePage extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ margin: "auto" }}>
          <select value={1}>
            <option> 1 </option>
            <option> 2 </option>
          </select>
          <input type="text"></input>
          <Button
            variant="contained"
            color="primary"
            href="/CreateCoursePage"
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
