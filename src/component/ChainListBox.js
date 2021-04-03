import React, { Component, useState, useEffect } from "react";
import "./ChainListBox.css";
import BoxColumn1 from "./BoxColumn1";

export default function ChainListBox({
  allProps: {
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
    selection3,
    setselection3,
  },
}) {
  const listBox1Props = {
    main,
    setMain,
    selection1,
    setselection1,
    selection2,
    setselection2,
    selection3,
    setselection3,
  };
  console.log(main);

  return (
    <div class="row row-flex mgt">
      <BoxColumn1 box1props={listBox1Props} />

      <div class="col-md-4  vertical-divider">
        <div class="mylistbox">
          {sub
            .filter((c) => c.main == selection1)
            .map((c, id) => (
              <div
                className={selection2 == c.id ? "active" : ""}
                onClick={() => {
                  setselection2(c.id);
                  setselection3(-1);
                }}
              >
                {" "}
                {c.title}{" "}
              </div>
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
                className={selection3 == c.id ? "active" : ""}
                onClick={() => {
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
