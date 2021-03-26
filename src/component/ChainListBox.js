import React, { useState } from "react";

import "./ChainListBox.css";

const randomInt = () => {
  console.log(Math.random() * 100000);
  return Math.round(Math.random() * 100000);
};

export default function ChainListBox() {
  const [data, Mydata] = useState([
    {
      ระดับชั้น: "วิทยาการคำนวณ ม.1",
      Module: "วิทยากรคอมพิวเตอร์",
      หัวข้อ: "นามประธรรมกับการแก้ปัญหา",
      หัวข้อย่อย: "แนวคิดเชิงนามธรรม",
      ข้อมูลในหน้า:
        "1การคัดเลือกคุณลักษณะที่จำเป็นต่อการแก้ปัญหา คือการพิจารณาปัญหาที่อาจประกอบไปด้วยรายละเอียดจำนวนมาก ทั้งที่จำเป็นและไม่จำเป็นต่อการแก้ปัญหา ดังนั้นในการแก้ปัญหานักเรียนควรเลือกเฉพาะรายละเอียดที่จำเป็นเท่านั้น ",
      ข้อมูลchoice: [],
      indexของเฉลย: [],
      ประเภท: "content",
      รูปภาพ: "",
      ตัวเลือก: "",
      อธิบายเฉลยเพิ่มเติม: "",
      ลิ้งค์เว็บไซต์ต่างประเทศ: "",
    },
    {
      ระดับชั้น: "วิทยาการคำนวณ ม.1",
      Module: "วิทยากรคอมพิวเตอร์",
      หัวข้อ: "นามประธรรมกับการแก้ปัญหา",
      หัวข้อย่อย: "แนวคิดเชิงนามธรรม",
      ข้อมูลในหน้า:
        "2การคัดเลือกคุณลักษณะที่จำเป็นต่อการแก้ปัญหา คือการพิจารณาปัญหาที่อาจประกอบไปด้วยรายละเอียดจำนวนมาก ทั้งที่จำเป็นและไม่จำเป็นต่อการแก้ปัญหา ดังนั้นในการแก้ปัญหานักเรียนควรเลือกเฉพาะรายละเอียดที่จำเป็นเท่านั้น ",
      ข้อมูลchoice: [],
      indexของเฉลย: [],
      ประเภท: "content",
      รูปภาพ: "",
      ตัวเลือก: "",
      อธิบายเฉลยเพิ่มเติม: "",
      ลิ้งค์เว็บไซต์ต่างประเทศ: "",
    },
    {
      ระดับชั้น: "วิทยาการคำนวณ ม.1",
      Module: "วิทยากรคอมพิวเตอร์",
      หัวข้อ: "นามประธรรมกับการแก้ปัญหา3",
      หัวข้อย่อย: "แนวคิดเชิงนามธรรม2",
      ข้อมูลในหน้า: "test",
      ข้อมูลchoice: [],
      indexของเฉลย: [],
      ประเภท: "content",
      รูปภาพ: "",
      ตัวเลือก: "",
      อธิบายเฉลยเพิ่มเติม: "",
      ลิ้งค์เว็บไซต์ต่างประเทศ: "",
    },
    {
      ระดับชั้น: "วิทยาการคำนวณ ม.1",
      Module: "วิทยากรคอมพิวเตอร์",
      หัวข้อ: "นามประธรรมกับการแก้ปัญหา2",
      หัวข้อย่อย: "แนวคิดเชิงนามธรรม2",
      ข้อมูลในหน้า: "JAvascript เจ็งมาก ",
      ข้อมูลchoice: [],
      indexของเฉลย: [],
      ประเภท: "content",
      รูปภาพ: "",
      ตัวเลือก: "",
      อธิบายเฉลยเพิ่มเติม: "",
      ลิ้งค์เว็บไซต์ต่างประเทศ: "",
    },
  ]);

  // const createMain = () => {
  //   setMain([...main, { id: randomInt(), title: "..." }]);
  // };

  const [selection1, setselection1] = useState(-1);
  const [selection2, setselection2] = useState(-1);
  const [selection3, setselection3] = useState(-1);

  return (
    <div class="row row-flex mgt">
      <div class="col-md-4  vertical-divider">
        <div class="mylistbox">
          {data.map((dataobj) => (
            <div
              className={selection1 == dataobj.หัวข้อ ? "active" : ""}
              onClick={() => {
                setselection1(dataobj.หัวข้อ);
                setselection2(dataobj.หัวข้อ);
                setselection3(dataobj.หัวข้อ);
              }}
            >
              {dataobj.หัวข้อ}
            </div>
          ))}
          <button>+</button>
          <button>-</button>
        </div>
      </div>

      <div class="col-md-4  vertical-divider">
        <div class="mylistbox">
          {data
            .filter((dataobj) => dataobj.หัวข้อ == selection1)
            .map((dataobj) => (
              <div
                className={selection2 == dataobj.หัวข้อย่อย ? "active" : ""}
                onClick={() => {
                  setselection2(dataobj.หัวข้อย่อย);
                  setselection3(-1);
                }}
              >
                {dataobj.หัวข้อย่อย}
              </div>
            ))}
        </div>
        <button>+</button>
        <button>-</button>
      </div>

      <div class="col-md-4  vertical-divider">
        <div class="mylistbox">
          {data
            .filter(
              (dataobj) =>
                (dataobj.หัวข้อ == selection1) &
                (dataobj.หัวข้อย่อย == selection2)
            )
            .map((dataobj) => (
              <div
                className={selection3 == dataobj.ข้อมูลในหน้า ? "active" : ""}
                onClick={() => setselection3(dataobj.ข้อมูลในหน้า)}
              >
                {dataobj.ประเภท + " " + dataobj.ข้อมูลในหน้า.substring(0, 11)}
              </div>
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
