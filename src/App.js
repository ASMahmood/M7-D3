import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import DetailPage from "./components/DetailPage";

class App extends React.Component {
  render() {
    return (
      <Container className="App h-100">
        <NavBar />
        <Route path="/" exact render={(props) => <HomePage {...props} />} />
        <Route path="/details/" render={(props) => <DetailPage {...props} />} />
      </Container>
    );
  }
}

export default App;
