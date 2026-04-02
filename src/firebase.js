// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD0Wfqw3U0NbDwVnw5thqwWdSR_Jw4724",
  authDomain: "fitnavi-team.firebaseapp.com",
  projectId: "fitnavi-team",
  storageBucket: "fitnavi-team.firebasestorage.app",
  messagingSenderId: "852176680468",
  appId: "1:852176680468:web:1c4df390ef5ab8f7301901",
  measurementId: "G-8N2CLF858E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;