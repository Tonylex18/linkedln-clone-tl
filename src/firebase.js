// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCzzLkdu4t6ykcHvWUJpjAaUvtUlSCKoR0",
  authDomain: "linkedln-clone-tl.firebaseapp.com",
  projectId: "linkedln-clone-tl",
  storageBucket: "linkedln-clone-tl.appspot.com",
  messagingSenderId: "728652643091",
  appId: "1:728652643091:web:32f500cbe184c0a17738e6",
  measurementId: "G-4GX68VT551",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection };
