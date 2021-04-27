import React from "react";
import Button from "@material-ui/core/Button";

import { createListRange } from "../../utils";

export default function ChoicePage(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ margin: "auto" }}>
        {props.mycontent.contentType == "Choiceตัวเลือกแบบมีลำดับ" ? (
          <select
            value={props.mycontent.Answer[props.index]}
            onChange={(e) => {
              props.mycontent.Answer[props.index] = e.target.value;
              props.handleTextChange(props.mycontent);
            }}
          >
            {createListRange(props.listLength).map((c) => (
              <option value={c}>
                {c}
                {}
              </option>
            ))}
          </select>
        ) : props.mycontent.contentType == "Choiceแบบเลือก" ? (
          <input
            type="radio"
            name="site_name"
            value={props.index}
            checked={props.index === props.mycontent.Answer[0]}
            onChange={() => {
              props.mycontent.Answer[0] = props.index;
              props.handleTextChange(props.mycontent);
            }}
            style={{ marginRight: "1em" }}
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

        <Button
          style={{ marginLeft: "1em", borderRadius: "10em" }}
          onClick={(e) => {
            e.preventDefault();
            props.mycontent.Choice.splice(props.index, 1);
            props.mycontent.Answer.splice(props.index, 1);
            props.handleTextChange(props.mycontent);
          }}
        >
          -
        </Button>
      </div>
    </div>
  );
}
