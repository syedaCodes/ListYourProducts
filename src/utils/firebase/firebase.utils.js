import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUXlw_nZMu6crIZPNsFL5VGjTps9O6Agc",
    authDomain: "crown-clothing-db-67811.firebaseapp.com",
    projectId: "crown-clothing-db-67811",
    storageBucket: "crown-clothing-db-67811.appspot.com",
    messagingSenderId: "817104094772",
    appId: "1:817104094772:web:2809da9c0558ca0ac0ec61",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//create a provider instance
const provider = new GoogleAuthProvider();

//setup provider
provider.setCustomParameters({
    prompt: "select_account", //we need a prompt to have the user forced to select an account
    //when they interact with our application
});

//create an instance for auth function
export const auth = getAuth();

//create a function pass the auth and provider as parameters
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
