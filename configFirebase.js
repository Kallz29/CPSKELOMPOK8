// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";
// import configFirebase from './components/configFirebase';

const configFirebase = {
  apiKey: "AIzaSyDMZ4or0lpKn0u3SLCs8uQQxN_wHCyt2B8",
  authDomain: "cpss-9f5b1.firebaseapp.com",
  databaseURL: "https://cpss-9f5b1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cpss-9f5b1",
  storageBucket: "cpss-9f5b1.appspot.com",
  messagingSenderId: "383524690299",
  appId: "1:383524690299:web:ff87066006d3d2bebe05de",
  measurementId: "G-KHWY53M04K"
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(configFirebase);
const db = getDatabase(app);
// const analytics = getAnalytics(app);

export{ db };
export default app;