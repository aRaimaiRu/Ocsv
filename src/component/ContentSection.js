import React, { Component, useState, useEffect } from "react";
import ChoicePage from "./containers/ChoicePage";
import EditorComponent from "./EditorComponent";
export default function ContentSection(props) {
  const { content, setContent } = props.content;
  ///filter content id and shallowCopy
  const mycontent = { ...content.filter((c) => c.id == props.selection3)[0] };

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

        {mycontent.Choice.map((c, index) => (
          <ChoicePage
            listLength={mycontent.Choice.length}
            index={index}
            mycontent={mycontent}
            handleTextChange={handleTextChange}
          />
        ))}
        {mycontent.contentType != "Content" &&
          mycontent.contentType != "หัวข้อคำถาม" && (
            <div
              onClick={() => {
                console.log(mycontent);
                if (
                  mycontent.contentType === "Choiceแบบเลือกตอบ" &&
                  mycontent.Answer.length >= 1
                ) {
                  mycontent.Choice.push("");
                  handleTextChange(mycontent);
                } else {
                  mycontent.Choice.push("");
                  mycontent.Answer.push(-1);
                  handleTextChange(mycontent);
                }
              }}
              style={{ display: "inline", margin: "auto" }}
            >
              Create
            </div>
          )}
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
            value={mycontent.Explain}
            onChange={(e) =>
              handleTextChange({ ...mycontent, Explain: e.target.value })
            }
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
            value={mycontent.outLink}
            onChange={(e) =>
              handleTextChange({ ...mycontent, outLink: e.target.value })
            }
          />
        </row>
        <EditorComponent />
      </div>
    </div>
  );
}
