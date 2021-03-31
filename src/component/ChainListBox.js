import React, { Component, useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import "./ChainListBox.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
export default function ChainListBox(props) {
  ////style
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render

  ///style
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
    selection3,
    setselection3,
  } = props.allProps;

  console.log(props, "!!!!");
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalbody = (
    <div id="modalDiv" className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );

  return (
    <div class="row row-flex mgt">
      <div class="col-md-4  vertical-divider">
        <div class="mylistbox">
          {main.map((c, id) => (
            <div
              className={selection1 == c.id ? "active" : ""}
              onClick={() => {
                setselection1(c.id);
                setselection2(-1);
                setselection3(-1);
              }}
            >
              {c.title}
            </div>
          ))}
          <button onClick={handleOpen}>+</button>
          <button>-</button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {modalbody}
          </Modal>
        </div>
      </div>

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
