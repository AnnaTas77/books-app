// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAGNvNQTVDQU3gtKZCP-XRLKPEtjET_2yM",
//     authDomain: "buzz-books.firebaseapp.com",
//     projectId: "buzz-books",
//     storageBucket: "buzz-books.appspot.com",
//     messagingSenderId: "117389728648",
//     appId: "1:117389728648:web:b91f0eb7c6d680473ef83d",
// };

// NEW CONFIG
const firebaseConfig = {
    apiKey: "AIzaSyDO6M-LQzhh3uzsQydFO1Ht61zQYFgPz_w",

    authDomain: "books-buzz-ff6fa.firebaseapp.com",

    projectId: "books-buzz-ff6fa",

    storageBucket: "books-buzz-ff6fa.appspot.com",

    messagingSenderId: "832199403700",

    appId: "1:832199403700:web:6cab0862e72ad1cc060fe1",

    measurementId: "G-ZDBHH02FL1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// const analytics = getAnalytics(app);
