// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtLCb-lY5_PkBXbrl99dnHEaHzrje9S9Y",
  authDomain: "disney-plus-app-e24b9.firebaseapp.com",
  projectId: "disney-plus-app-e24b9",
  storageBucket: "disney-plus-app-e24b9.appspot.com",
  messagingSenderId: "844555542113",
  appId: "1:844555542113:web:ffc3754b67b63ac0421420",
  measurementId: "G-EBZ07LRG1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;