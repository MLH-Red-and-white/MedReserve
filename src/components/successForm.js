import {
  Button,
  Form,
  FormGroup,
  FormFeedback,
  Input,
  Row,
  Label,
  Container,
} from "reactstrap";

import React, { Component } from "react";

export class successForm extends Component {
  render() {
    return (
      <React.Fragment>
        <div></div>
        <div
          className="bg-light rounded w-50 border m-auto pt-4 pb-4
        text-center"
        >
          <h2 className="mb-3">
            Your application has been successfully recorded.
          </h2>
          <a color="primary" href="/">
            Submit another application
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default successForm;
