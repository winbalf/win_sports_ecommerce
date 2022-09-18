// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDTnPxZKZsWj0SwaPZ07CWV3oKgzuSVJ_0",
  authDomain: "win-sports-ecommerce.firebaseapp.com",
  projectId: "win-sports-ecommerce",
  storageBucket: "win-sports-ecommerce.appspot.com",
  messagingSenderId: "228532977638",
  appId: "1:228532977638:web:4a785de0f390904227e027",
  measurementId: "G-8BH6W3Z7WD"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

const analytics = getAnalytics(app);