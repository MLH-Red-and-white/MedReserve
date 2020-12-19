import { firestoreConnect } from "react-redux-firebase";
import * as types from "../actions/types";
import firebase from "../firebase";

const initialState = {
  age: 0,
  email: "",
  gender: "",
  covid19_positive: false,
  name: "",
  hospitals_applied_to: [],
  name: "",
  phone_number: "",
  symptoms: [],
  hospitals: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_APPLICANT:
      console.log("create applicant success");
      // firebase
      //   .database()
      //   .ref("applicants")
      //   .on("value", (snapshot) => {
      //     snapshot.forEach((snap) => {
      //       console.log(snap.val());
      //     });
      //   });
      return state;

    case types.GET_HOSPITALS:
      console.log("getHospital");
      return state;

    default:
      return state;
  }
};

export default reducer;
