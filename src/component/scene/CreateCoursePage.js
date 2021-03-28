import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./CreateCoursePage.css";
import Contentsection from "../contentsection";
import ChainListBox from "../ChainListBox";
export default class CreateCoursePage extends Component {
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
            --------
          </Button>
          <Button variant="contained" color="primary" href="/CreateCoursePage">
            upload รูป
          </Button>
        </div>
      </>
    );
  }
}
