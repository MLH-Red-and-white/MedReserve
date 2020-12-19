import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBU-cA22jDVtV6a3ef83QXIerhfajYCeJM",
  authDomain: "medreserve-31cc6.firebaseapp.com",
  projectId: "medreserve-31cc6",
  storageBucket: "medreserve-31cc6.appspot.com",
  messagingSenderId: "1003325847317",
  appId: "1:1003325847317:web:c65c397f63de1757259b1c",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
