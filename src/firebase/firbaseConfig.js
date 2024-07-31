// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyATU6Qq8ZomTz8egZGMaE1WHVOPrbhNtAI",
    authDomain: "my-store-30801.firebaseapp.com",
    projectId: "my-store-30801",
    storageBucket: "my-store-30801.appspot.com",
    messagingSenderId: "889381187118",
    appId: "1:889381187118:web:3bf11ad2aadd75894979bf",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);