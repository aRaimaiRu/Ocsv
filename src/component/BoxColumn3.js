import React, { Component, useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import "./ChainListBox.css";
import { makeStyles } from "@material-ui/core/styles";
import { randomInt } from "../utils";
import ModalBody from "./ModalBody";
import { map } from "jquery";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import Button from "@material-ui/core/Button";
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
    Picture: [],
  });

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (selection1 != -1 && selection2 != -1) {
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
      Picture: [],
    });
    setOpen(false);
  };
  const handleModalInput = (value) => {
    setModalInput({ ...modalInput, contentType: value.target.value });
  };

  const createNewsub = (modalInput) => {
    const index = content.findIndex((obj) => modalInput.id == obj.id);
    modalInput = { ...modalInput, Answer: [], Choice: [] };
    console.log("createNewsub", modalInput);
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
        Picture: [],
      }),
    [selection2]
  );
  console.log("content =", content);

  return (
    <div class="col-md-4  ">
      <div class="mylistbox">
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
              <Button
                onClick={() => {
                  setModalInput(c);
                  handleOpen();
                }}
              >
                Edit
              </Button>
            </div>
          ))}

        <Button onClick={handleOpen}>+</Button>
        <Button onClick={() => deletesub(selection3)}>-</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <ModalBody
            title="Content"
            inputValue={modalInput.title}
            handleChange={handleModalInput}
            onClickFunction={() => createNewsub(modalInput)}
          >
            <select value={modalInput.contentType} onChange={handleModalInput}>
              <option value="Content">Content</option>
              <option value="หัวข้อคำถาม">หัวข้อคำถาม</option>
              <option value="Choiceแบบเลือก">Choiceแบบเลือก</option>
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
