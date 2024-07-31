// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAp4rFnSXaruRbjtafoVS6L4DOByv-1YYA",
    authDomain: "my-kitche-shop.firebaseapp.com",
    projectId: "my-kitche-shop",
    storageBucket: "my-kitche-shop.appspot.com",
    messagingSenderId: "501118698720",
    appId: "1:501118698720:web:54da4a740cdc5a39df7c85",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
