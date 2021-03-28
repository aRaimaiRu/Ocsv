import React, { Component, useState } from "react";
import ChoicePage from "./containers/ChoicePage";
export default function ContentSection() {
  const [ChoiceList, setChoiceList] = useState([{ answer: 0, content: "" }]);
  const CreateNewChoice = () => {
    setChoiceList([...ChoiceList, { answer: 0, content: "" }]);
  };
  const setNewContent = (content, n) => {
    setChoiceList(
      ChoiceList.map((c, index) => {
        if (index == n) return { ...c, content: content };
        else return c;
      })
    );
  };

  const DeleteIndexChoice = (n) => {
    console.log("delte index", n);
    console.log(ChoiceList);
    setChoiceList(ChoiceList.filter((c, i) => i != n));
  };

  return (
    <div className="container" style={{ borderStyle: "solid" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          type="text"
          style={{ width: "20em", margin: "auto" }}
          placeholder="content"
        ></input>
        <textarea
          style={{ width: "100%" }}
          placeholder="html editor"
        ></textarea>
        <div onClick={CreateNewChoice}>Create</div>
        {ChoiceList.map((c, index) => (
          <ChoicePage
            listLength={ChoiceList.length}
            DeleteIndexChoice={DeleteIndexChoice}
            index={index}
            setNewContent={setNewContent}
            content={c.content}
          />
        ))}
        <row className="mgt">
          <label style={{ float: "left", marginBottom: "0" }}>
            อธิบายเฉลยเพิ่มเติม
          </label>
          <input
            class="text-input "
            type="text"
            name="Explain"
            id="Explain"
            style={{ float: "left" }}
          />
        </row>
        <row className="mgt">
          <label style={{ float: "left", marginBottom: "0" }}>
            Link เมืองนอก
          </label>
          <input
            class="text-input "
            type="text"
            name="AditionalLink"
            id="AditionalLink"
            style={{ float: "left" }}
          />
        </row>
      </div>
    </div>
  );
}
