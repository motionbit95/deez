// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB_osZJVJdgJro2DEzcn-rdOBOc3peznE",
  authDomain: "deez-node-firebase.firebaseapp.com",
  databaseURL: "https://deez-node-firebase-default-rtdb.firebaseio.com",
  projectId: "deez-node-firebase",
  storageBucket: "deez-node-firebase.appspot.com",
  messagingSenderId: "919657151460",
  appId: "1:919657151460:web:7a4b32f2153b32aa8425f1",
  measurementId: "G-VJ9V123Y53",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// const analytics = getAnalytics(app);
export const storage = getStorage(app);
