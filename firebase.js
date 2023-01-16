// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1LfG4eHUAZrlbwdtXZ8y0ZaoiHYJQtjQ",
  authDomain: "portfolio-a9031.firebaseapp.com",
  projectId: "portfolio-a9031",
  storageBucket: "portfolio-a9031.appspot.com",
  messagingSenderId: "631963776725",
  appId: "1:631963776725:web:ce300b5b62690e0811545c",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export { firebase };
