import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  MyModalBox: {
    top: "52%",
    left: "49%",
    transform: "translate(-52%, -49%)",
    position: "absolute",

    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: "auto",
  },
}));
export default function ModalBody(props) {
  const classes = useStyles();
  return (
    <div id="modalDiv" className={classes.MyModalBox}>
      <h2 id="simple-modal-title">{props.title}</h2>
      {props.children}
      {typeof props.onClickFunction != "undefined" ? (
        <Button onClick={props.onClickFunction}>Save</Button>
      ) : (
        ""
      )}
    </div>
  );
}
