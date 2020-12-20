import * as types from "./types";
import firebase from "../firebase";

export const addApplicant = (applicant) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("applicants")
      .add({
        ...applicant,
        age: parseInt(applicant.age),
        createdAt: new Date(),
        covid19_positive: applicant.covid19_positive.toLowerCase() == "true",
      })
      .then(() => {
        dispatch({ type: types.ADD_APPLICANT });
      })
      .catch((err) => {
        dispatch({ type: types.ADD_APPLICANT_ERROR }, err);
      });
  };
};

// export const getHospitals = () => {
//   return (dispatch, getState, { getFirestore }) => {
//     const firestore = getFirestore();
//     firebase
//       .database()
//       .ref("hospitals")
//       .on("value", (snapshot) => {
//         snapshot.forEach((snap) => {
//           console.log(snap.val());
//         });
//       });
//     dispatch({
//       type: types.GET_HOSPITALS,
//     });
//   };
// };
