import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import CoursePage from "./component/containers/CoursePage";
import CreateCoursePage from "./component/containers/CreateCoursePage";
import ChoicePage from "./component/containers/ChoicePage";
import QuestionPage from "./component/containers/QuestionPage";
import ShowImagePage from "./component/containers/ShowImagePage";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Container className="container">
        {/* <div className="header"></div> */}
        <Switch>
          <Route exact path="/">
            <CoursePage />
          </Route>
          <Route path="/CreateCoursePage">
            <CreateCoursePage />
          </Route>
          <Route path="/QuestionPage">
            <QuestionPage />
          </Route>
          <Route path="/ChoicePage">
            <ChoicePage />
          </Route>
          <Route path="/ShowImagePage">
            <ShowImagePage />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
