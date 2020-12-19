import React, { Component } from "react";
import { connect } from "react-redux";
import { addApplicant, getHospitals } from "../actions/applicantActions";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
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
    email: "",
    phone_number: "",
    age: 0,
    gender: "",
    covid19_positive: false,
    hospitals_applied_to: [],
    symptoms: "",
  };

  // componentDidMount() {
  //   this.props.getHospitals();
  // }

  handleChange = (e) => {
    // this.props.getHospitals();
    console.log(e);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addApplicant(this.state);
    // this.setState({
    //   name: "",
    //   email: "",
    //   phone_number: "",
    //   age: 0,
    //   gender: "",
    //   covid19_positive: false,
    //   hospitals_applied_to: [],
    //   symptoms: [],
    // });
  };

  render() {
    const { hospitals } = this.props;
    console.log(hospitals);

    return (
      <div className="container">
        <Form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3 mb-3">Reserve</h5>
          <FormGroup className="input-field mb-2">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              required
              id="name"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="input-field mb-2">
            <Label htmlFor="symptoms">Symptoms</Label>
            <Input
              type="text"
              required
              id="symptoms"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="input-field mb-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              required
              id="email"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="input-field mb-2">
            <Label htmlFor="phone_number">Phone Number</Label>
            <Input
              type="text"
              id="phone_number"
              onChange={this.handleChange}
              required
            />
          </FormGroup>

          <FormGroup className="input-field mb-2">
            <Label htmlFor="age">Age</Label>
            <Input
              type="number"
              required
              id="age"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup tag="fieldset">
            <legend>Gender</legend>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="gender"
                  id="gender"
                  value="male"
                  onChange={this.handleChange}
                />
                Male
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="gender"
                  id="gender"
                  value="female"
                  onChange={this.handleChange}
                />{" "}
                Female
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="gender"
                  id="gender"
                  value="ratherNotSay"
                  onChange={this.handleChange}
                />{" "}
                Rather Not Say
              </Label>
            </FormGroup>
          </FormGroup>

          <FormGroup tag="fieldset">
            <legend>Are you covid19 positive?</legend>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  id="covid19_positive"
                  name="covid19_positive"
                  value={true}
                  onChange={this.handleChange}
                />
                Yes
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  id="covid19_positive"
                  name="covid19_positive"
                  value={false}
                  onChange={this.handleChange}
                />
                No
              </Label>
            </FormGroup>
          </FormGroup>

          {/* <FormGroup className="input-field mb-2">
            <Label htmlFor="hospitals_applied_to">Hospital</Label>
            {Object.values(hospitals).map((hospital) => {
              return (
                <input
                  type="checkbox"
                  id="hospitals_applied_to"
                  name="hospitals_applied_to"
                  value={hospital.name}
                >
                  {hospital.name}
                </input>
              );
            })}
          </FormGroup> */}

          <FormGroup className="input-field mb-2">
            <Button className="btn pink lighten-1 z-depth-0">Reserve</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addApplicant: (applicant) => dispatch(addApplicant(applicant)),
    getHospitals: () => dispatch(getHospitals()),
  };
};

const mapStateToProps = (state) => {
  return {
    hospitals: state.firestore,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(reserveForm);

// export default compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   firestoreConnect(() => ["hospitals"]), // sync todos collection from Firestore into redux
//   connect((state) => ({
//     hospitals: state.firestore.data.hospitals,
//   }))
// )(reserveForm);

// firestoreConnect([
//   {
//     collection: "hospitals",
//     collection: "applicants",
//   },
// ])
