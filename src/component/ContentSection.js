import React, { Component, useState, useEffect } from "react";
import ChoicePage from "./containers/ChoicePage";
import EditorComponent2 from "./EditorComponent2";
import Button from "@material-ui/core/Button";
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
    <div
      className="container"
      style={{ borderStyle: "solid", borderColor: "#FF0000", marginTop: "1em" }}
    >
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
        {content.map(
          (c) =>
            c.id == props.selection3 && (
              <EditorComponent2
                mycontent={mycontent}
                handleTextChange={handleTextChange}
              />
            )
        )}

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
            <Button
              onClick={() => {
                if (
                  mycontent.contentType === "Choiceแบบเลือกตอบ" &&
                  mycontent.Answer.length >= 1
                ) {
                  mycontent.Choice.push("");
                  handleTextChange(mycontent);
                } else {
                  mycontent.Choice.push("");
                  mycontent.Answer.push(0);
                  handleTextChange(mycontent);
                }
              }}
              style={{
                display: "inline",
                margin: "auto",
                borderRadius: "10em",
              }}
            >
              +
            </Button>
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
      </div>
    </div>
  );
}
