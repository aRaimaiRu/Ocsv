import React, { Component, useState, useEffect } from "react";
import "./ChainListBox.css";
import BoxColumn1 from "./BoxColumn1";
import BoxColumn2 from "./BoxColumn2";
import BoxColumn3 from "./BoxColumn3";
export default function ChainListBox({
  allProps: {
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
  },
}) {
  const listBox1Props = {
    main,
    setMain,
    selection1,
    setselection1,
    selection2,
    setselection2,
    selection3,
    setselection3,
  };
  console.log(main);

  const listBox2Props = {
    sub,
    setSub,
    selection1,
    selection2,
    setselection1,
    setselection2,
    setselection3,
  };

  const listBox3Props = {
    content,
    setContent,
    selection1,
    selection2,
    selection3,
    setselection3,
  };

  return (
    <div class="row row-flex mgt">
      <BoxColumn1 box1props={listBox1Props} />

      <BoxColumn2 box2props={listBox2Props} />

      <BoxColumn3 box3props={listBox3Props} />
    </div>
  );
}
