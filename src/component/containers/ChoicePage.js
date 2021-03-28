import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";

import { createListRange } from "../../utils";

export default function ChoicePage(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ margin: "auto" }}>
        <select value={1}>
          {createListRange(props.listLength).map((c) => (
            <option>{c}</option>
          ))}
        </select>
        <input type="text"></input>
        <button
          variant="contained"
          color="primary"
          href="/CreateCoursePage"
          style={{ marginLeft: "1em" }}
        >
          +
        </button>
        <button
          variant="contained"
          color="primary"
          href="/CreateCoursePage"
          style={{ marginLeft: "1em" }}
        >
          -
        </button>
      </div>
    </div>
  );
}
