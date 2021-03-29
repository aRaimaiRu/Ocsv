import React, { Component, useState, useEffect } from "react";

import "./ChainListBox.css";

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
    setselection3,
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
              <div
                onClick={() => {
                  console.log(c.id);
                  setselection3(c.id);
                }}
              >
                {c.contentType}
              </div>
            ))}
        </div>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
}
