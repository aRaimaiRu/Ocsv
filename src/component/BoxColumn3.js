import React, { Component, useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import "./ChainListBox.css";
import { makeStyles } from "@material-ui/core/styles";
import { randomInt } from "../utils";
import ModalBody from "./ModalBody";
import { map } from "jquery";
export default function BoxColumn3({
  box3props: {
    content,
    setContent,
    selection1,
    selection2,
    selection3,
    setselection3,
  },
}) {
  const [modalInput, setModalInput] = useState({
    id: randomInt(),
    content: "",
    sub: selection2,
    contentType: "Content",
    Explain: "",
    outLink: "",
    Answer: [],
    Choice: [],
  });

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (selection1 != -1) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setModalInput({
      id: randomInt(),
      content: "",
      sub: selection2,
      contentType: "Content",
      Explain: "",
      outLink: "",
      Answer: [],
      Choice: [],
    });
    setOpen(false);
  };
  const handleModalInput = (value) => {
    setModalInput({ ...modalInput, contentType: value.target.value });
    console.log("BoxColumn3", value.target.value);
  };

  const createNewsub = (modalInput) => {
    console.log("modalInpit =", modalInput);
    const index = content.findIndex((obj) => modalInput.id == obj.id);
    setContent((prev) =>
      index == -1
        ? [...prev, modalInput]
        : prev.map((j) => (j.id == modalInput.id ? modalInput : j))
    );
    handleClose();
  };

  const deletesub = (select) => {
    setselection3(-1);
    setContent((prev) => prev.filter((k) => k.id != select));
  };
  useEffect(
    () =>
      setModalInput({
        id: randomInt(),
        content: "",
        sub: selection2,
        contentType: "Content",
        Explain: "",
        outLink: "",
        Answer: [],
        Choice: [],
      }),
    [selection2]
  );

  return (
    <div class="col-md-4  vertical-divider">
      <div class="mylistbox">
        {console.log("renderBox3", content)}
        {content
          .filter((j) => j.sub == selection2)
          .map((c, id) => (
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              className={selection3 == c.id ? "active" : ""}
              key={id}
            >
              <div
                style={{ width: "100%" }}
                onClick={() => {
                  setselection3(c.id);
                }}
              >
                {c.contentType}
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
        <button onClick={() => deletesub(selection3)}>-</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <ModalBody
            title="sub Topic"
            inputValue={modalInput.title}
            handleChange={handleModalInput}
            onClickFunction={() => createNewsub(modalInput)}
          >
            <select value={modalInput.contentType} onChange={handleModalInput}>
              <option value="Content">Content</option>
              <option value="หัวข้อคำถาม">หัวข้อคำถาม</option>
              <option value="Choiceแบบเลือกตอบ">Choiceแบบเลือกตอบ</option>
              <option value="Choiceตัวเลือกแบบมีลำดับ">
                Choiceตัวเลือกแบบมีลำดับ
              </option>
            </select>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
}
