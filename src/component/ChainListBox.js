import React, { Component, useState, useEffect } from "react";
import { act } from "react-dom/test-utils";
import "./ChainListBox.css";

const randomInt = () => {
  console.log(Math.random() * 100000);
  return Math.round(Math.random() * 100000);
};

export default function ChainListBox() {
  const [mydata, setmyData] = useState({
    หัวข้อ1: {
      หัวข้อย่อย1: {
        content1: "Javascriptเจ๋งมาก",
        content2: "Javascriptเจ๋งมาก2",
        หัวข้อคำถาม: {},
        Choiceแบบเลือกตอบ: {},
        Choiceเลือกตอบแบบมีลำดับ: {},
      },
    },
    หัวข้อ2: {},
    หัวข้อ3: {},
    หัวข้อ4: {},
    หัวข้อ5: {},
    หัวข้อ6: {},
  });

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

  const list1 = [];
  for (var x in mydata) {
    list1.push(x);
  }
  const [selection1, setselection1] = useState(-1);
  const [selection2, setselection2] = useState(-1);

  const list2 = [];
  for (var x in mydata["หัวข้อ1"]) {
    list2.push(x);
  }

  const list3 = [];
  for (var x in mydata["หัวข้อ1"]["หัวข้อย่อยที่1"]) {
    //mydata.หัวข้อ1.หัวข้อย่อยที่2
    list3.push(x);
  }

  console.log(`list1 = ${list1}
              list2 = ${list2}
              list3 = ${list3}
              selection2 = ${selection2}
              mydata["หัวข้อ1"]["หัวข้อย่อย1"] = ${mydata["หัวข้อ1"]["หัวข้อย่อย1"]}
  `);
  useEffect(() => {
    // Update the document title using the browser API
  });

  return (
    <div class="row row-flex mgt">
      <div class="col-md-4  vertical-divider">
        <div class="mylistbox">
          {main.map((c, id) => (
            <div
              class={selection1 == c.id ? "active" : ""}
              onClick={() => {
                setselection1(c.id);
                setselection2(-1);
                console.log("Click", c);
              }}
            >
              {c.title}
            </div>
          ))}
          <button onClick={createMain}>+</button>
          <button>-</button>
        </div>
      </div>

      <div class="col-md-4  vertical-divider">
        <div class="mylistbox">
          {sub
            .filter((c) => c.main == selection1)
            .map((c, id) => (
              <div onClick={() => setselection2(c.id)}> {c.title} </div>
            ))}
        </div>
        <button>+</button>
        <button>-</button>
      </div>

      <div class="col-md-4  vertical-divider">
        <div class="mylistbox">
          {content
            .filter((c) => c.sub == selection2)
            .map((c) => (
              <div>{c.content}</div>
            ))}
        </div>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
}

{
  /* <div class="col-md-4  vertical-divider">
<label for="Topic">หัวข้อ1</label>
<input type="text" id="Topic" className="text-input" />
<div className="spaceevenly mgt">
  <h2>&lt;</h2> <h2>&gt;</h2> <h2>+</h2> <h2>-</h2>
</div>
</div> */
}
