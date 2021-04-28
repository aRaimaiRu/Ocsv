import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import CoursePage from "./component/containers/CoursePage";
import CreateCoursePage from "./component/containers/CreateCoursePage";
import ChoicePage from "./component/containers/ChoicePage";
import QuestionPage from "./component/containers/QuestionPage";
import LoginPage from "./component/containers/LoginPage";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import useToken from "./component/useToken/useToken";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { loginUser, registerUser } from "./utils";
function App() {
  const { token, setToken, deleteToken } = useToken();
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

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}></Typography>
            {!token && (
              <>
                <Button color="inherit" href="/">
                  Login
                </Button>
                <Button color="inherit" href="/Register">
                  Register
                </Button>
              </>
            )}
            {token && (
              <Button color="inherit" href="/" onClick={deleteToken}>
                Logout
              </Button>
            )}
          </Toolbar>
        </AppBar>
        <Container className="container">
          <Switch>
            {!token && (
              <>
                <Route exact path="/Register">
                  <LoginPage setToken={setToken} fn={registerUser} />
                </Route>
                <Route exact path="/">
                  <LoginPage setToken={setToken} fn={loginUser} />
                </Route>
              </>
            )}
            {token && (
              <>
                <Route path="/CreateCoursePage">
                  <CreateCoursePage />
                </Route>
                <Route path="/QuestionPage">
                  <QuestionPage />
                </Route>
                <Route path="/ChoicePage">
                  <ChoicePage />
                </Route>
                <Route exact path="/">
                  <CoursePage token={token} />
                </Route>
              </>
            )}
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
