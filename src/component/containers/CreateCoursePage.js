import React, { Component, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import "./CreateCoursePage.css";
import ContentSection from "../ContentSection";
import ChainListBox from "../ChainListBox";
import { randomInt } from "../../utils";

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
      content: "abcd",
      sub: 0,
      contentType: "Content",
      Explain: "",
      outLink: "",
      Answer: [],
      Choice: [],
    },
    {
      id: 1,
      content: "efgh",
      sub: 0,
      contentType: "Content",
      Explain: "",
      outLink: "",
      Answer: [],
      Choice: [],
    },
    {
      id: 2,
      content: "efgh",
      sub: 1,
      contentType: "Choiceแบบเลือกตอบ",
      Explain: "",
      outLink: "",
      Answer: [],
      Choice: [],
    },
    {
      id: 3,
      content: "efgh",
      sub: 1,
      contentType: "Choiceตัวเลือกแบบมีลำดับ",
      Explain: "",
      outLink: "",
      Answer: [],
      Choice: [],
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
        <Button variant="contained" color="primary" href="/CreateCoursePage">
          Save
        </Button>
        <Button variant="contained" color="primary" href="/CreateCoursePage">
          Download CSV
        </Button>
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
          <Button variant="contained" color="primary" href="/QuestionPage">
            รูปที่เคย Upload
          </Button>
          <Button variant="contained" color="primary" href="/CreateCoursePage">
            upload รูป
          </Button>
        </div>
      )}
    </>
  );
}
