import React, { Component, useState, useEffect } from "react";
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
  ///filter content id and shallowCopy
  const mycontent = { ...content.filter((c) => c.id == props.selection3)[0] };
  console.log(mycontent);

  const handleTextChange = (newcontent) => {
    setContent((prev) =>
      prev.map((c) => {
        return c.id == newcontent.id ? newcontent : c;
      })
    );
  };

  return (
    <div className="container" style={{ borderStyle: "solid" }}>
      <div
        style={{
          fontSize: "2em",

          textAlign: "center",
        }}
      >
        {mycontent.contentType}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <textarea
          style={{ width: "100%" }}
          value={mycontent.content}
          onChange={(e) =>
            handleTextChange({ ...mycontent, content: e.target.value })
          }
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
    </div>
  );
}
