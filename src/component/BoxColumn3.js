import React, { Component, useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import "./ChainListBox.css";
import { makeStyles } from "@material-ui/core/styles";
import { randomInt } from "../utils";
import ModalBody from "./ModalBody";
import { map } from "jquery";
export default function BoxColumn1({
  box3props: {
    main,
    setMain,
    selection1,
    setselection1,
    setselection2,
    setselection3,
    paper,
  },
}) {
  

  return (
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
  );
}
