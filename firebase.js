// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
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

// Initialize Firestore
const firestore = getFirestore(app);

// Initialize Firebase Analytics (Client-side only)
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      const analytics = getAnalytics(app);
      // Analytics can now be used safely
    }
  });
}

export { firestore };
