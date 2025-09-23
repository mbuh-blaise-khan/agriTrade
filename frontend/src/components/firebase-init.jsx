// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf9jEpLyskCYuv7rApP6rPlexgtIxFrRk",
  authDomain: "agritrade-2025-contact.firebaseapp.com",
  projectId: "agritrade-2025-contact",
  storageBucket: "agritrade-2025-contact.firebasestorage.app",
  messagingSenderId: "46101378007",
  appId: "1:46101378007:web:d2b02b84437c1c9a571192",
  measurementId: "G-8X3G2NJY47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);