import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB0OSji0QBGzbGkyYLa9FPvCINOmewF6r0",
    authDomain: "whatsapp-clone-43130.firebaseapp.com",
    projectId: "whatsapp-clone-43130",
    storageBucket: "whatsapp-clone-43130.appspot.com",
    messagingSenderId: "958371368729",
    appId: "1:958371368729:web:57ae133b47fa9ed15dbf88",
    measurementId: "G-W2FMHNLGM7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};