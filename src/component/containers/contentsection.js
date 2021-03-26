import React, { Component } from "react";
import QuestionPage from "./QuestionPage";
import ChoicePage from "./ChoicePage";
export default class contentsection extends Component {
  constructor() {
    super();
    this.state = {
      contentType: [
        "content",
        "หัวข้อคำถาม",
        "choiceตัวเลือกแบบมีลำดับ",
        "choiceตัวเลือกแบบไม่มีลำดับ",
      ],
      children: [],
    };
    this.deleteElement = this.deleteElement.bind(this);
  }
  addElement = () => {
    if (this.state.contentType[3] === "choiceตัวเลือกแบบไม่มีลำดับ") {
      this.setState({
        contentType: this.state.contentType,
        children: [
          ...this.state.children,
          <QuestionPage
            k={this.state.children.length - 1}
            delete={() => this.deleteElement(this.state.children.length - 1)}
          />,
        ],
      });
    }
  };

  addElementChoice = () => {
    if (this.state.contentType[2] === "choiceตัวเลือกแบบมีลำดับ") {
      this.setState({
        contentType: this.state.contentType,
        children: [
          ...this.state.children,
          <ChoicePage
            k={this.state.children.length - 1}
            delete={() => this.deleteElement(this.state.children.length - 1)}
          />,
        ],
      });
    }
  };

  deleteElement = (index) => {
    if (this.state.contentType[3] === "choiceตัวเลือกแบบไม่มีลำดับ") {
      let array = [...this.state.children];
      array.splice(index, 1);

      this.setState({
        contentType: this.state.contentType,
        children: array,
      });
    }
  };

  render() {
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

          {this.state.children.map((c) => c)}
          <div onClick={this.addElement}>+</div>

          <row className="mgt">
            <label style={{ float: "left", marginBottom: "0" }}>
              อธิบายเฉลยเพิ่มเติม
            </label>
            <input
              className="text-input "
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
              className="text-input "
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
}
