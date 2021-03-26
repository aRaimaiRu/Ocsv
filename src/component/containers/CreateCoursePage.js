import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./CreateCoursePage.css";
import Contentsection from "./contentsection";
import ChainListBox from "../ChainListBox";

export default class CreateCoursePage extends Component {
  constructor() {
    super();
    // this.state = {
    //   data: [
    //     {
    //       ระดับชั้น: "วิทยาการคำนวณ ม.1",
    //       Module: "วิทยากรคอมพิวเตอร์",
    //       หัวข้อ: "นามประธรรมกับการแก้ปัญหา",
    //       หัวข้อย่อย: "แนวคิดเชิงนามธรรม",
    //       ข้อมูลในหน้า:
    //         "1การคัดเลือกคุณลักษณะที่จำเป็นต่อการแก้ปัญหา คือการพิจารณาปัญหาที่อาจประกอบไปด้วยรายละเอียดจำนวนมาก ทั้งที่จำเป็นและไม่จำเป็นต่อการแก้ปัญหา ดังนั้นในการแก้ปัญหานักเรียนควรเลือกเฉพาะรายละเอียดที่จำเป็นเท่านั้น ",
    //       ข้อมูลchoice: [],
    //       indexของเฉลย: [],
    //       ประเภท: "content",
    //       รูปภาพ: "",
    //       ตัวเลือก: "",
    //       อธิบายเฉลยเพิ่มเติม: "",
    //       ลิ้งค์เว็บไซต์ต่างประเทศ: "",
    //     },
    //     {
    //       ระดับชั้น: "วิทยาการคำนวณ ม.1",
    //       Module: "วิทยากรคอมพิวเตอร์",
    //       หัวข้อ: "นามประธรรมกับการแก้ปัญหา",
    //       หัวข้อย่อย: "แนวคิดเชิงนามธรรม",
    //       ข้อมูลในหน้า:
    //         "2การคัดเลือกคุณลักษณะที่จำเป็นต่อการแก้ปัญหา คือการพิจารณาปัญหาที่อาจประกอบไปด้วยรายละเอียดจำนวนมาก ทั้งที่จำเป็นและไม่จำเป็นต่อการแก้ปัญหา ดังนั้นในการแก้ปัญหานักเรียนควรเลือกเฉพาะรายละเอียดที่จำเป็นเท่านั้น ",
    //       ข้อมูลchoice: [],
    //       indexของเฉลย: [],
    //       ประเภท: "content",
    //       รูปภาพ: "",
    //       ตัวเลือก: "",
    //       อธิบายเฉลยเพิ่มเติม: "",
    //       ลิ้งค์เว็บไซต์ต่างประเทศ: "",
    //     },
    //     {
    //       ระดับชั้น: "วิทยาการคำนวณ ม.1",
    //       Module: "วิทยากรคอมพิวเตอร์",
    //       หัวข้อ: "นามประธรรมกับการแก้ปัญหา3",
    //       หัวข้อย่อย: "แนวคิดเชิงนามธรรม2",
    //       ข้อมูลในหน้า: "test",
    //       ข้อมูลchoice: [],
    //       indexของเฉลย: [],
    //       ประเภท: "content",
    //       รูปภาพ: "",
    //       ตัวเลือก: "",
    //       อธิบายเฉลยเพิ่มเติม: "",
    //       ลิ้งค์เว็บไซต์ต่างประเทศ: "",
    //     },
    //     {
    //       ระดับชั้น: "วิทยาการคำนวณ ม.1",
    //       Module: "วิทยากรคอมพิวเตอร์",
    //       หัวข้อ: "นามประธรรมกับการแก้ปัญหา2",
    //       หัวข้อย่อย: "แนวคิดเชิงนามธรรม2",
    //       ข้อมูลในหน้า: "JAvascript เจ็งมาก ",
    //       ข้อมูลchoice: [],
    //       indexของเฉลย: [],
    //       ประเภท: "content",
    //       รูปภาพ: "",
    //       ตัวเลือก: "",
    //       อธิบายเฉลยเพิ่มเติม: "",
    //       ลิ้งค์เว็บไซต์ต่างประเทศ: "",
    //     },
    //   ],
    //   selection1: "",
    //   selection2: "",
    //   selection3: "",
    // };
  }

  render() {
    return (
      <>
        <div className="mgt">
          <label style={{ float: "left", marginBottom: "0" }}>ระดับชั้น</label>
          <input
            class="validate[required] text-input "
            type="text"
            name="Grade"
            id="Grade"
          />
        </div>
        <div className="mgt">
          <label style={{ float: "left", marginBottom: "0" }}>Module</label>
          <input
            class="validate[required] text-input "
            type="text"
            name="Module"
            id="Module"
          />
        </div>

        <div className="spaceevenly mgt">
          <Button variant="contained" color="primary" href="/CreateCoursePage">
            Save
          </Button>
          <Button variant="contained" color="primary" href="/CreateCoursePage">
            Download CSV
          </Button>
        </div>

        <ChainListBox />
        <Contentsection />

        <div className="spaceevenly mgt">
          <Button variant="contained" color="primary" href="/QuestionPage">
            รูปที่เคย Upload
          </Button>
          <Button variant="contained" color="primary" href="/CreateCoursePage">
            Upload รูป
          </Button>
        </div>
      </>
    );
  }
}
