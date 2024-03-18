import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const configFirebase = {
  apiKey: "AIzaSyDMZ4or0lpKn0u3SLCs8uQQxN_wHCyt2B8",
  authDomain: "cpss-9f5b1.firebaseapp.com",
  databaseURL: "https://cpss-9f5b1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cpss-9f5b1",
  storageBucket: "cpss-9f5b1.appspot.com",
  messagingSenderId: "383524690299",
  appId: "1:383524690299:web:ff87066006d3d2bebe05de",
  measurementId: "G-KHWY53M04K"
};

const app = initializeApp(configFirebase);
const db = getDatabase(app);

export{ db };
export default app;
