// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYhbA7qcetsPVQUbTZYCsYiVrniurdwoE",
  authDomain: "linear-ether-378413.firebaseapp.com",
  projectId: "linear-ether-378413",
  storageBucket: "linear-ether-378413.appspot.com",
  messagingSenderId: "1001333433874",
  appId: "1:1001333433874:web:a0f1608e06102a72c79acb",
  measurementId: "G-4JEKC2JDYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app);