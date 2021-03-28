import React, { Component, useState, useEffect } from "react";
import { act } from "react-dom/test-utils";
import "./ChainListBox.css";
import { randomInt } from "../utils";

export default function ChainListBox(props) {
  const {
    main,
    setMain,
    createMain,
    sub,
    setSub,
    content,
    setContent,
    selection1,
    setselection1,
    selection2,
    setselection2,
  } = props.allProps;

  console.log(props, "!!!!");

  return (
    <div class="row row-flex mgt">
      <div class="col-md-4  vertical-divider">
        <div class="mylistbox">
          {main.map((c, id) => (
            <div
              class={selection1 == c.id ? "active" : ""}
              onClick={() => {
                setselection1(c.id);
                setselection2(-1);
                console.log("Click", c);
              }}
            >
              {c.title}
            </div>
          ))}
          <button onClick={createMain}>+</button>
          <button>-</button>
        </div>
      </div>

      <div class="col-md-4  vertical-divider">
        <div class="mylistbox">
          {sub
            .filter((c) => c.main == selection1)
            .map((c, id) => (
              <div onClick={() => setselection2(c.id)}> {c.title} </div>
            ))}
        </div>
        <button>+</button>
        <button>-</button>
      </div>

      <div class="col-md-4  vertical-divider">
        <div class="mylistbox">
          {content
            .filter((c) => c.sub == selection2)
            .map((c) => (
              <div>{c.content}</div>
            ))}
        </div>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
}

{
  /* <div class="col-md-4  vertical-divider">
<label for="Topic">หัวข้อ1</label>
<input type="text" id="Topic" className="text-input" />
<div className="spaceevenly mgt">
  <h2>&lt;</h2> <h2>&gt;</h2> <h2>+</h2> <h2>-</h2>
</div>
</div> */
}
