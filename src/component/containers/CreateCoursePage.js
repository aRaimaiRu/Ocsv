import React, { Component, useState } from "react";
import Button from "@material-ui/core/Button";
import "./CreateCoursePage.css";
import ContentSection from "../ContentSection";
import ChainListBox from "../ChainListBox";
import { randomInt } from "../../utils";
export default function CreateCoursePage() {
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

  const [content, setContent] = useState([{ content: "abcd", sub: 0 }]);

  const [selection1, setselection1] = useState(-1);
  const [selection2, setselection2] = useState(-1);

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
        />
      </div>
      <div className="mgt">
        <label style={{ float: "left", marginBottom: "0" }}>Module</label>
        <input
          class="validate[required] text-input "
          type="text"
          name="Module"
          id="Module"
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
      <ContentSection />

      <div className="spaceevenly mgt">
        <Button variant="contained" color="primary" href="/QuestionPage">
          --------
        </Button>
        <Button variant="contained" color="primary" href="/CreateCoursePage">
          upload รูป
        </Button>
      </div>
    </>
  );
}
