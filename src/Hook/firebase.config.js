// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMd5aB0K8ZqDloxQhqs1sqrHEnzPsvmHQ",
  authDomain: "fashion-client.firebaseapp.com",
  projectId: "fashion-client",
  storageBucket: "fashion-client.appspot.com",
  messagingSenderId: "364010204961",
  appId: "1:364010204961:web:db41b8f393aced1fdd1860"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;