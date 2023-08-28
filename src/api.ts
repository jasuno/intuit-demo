import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import axios from "axios";

const firebase = initializeApp({
  apiKey: "AIzaSyCnhQqm7KR1T7ZGU8Z5pphyU7aQ-WNSrlQ",
  authDomain: "intuit-presentation.firebaseapp.com",
  projectId: "intuit-presentation",
  storageBucket: "intuit-presentation.appspot.com",
  messagingSenderId: "1019581498461",
  appId: "1:1019581498461:web:39d5aebb27ea8eb4d179b4",
  measurementId: "G-0JNLK2TMTM",
});

export const firestore = getFirestore(firebase);

export const instance = axios.create({
  baseURL: `${process.env.SOME_BASE_URL}`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
