import React, { Component, useState } from "react";
import ChoicePage from "./containers/ChoicePage";
export default function ContentSection() {
  return (
    <div className="container" style={{ borderStyle: "solid" }}>
      <form
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
        <div>Create</div>
        <ChoicePage />
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
      </form>
    </div>
  );
}
