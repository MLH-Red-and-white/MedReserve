import { combineReducers } from "redux";
import applicantReducer from "./applicantReducer";

export default combineReducers({
  applicant: applicantReducer,
});
