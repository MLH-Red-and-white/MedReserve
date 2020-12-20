import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import form from "./components/reserveForm";
import successForm from "./components/successForm";
import { Container } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App bg-light">
          <Container>
            <Switch>
              <Route exact path="/" component={form} />
              <Route exact path="/success" component={successForm} />
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
