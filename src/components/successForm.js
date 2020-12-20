import {
  Button,
  Form,
  FormGroup,
  FormFeedback,
  Input,
  Row,
  Label,
  Container,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from "reactstrap";

import React, { Component } from "react";

export class successForm extends Component {
  render() {
    return (
      <div
        className="center-block"
        style={{
          padding: "75px",
          height: "750px",
        }}
      >
        <Card
          className="rounded border m-auto
      text-center w-50"
        >
          <CardHeader style={{ backgroundColor: "#5DBB63" }}>
            <h2 className="mb-3" style={{ color: "#f5f5f5" }}>
              Your application has been successfully recorded.
            </h2>
          </CardHeader>
          <CardBody
            className="text-primary"
            style={{ backgroundColor: "white" }}
          >
            <u>
              <a className="secondary" href="/">
                Submit another application
              </a>
            </u>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default successForm;
