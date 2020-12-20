import { combineReducers } from "redux";
import applicantReducer from "./applicantReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

export default combineReducers({
  applicant: applicantReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});
