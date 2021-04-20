import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import CoursePage from "./component/containers/CoursePage";
import CreateCoursePage from "./component/containers/CreateCoursePage";
import ChoicePage from "./component/containers/ChoicePage";
import QuestionPage from "./component/containers/QuestionPage";
import LoginPage from "./component/containers/LoginPage";
import RegisterPage from "./component/containers/RegisterPage";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import useToken from "./component/useToken/useToken";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
function App() {
  const { token, setToken } = useToken();
  const theme = createMuiTheme({
    overrides: {
      // Style sheet name ⚛️
      MuiButton: {
        // Name of the rule
        text: {
          // Some CSS
          background: "#fa5607",
          borderRadius: 3,
          border: 0,
          color: "white",
          height: 48,
          padding: "0 10px",
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        },
        root: {
          borderRadius: 8,
        },
      },
    },
  });
  if (!token) {
    return (
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}></Typography>
            <Button color="inherit" href="/">
              Login
            </Button>
            <Button color="inherit" href="/Register">
              Register
            </Button>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/Register">
            <RegisterPage setToken={setToken} />
          </Route>
          <Route path="/">
            <LoginPage setToken={setToken} />
          </Route>
        </Switch>
      </Router>
    );
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Container className="container">
          {/* <div className="header"></div> */}
          <Switch>
            <Route path="/CreateCoursePage">
              <CreateCoursePage />
            </Route>
            <Route path="/QuestionPage">
              <QuestionPage />
            </Route>
            <Route path="/ChoicePage">
              <ChoicePage />
            </Route>
            <Route path="/">
              <CoursePage token={token} />
            </Route>
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
