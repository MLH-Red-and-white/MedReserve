import React, { Component } from "react";
import { connect } from "react-redux";
import { addApplicant } from "../actions/applicantActions";
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
    symptoms: [],
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleChangeHospital = (e) => {
    console.log(e.target);
    console.log(e.target.checked);
    const hospitalId = e.target.id;

    if (this.state.hospitals_applied_to.includes(hospitalId)) {
      if (e.target.checked) {
        console.log("checked and includes");
      } else {
        console.log("included and unchecked");
        this.setState({
          ...this.state,
          hospitals_applied_to: this.state.hospitals_applied_to.filter(
            (hospital) => hospitalId != hospital
          ),
        });
      }
    } else {
      if (e.target.checked) {
        console.log("checked and not includes");
        this.state.hospitals_applied_to.push(hospitalId);
      } else {
        console.log("un checked and not includes");
      }
    }
  };

  handleChangeSymptom = (e) => {
    console.log(e.target);
    console.log(e.target.checked);
    const symptomName = e.target.id;

    if (this.state.symptoms.includes(symptomName)) {
      if (e.target.checked) {
        console.log("checked and includes");
      } else {
        console.log("included and unchecked");
        this.setState({
          ...this.state,
          symptoms: this.state.symptoms.filter(
            (symptom) => symptomName != symptom
          ),
        });
      }
    } else {
      if (e.target.checked) {
        console.log("checked and not includes");
        this.state.symptoms.push(symptomName);
      } else {
        console.log("un checked and not includes");
      }
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addApplicant(this.state);
    this.setState({
      name: "",
      email: "",
      phone_number: "",
      age: 0,
      gender: "",
      covid19_positive: false,
      hospitals_applied_to: [],
      symptoms: [],
    });
    this.resetCheckboxes();
  };

  resetCheckboxes = () => {
    document
      .querySelectorAll("input[type=checkbox]")
      .forEach((el) => (el.checked = false));

    document
      .querySelectorAll("input[type=radio]")
      .forEach((el) => (el.checked = false));
  };

  render() {
    const symptoms = [
      "cough",
      "fever",
      "headache",
      "fatigue",
      "Difficulty breathing",
      "Runny nose",
    ];

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
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup className="input-field mb-2">
            <legend htmlFor="symptoms">Symptoms</legend>
            <br></br>
            {symptoms &&
              symptoms.map((symptom) => {
                return (
                  <React.Fragment>
                    <Label htmlFor={symptom}>{symptom}</Label>
                    <input
                      type="checkbox"
                      id={symptom}
                      name="symptoms"
                      value={symptom}
                      key={symptom}
                      placeholder={symptom}
                      onChange={this.handleChangeSymptom}
                    />
                    <br></br>
                  </React.Fragment>
                );
              })}
          </FormGroup>

          <FormGroup className="input-field mb-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              value={this.state.email}
              required
              id="email"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="input-field mb-2">
            <Label htmlFor="phone_number">Phone Number</Label>
            <Input
              type="text"
              value={this.state.phone_number}
              id="phone_number"
              onChange={this.handleChange}
              required
            />
          </FormGroup>
          <FormGroup className="input-field mb-2">
            <Label htmlFor="age">Age</Label>
            <Input
              type="number"
              value={this.state.age}
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

          <FormGroup className="input-field mb-2">
            <legend htmlFor="hospitals_applied_to">Hospital</legend>
            <br></br>
            {this.props.hospitals &&
              this.props.hospitals.map((hospital) => {
                console.log(hospital);
                return (
                  <React.Fragment>
                    <Label htmlFor={hospital.name}>
                      {hospital.name} (Capacity: {hospital.capacity})
                    </Label>
                    <input
                      type="checkbox"
                      id={hospital.id}
                      name="hospitals_applied_to"
                      value={hospital.id}
                      key={hospital.id}
                      placeholder={hospital.name}
                      onChange={this.handleChangeHospital}
                    />
                    <br></br>
                  </React.Fragment>
                );
              })}
          </FormGroup>

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
  };
};

const mapStateToProps = (state) => {
  return {
    hospitals: state.firestore.ordered.hospitals,
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "hospitals" }])
)(reserveForm);
