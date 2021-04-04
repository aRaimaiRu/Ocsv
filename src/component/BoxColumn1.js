import React, { Component, useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import "./ChainListBox.css";
import { makeStyles } from "@material-ui/core/styles";
import { randomInt } from "../utils";
import ModalBody from "./ModalBody";
import { map } from "jquery";
export default function BoxColumn1({
  box1props: {
    main,
    setMain,
    selection1,
    setselection1,
    setselection2,
    setselection3,
    paper,
  },
}) {
  const [modalInput, setModalInput] = useState({ id: randomInt(), title: "" });
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setModalInput({ id: randomInt(), title: "" });
    setOpen(false);
  };
  const handleModalInput = (value) => {
    console.log(modalInput);
    setModalInput({ ...modalInput, title: value.target.value });
  };

  const createNewMain = (modalInput) => {
    const index = main.findIndex((obj) => modalInput.id == obj.id);
    setMain((prev) =>
      index == -1
        ? [...prev, modalInput]
        : prev.map((j) => (j.id == modalInput.id ? modalInput : j))
    );
    handleClose();
  };

  const deleteMain = (select) => {
    setMain((prev) => prev.filter((k) => k.id != select));
    setselection1(-1);
    setselection2(-1);
    setselection3(-1);
  };

  return (
    <div class="col-md-4  vertical-divider">
      <div class="mylistbox">
        {main.map((c, id) => (
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            className={selection1 == c.id ? "active" : ""}
          >
            <div
              style={{ width: "100%" }}
              onClick={() => {
                setselection1(c.id);
                setselection2(-1);
                setselection3(-1);
              }}
            >
              {c.title}
            </div>
            <button
              onClick={() => {
                setModalInput(c);
                handleOpen();
              }}
            >
              Edit
            </button>
          </div>
        ))}
        <button onClick={handleOpen}>+</button>
        <button onClick={() => deleteMain(selection1)}>-</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <ModalBody
            title="Main Topic"
            onClickFunction={() => createNewMain(modalInput)}
          >
            <input value={modalInput.title} onChange={handleModalInput}></input>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
}
