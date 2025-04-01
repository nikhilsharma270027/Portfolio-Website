// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBC1WtFun1IgB8p25kMiwXm-6muoLRyeSY",
  authDomain: "portfolio-nikhil27.firebaseapp.com",
  projectId: "portfolio-nikhil27",
  storageBucket: "portfolio-nikhil27.firebasestorage.app",
  messagingSenderId: "8078874555",
  appId: "1:8078874555:web:632ec7e79cf655699c169e",
  measurementId: "G-X65Z2HQ11C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics, logEvent };