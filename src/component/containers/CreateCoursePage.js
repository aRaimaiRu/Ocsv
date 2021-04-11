import React, { Component, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import "./CreateCoursePage.css";
import ContentSection from "../ContentSection";
import ChainListBox from "../ChainListBox";
import { randomInt } from "../../utils";
import ModalBody from "../ModalBody";
import Modal from "@material-ui/core/Modal";
export default function CreateCoursePage() {
  const [grade, setGrade] = useState("");
  const [module, setModule] = useState("");
  const [main, setMain] = useState([
    { id: 0, title: "main1" },
    { id: 1, title: "main2" },
  ]);

  const createMain = () => {
    setMain([...main, { id: randomInt(), title: "..." }]);
  };

  const [sub, setSub] = useState([
    { main: 0, title: "sub1", id: 0 },
    { main: 0, title: "sub2", id: 1 },
    { main: 1, title: "sub3", id: 2 },
  ]);

  const [content, setContent] = useState([
    {
      id: 0,
      content: "",
      sub: 0,
      contentType: "Content",
      Explain: "",
      outLink: "",
      Answer: [],
      Choice: [],
      Picture: [],
    },
    {
      id: 1,
      content: "",
      sub: 0,
      contentType: "หัวข้อคำถาม",
      Explain: "",
      outLink: "",
      Answer: [],
      Choice: [],
      Picture: [],
    },
    {
      id: 2,
      content: "",
      sub: 1,
      contentType: "Choiceแบบเลือกตอบ",
      Explain: "",
      outLink: "",
      Answer: [],
      Choice: [],
      Picture: [],
    },
    {
      id: 3,
      content: "",
      sub: 1,
      contentType: "Choiceตัวเลือกแบบมีลำดับ",
      Explain: "",
      outLink: "",
      Answer: [],
      Choice: [],
      Picture: [],
    },
  ]);

  const [selection1, setselection1] = useState(-1);
  const [selection2, setselection2] = useState(-1);
  const [selection3, setselection3] = useState(-1);

  const allProps = {
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
  };

  const [open, setOpen] = useState(false);
  const [showPicture, setShowPicture] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleShowPicture = () => {
    setShowPicture(true);
  };

  const handleNotShowPicture = () => {
    setShowPicture(false);
  };

  const [bufferPicture, setBufferPicture] = useState("");
  const handleBufferPicture = (v) => {
    setBufferPicture(v.target.value);
  };

  const addNewPicture = (p) => {
    setContent((prev) =>
      prev.map((obj) =>
        obj.id != selection3 ? obj : { ...obj, Picture: [...obj.Picture, p] }
      )
    );
  };
  const handleDeletePicture = (url) => {
    setContent((prev) =>
      prev.map((obj) =>
        obj.id != selection3
          ? obj
          : { ...obj, Picture: obj.Picture.filter((f) => f != url) }
      )
    );
  };

  return (
    <>
      <div className="mgt">
        <label style={{ float: "left", marginBottom: "0" }}>ระดับชั้น</label>
        <input
          class="validate[required] text-input "
          type="text"
          name="Grade"
          id="Grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
      </div>
      <div className="mgt">
        <label style={{ float: "left", marginBottom: "0" }}>Module</label>
        <input
          class="validate[required] text-input "
          type="text"
          name="Module"
          id="Module"
          value={module}
          onChange={(e) => setModule(e.target.value)}
        />
      </div>

      <div className="spaceevenly mgt">
        <Button>Save</Button>
        <Button>Download CSV</Button>
      </div>

      <ChainListBox allProps={allProps} />
      {selection3 != -1 && (
        <ContentSection
          content={{ content, setContent }}
          selection3={selection3}
        />
      )}

      {selection3 != -1 && (
        <div className="spaceevenly mgt">
          <Button
            onClick={() => {
              handleShowPicture();
              handleOpen();
            }}
          >
            รูปที่เคย Upload
          </Button>
          <Button
            onClick={() => {
              handleNotShowPicture();
              handleOpen();
            }}
          >
            upload รูป
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {showPicture === false ? (
              <ModalBody
                title="Upload รูป"
                onClickFunction={() => {
                  addNewPicture(bufferPicture);
                  handleClose();
                }}
              >
                <input
                  value={bufferPicture}
                  onChange={handleBufferPicture}
                ></input>
              </ModalBody>
            ) : (
              <ModalBody title="รูปที่เคย Upload">
                <div className="tiles">
                  {content
                    .find((f) => f.id === selection3)
                    .Picture.map((c) => (
                      <div style={{ marginTop: "1em" }}>
                        <button
                          style={{
                            position: "absolute",
                            zIndex: "1",
                            right: "0px",
                          }}
                          onClick={() => {
                            handleDeletePicture(c);
                          }}
                        >
                          <span>&times;</span>
                        </button>
                        <img src={c} alt={c} style={{ width: "800px" }} />
                      </div>
                    ))}
                </div>
              </ModalBody>
            )}
          </Modal>
        </div>
      )}
    </>
  );
}
