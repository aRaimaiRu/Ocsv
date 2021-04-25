import React, { Component, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import "./CreateCoursePage.css";
import ContentSection from "../ContentSection";
import ChainListBox from "../ChainListBox";
import { randomInt } from "../../utils";
import ModalBody from "../ModalBody";
import Modal from "@material-ui/core/Modal";
import { useLocation } from "react-router-dom";
import { CSVLink, CSVDownload } from "react-csv";
import ChoicePage from "./ChoicePage";
export default function CreateCoursePage() {
  const location = useLocation();
  console.log("location = ", location);
  const [grade, setGrade] = useState(location.state.grade);
  const [module, setModule] = useState(location.state.module);
  const [main, setMain] = useState(location.state.mainTopic);

  const createMain = () => {
    setMain([...main, { id: randomInt(), title: "..." }]);
  };

  const [sub, setSub] = useState(location.state.subTopic);

  const [content, setContent] = useState(location.state.content);

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
      prev.map((obj) => (obj.id != selection3 ? obj : { ...obj, Picture: [p] }))
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

  const handleSave = async () => {
    console.log(location.state.AuthorID);
    if (!location.pathname.includes("edit")) {
      fetch("http://localhost:3001/api/v1/allcontent/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": location.state.token,
        },
        body: JSON.stringify({
          module,
          grade,
          mainTopic: main,
          subTopic: sub,
          content,
        }),
      })
        .then((data) => data.json())
        .then((data) => {
          console.log("post data =", data);
        });
    } else if (location.pathname.includes("edit")) {
      let editBody = JSON.stringify({
        _id: location.state._id,
        module,
        grade,
        mainTopic: main,
        subTopic: sub,
        content,
      });
      console.log(location.state.AuthorID);
      fetch("http://localhost:3001/api/v1/allcontent/edit", {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": location.state.token,
          Accept: "application/json",
        },
        body: editBody,
      }).then((data) => data.json());
    }
  };
  const header = [
    "ระดับชั้น",
    "module",
    "หัวข้อ",
    "หัวข้อย่อย(optional)",
    "ข้อมูลในหน้า",
    "ข้อมูล choice",
    "Index ของเฉลย",
    "ประเภท(content,หัวข้อคำถาม,choiceตัวเลือกแบบมีลำดับ,choiceตัวเลือกแบบไม่มีลำดับ)",
    "รูปภาพ (ช่องรูปภาพ ขอเป็น ให้ upload รูปเข้าระบบเรา แล้วเป็น url รูปภาพครับ แต่ค่อยทำพรุ้งนี้ได้)",
    "ตัวเลือก",
    "อธิบายเฉลยเพิ่มเติม",
    "ลิ้งค์เว็บไซต์ต่างประเทศ",
  ];
  const [RealAllBuffer, setRealAllBuffer] = useState([]);
  // useEffect(() => {
  //   allBuffer = createDataForCSV();
  // }, [grade, module, main, sub, content]);

  const createDataForCSV = () => {
    var lineBuffer = [];
    var allBuffer = [];
    allBuffer.push(header);
    for (var i = 0; i < main.length; i++) {
      var currentMain = main[i];
      var currentSubArray = sub.filter((s) => s.main === currentMain.id);
      if (i === 0) {
        lineBuffer.push(grade, module, currentMain.title);
      } else {
        lineBuffer.push("", "", currentMain.title);
      }
      for (var j = 0; j < currentSubArray.length; j++) {
        var currentSub = currentSubArray[j];
        var currentContentArray = content.filter(
          (c) => c.sub === currentSub.id
        );
        if (j !== 0) {
          lineBuffer.push("", "", "", currentSub.title);
        } else if (j === 0) {
          lineBuffer.push(currentSub.title); //push from main
        }
        for (var k = 0; k < currentContentArray.length; k++) {
          var currentContent = currentContentArray[k];
          if (k !== 0) {
            lineBuffer.push("", "", "", "");
          }
          lineBuffer.push(
            currentContent.content,
            currentContent.Choice.length === 0 ? "" : currentContent.Choice,
            currentContent.Answer.length === 0 ? "" : currentContent.Answer,
            currentContent.contentType,
            currentContent.Picture.length > 0 ? currentContent.Picture[0] : "",
            "",
            currentContent.Explain,
            currentContent.outLink
          );
          allBuffer.push(lineBuffer);
          lineBuffer = [];
        }
      }
    }
    setRealAllBuffer(allBuffer);
    console.log("allBuffer =", allBuffer);
  };

  return (
    <>
      <div className="mgt">
        <label style={{ float: "left", marginBottom: "0" }}>ระดับชั้น</label>
        <input
          className="validate[required] text-input "
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
          className="validate[required] text-input "
          type="text"
          name="Module"
          id="Module"
          value={module}
          onChange={(e) => setModule(e.target.value)}
        />
      </div>

      <div className="spaceevenly mgt">
        <Button onClick={handleSave}>Save</Button>

        <CSVLink
          data={RealAllBuffer}
          asyncOnClick={true}
          onClick={async (event, done) => {
            await createDataForCSV();
            done();
          }}
        >
          <Button>Download CSV</Button>
        </CSVLink>
      </div>

      <ChainListBox allProps={allProps} />
      {selection3 != -1 && (
        //////////////////////////////// ContrntSection ////////////////////////////////////
        <ContentSection
          content={{ content, setContent }}
          selection3={selection3}
        />
        //////////////////////////////// ContrntSection ////////////////////////////////////
      )}

      {selection3 != -1 && (
        /////////////////////////// PictureButton ///////////////////////////////
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
        /////////////////////////// PictureButton ///////////////////////////////
      )}
    </>
  );
}
