// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqRErr57DL1GBm9TO_7J7z7W7MHIoEXc0",
  authDomain: "inventory-management-99a00.firebaseapp.com",
  projectId: "inventory-management-99a00",
  storageBucket: "inventory-management-99a00.appspot.com",
  messagingSenderId: "224696983983",
  appId: "1:224696983983:web:3cc5cf1933fe3824d14f5a",
  measurementId: "G-0F53992TL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}