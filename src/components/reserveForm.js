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
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from "reactstrap";

class reserveForm extends Component {
  state = {
    name: "",
    email: "",
    phone_number: "",
    age: "",
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
      } else {
        this.setState({
          ...this.state,
          symptoms: this.state.symptoms.filter(
            (symptom) => symptomName != symptom
          ),
        });
      }
    } else {
      if (e.target.checked) {
        this.state.symptoms.push(symptomName);
      } else {
      }
    }
  };

  isNotAddedBefore = true;

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.hospitals_applied_to.length <= 0) {
      // alert("Please select at least one hospital!");
      if (this.isNotAddedBefore) {
        const smallItem = document.createElement("small"); // Create a <small> node
        const lineBreak = document.createElement("br");
        smallItem.innerHTML = "Please select at least one hospital";
        smallItem.classList.add("select-at-least-one");
        smallItem.classList.add("text-danger");
        const getHospitalHeader = document.querySelector(".hospitalHeader");
        getHospitalHeader.appendChild(lineBreak);
        getHospitalHeader.appendChild(smallItem);

        this.isNotAddedBefore = false;
      }
    } else {
      this.props.addApplicant(this.state);
      this.setState({
        name: "",
        email: "",
        phone_number: "",
        age: "",
        gender: "",
        covid19_positive: false,
        hospitals_applied_to: [],
        symptoms: [],
      });
      this.resetCheckboxes();
      window.location.href = "/success";
    }
  };

  resetCheckboxes = () => {
    document
      .querySelectorAll("input[type=checkbox]")
      .forEach((el) => (el.checked = false));

    document
      .querySelectorAll("input[type=radio]")
      .forEach((el) => (el.checked = false));
  };

  handleIndicate = () => {};

  render() {
    const symptoms = [
      "Cough",
      "Fever",
      "Headache",
      "Fatigue",
      "Difficulty breathing",
      "Runny nose",
    ];

    return (
      <div className="container">
        <h1 className="grey-text text-darken-3 m-auto mb-3 pb-3 pt-3 text-center">
          Make a Reservation
        </h1>
        <Form onSubmit={this.handleSubmit}>
          <Card className="mb-5">
            <CardHeader>
              <h2>Please fill in your personal details</h2>
            </CardHeader>
            <CardBody>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input
                  required
                  type="text"
                  id="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup className="input-field mb-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  required
                  type="email"
                  value={this.state.email}
                  id="email"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup className="input-field mb-2">
                <Label htmlFor="phone_number">Phone Number</Label>
                <Input
                  required
                  type="text"
                  value={this.state.phone_number}
                  id="phone_number"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup className="input-field mb-3">
                <Label htmlFor="age">Age</Label>
                <Input
                  required
                  type="number"
                  value={this.state.age}
                  id="age"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup tag="fieldset">
                <Label>Gender</Label>
                <FormGroup check>
                  <Label check>
                    <Input
                      required
                      type="radio"
                      name="gender"
                      id="gender"
                      value="Male"
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
                      value="Female"
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
                      value="Rather Not Say"
                      onChange={this.handleChange}
                    />{" "}
                    Rather Not Say
                  </Label>
                </FormGroup>
              </FormGroup>
            </CardBody>
          </Card>

          <Card className="mb-5">
            <CardHeader>
              <h2>Please fill in your health information</h2>
            </CardHeader>
            <CardBody>
              <h5 htmlFor="symptoms">Symptoms</h5>
              {symptoms &&
                symptoms.map((symptom, index) => {
                  return index == 0 ? (
                    <React.Fragment>
                      <Label htmlFor={symptom}>
                        <input
                          type="checkbox"
                          id={symptom}
                          name="symptoms"
                          value={symptom}
                          key={symptom}
                          placeholder={symptom}
                          onChange={this.handleChangeSymptom}
                        />{" "}
                        {symptom}
                      </Label>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <br></br>
                      <Label htmlFor={symptom}>
                        <input
                          type="checkbox"
                          id={symptom}
                          name="symptoms"
                          value={symptom}
                          key={symptom}
                          placeholder={symptom}
                          onChange={this.handleChangeSymptom}
                        />{" "}
                        {symptom}
                      </Label>
                    </React.Fragment>
                  );
                })}
              <FormGroup className="mt-2" tag="fieldset">
                <h5>Are you tested positive for COVID-19?</h5>
                <FormGroup check>
                  <Label check>
                    <Input
                      required
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
            </CardBody>
          </Card>

          <Card className="mb-3">
            <CardHeader>
              <h2 className="hospitalHeader">
                Please indicate the hospitals that interest you
              </h2>
              {/* <p style={this.handleIndicate()}>Indicate</p> */}
            </CardHeader>
            <CardBody>
              <FormGroup className="input-field mb-2">
                {" "}
                {this.props.hospitals &&
                  this.props.hospitals.map((hospital, index) => {
                    return index == 0 ? (
                      <React.Fragment>
                        <Label htmlFor={hospital.name}>
                          <input
                            type="checkbox"
                            id={hospital.id}
                            name="hospitals_applied_to"
                            value={hospital.id}
                            key={hospital.id}
                            placeholder={hospital.name}
                            onChange={this.handleChangeHospital}
                          />{" "}
                          {hospital.name} (Capacity: {hospital.capacity})
                        </Label>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <br></br>

                        <Label htmlFor={hospital.name}>
                          <input
                            type="checkbox"
                            id={hospital.id}
                            name="hospitals_applied_to"
                            value={hospital.id}
                            key={hospital.id}
                            placeholder={hospital.name}
                            onChange={this.handleChangeHospital}
                          />{" "}
                          {hospital.name} (Capacity: {hospital.capacity})
                        </Label>
                      </React.Fragment>
                    );
                  })}
              </FormGroup>
            </CardBody>
          </Card>
          <FormGroup className="text-center">
            <Label htmlFor="agreement">
              <input required type="checkbox" id="agreement" name="agreement" />{" "}
              I hereby acknowledge that all the information I provided above are
              correct
            </Label>
          </FormGroup>
          <FormGroup className="input-field mb-2  text-center">
            <Button className="btn pink lighten-1 z-depth-0 mb-5" size="lg">
              Reserve
            </Button>
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
