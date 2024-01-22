// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4Rqs8yvHIeyNkZQFZAn04Lq2xO1PkkrU",
  authDomain: "yumkookauth.firebaseapp.com",
  databaseURL: "https://yumkookauth-default-rtdb.firebaseio.com",
  projectId: "yumkookauth",
  storageBucket: "yumkookauth.appspot.com",
  messagingSenderId: "971769755865",
  appId: "1:971769755865:web:25813fd7dec9b98a7766c8",
  measurementId: "G-6RPL05DMKR",
  databaseURL : "https://yumkookauth-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
