// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBL1a_ZcYRKrA6W0KsZaJIwP17PERTIpgg",
	authDomain: "netflixgpt-b3300.firebaseapp.com",
	projectId: "netflixgpt-b3300",
	storageBucket: "netflixgpt-b3300.appspot.com",
	messagingSenderId: "622079440490",
	appId: "1:622079440490:web:a2ff325763faf3783a7c13",
	measurementId: "G-VE37CQ8VPX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
