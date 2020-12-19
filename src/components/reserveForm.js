import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  FormFeedback,
  Input,
  Row,
  Label,
} from "reactstrap";

class reserveForm extends Component {
  state = {
    name: "",
    symptoms: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <Form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3 mb-3">Reserve</h5>
          <FormGroup className="input-field mb-2">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup className="input-field mb-2">
            <Label htmlFor="symptoms">Symptoms</Label>
            <Input type="text" id="symptoms" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup className="input-field mb-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup className="input-field mb-2">
            <Button className="btn pink lighten-1 z-depth-0">Reserve</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default reserveForm;
