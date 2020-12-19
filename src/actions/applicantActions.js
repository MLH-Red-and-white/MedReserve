import * as types from "./types";

export const addApplicant = (applicant) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("applicants")
      .add({
        ...applicant,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: types.ADD_APPLICANT });
      })
      .catch((err) => {
        dispatch({ type: types.ADD_APPLICANT_ERROR }, err);
      });
  };
};
