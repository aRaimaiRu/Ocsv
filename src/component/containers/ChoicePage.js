import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";

import { createListRange } from "../../utils";
import { inArray } from "jquery";

export default function ChoicePage(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {console.log(props.mycontent, "ChoicePage")}
      <div style={{ margin: "auto" }}>
        {props.mycontent.contentType == "Choiceตัวเลือกแบบมีลำดับ" ? (
          <select
            value={props.mycontent.Answer[props.index]}
            onChange={(e) => {
              props.mycontent.Answer[props.index] = e.target.value;
              props.handleTextChange(props.mycontent);
            }}
          >
            {createListRange(props.listLength)
              .filter((c) => !props.mycontent.Answer.includes(c)) //wait to fix this big
              .map((c) => (
                <option value={c}>
                  {c}
                  {}
                </option>
              ))}
          </select>
        ) : props.mycontent.contentType == "Choiceแบบเลือกตอบ" ? (
          <input
            type="radio"
            name="site_name"
            value={props.index}
            checked={props.index === props.mycontent.Answer[0]}
            onChange={() => {
              props.mycontent.Answer[0] = props.index;
              props.handleTextChange(props.mycontent);
            }}
          />
        ) : (
          ""
        )}
        <input
          type="text"
          onChange={(e) => {
            props.mycontent.Choice[props.index] = e.target.value;
            props.handleTextChange(props.mycontent);
          }}
          value={props.mycontent.Choice[props.index]}
        ></input>
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
          onClick={() => {
            props.mycontent.Choice.splice(props.index, 1);
            props.mycontent.Answer.splice(props.index, 1);
            props.handleTextChange(props.mycontent);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}
