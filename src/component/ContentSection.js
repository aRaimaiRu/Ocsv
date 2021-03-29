import React, { Component, useState } from "react";
import ChoicePage from "./containers/ChoicePage";
export default function ContentSection(props) {
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
  const { content, setContent } = props.content;
  console.log("ContentSection Start", content);

  const rendercontentType = (content, selection3) => {
    if (typeof content == "undefined" || selection3 == -1) {
      return "Please Select ContentType";
    } else {
      return content.filter((c) => c.id == selection3)[0].contentType;
    }
  };

  return (
    <div className="container" style={{ borderStyle: "solid" }}>
      <div
        style={{
          fontSize: "2em",

          textAlign: "center",
        }}
      >
        {rendercontentType(content, props.selection3)}
      </div>
      {props.selection3 != -1 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <textarea
            style={{ width: "100%" }}
            placeholder="html editor"
          ></textarea>

          {ChoiceList.map((c, index) => (
            <ChoicePage
              listLength={ChoiceList.length}
              DeleteIndexChoice={DeleteIndexChoice}
              index={index}
              setNewContent={setNewContent}
              content={c.content}
            />
          ))}
          <div
            onClick={CreateNewChoice}
            style={{ display: "inline", margin: "auto" }}
          >
            Create
          </div>
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
      )}
    </div>
  );
}
