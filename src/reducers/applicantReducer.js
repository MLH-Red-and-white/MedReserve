import * as types from "../actions/types";
import firebase from '../firebase';


const initialState = {};

//   age: 0,
//   email: "",
//   gender: "",
//   covid19_positive: false,
//   name: "",
//   hospitals_applied_to: [],
//   name: "",
//   phone_number: "",
//   symptoms: [],
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_APPLICANT:
      console.log("create applicant success");
      console.log(firebase.co)
      return state;
    default:
      return state;
  }
};

export default reducer;
