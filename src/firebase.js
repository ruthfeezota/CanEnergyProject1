// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXe0Fs1KlUZ0lAshUw2thYEfkJKanbmeE",
  authDomain: "candropsproject1.firebaseapp.com",
  projectId: "candropsproject1",
  storageBucket: "candropsproject1.firebasestorage.app",
  messagingSenderId: "993937858489",
  appId: "1:993937858489:web:e5e99053322a906e446068",
  measurementId: "G-FWGQNV1KT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);