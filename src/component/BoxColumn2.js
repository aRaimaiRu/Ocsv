import React, { Component, useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import "./ChainListBox.css";
import { makeStyles } from "@material-ui/core/styles";
import { randomInt } from "../utils";
import ModalBody from "./ModalBody";
import { map } from "jquery";
export default function BoxColumn2({
  box2props: {
    sub,
    setSub,
    selection1,
    selection2,
    setselection1,
    setselection2,
    setselection3,
    paper,
  },
}) {
  const [modalInput, setModalInput] = useState({
    id: randomInt(),
    title: "",
    main: selection1,
  });

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (selection1 != -1) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setModalInput({ id: randomInt(), title: "", main: selection1 });
    setOpen(false);
  };
  const handleModalInput = (value) => {
    //console.log(modalInput);
    setModalInput({ ...modalInput, title: value.target.value });
  };

  const createNewsub = (modalInput) => {
    const index = sub.findIndex((obj) => modalInput.id == obj.id);
    setSub((prev) =>
      index == -1
        ? [...prev, modalInput]
        : prev.map((j) => (j.id == modalInput.id ? modalInput : j))
    );
    handleClose();
  };

  const deletesub = (select) => {
    setSub((prev) => prev.filter((k) => k.id != select));
    setselection2(-1);
    setselection3(-1);
  };
  useEffect(
    () =>
      setModalInput({
        id: randomInt(),
        title: "",
        main: selection1,
      }),
    [open]
  );

  return (
    <div class="col-md-4  vertical-divider">
      <div class="mylistbox">
        {sub
          .filter((j) => j.main == selection1)
          .map((c, id) => (
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              className={selection2 == c.id ? "active" : ""}
            >
              <div
                style={{ width: "100%" }}
                onClick={() => {
                  setselection2(c.id);
                  setselection3(-1);
                }}
              >
                {c.title}
              </div>
              <button
                onClick={() => {
                  handleOpen();
                  setModalInput(c);
                }}
              >
                Edit
              </button>
            </div>
          ))}

        <button onClick={handleOpen}>+</button>
        <button onClick={() => deletesub(selection2)}>-</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <ModalBody
            title="sub Topic"
            onClickFunction={() => createNewsub(modalInput)}
          >
            <input value={modalInput.title} onChange={handleModalInput}></input>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
}
