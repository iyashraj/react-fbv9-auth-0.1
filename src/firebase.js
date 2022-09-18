import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC7HtWECyEARWZVzjOZeq9UDCXtf4aQr2s",
  authDomain: "react-fbv9-auth1.firebaseapp.com",
  projectId: "react-fbv9-auth1",
  storageBucket: "react-fbv9-auth1.appspot.com",
  messagingSenderId: "192185107064",
  appId: "1:192185107064:web:68da7dd8fe825d7bbfe38d",
  measurementId: "G-4C4DMCV34R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)