import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCnXhXNXuvo6qGU_5OxqGMuRCWu6efaq2w",
    authDomain: "crwn-db-f0322.firebaseapp.com",
    databaseURL: "https://crwn-db-f0322.firebaseio.com",
    projectId: "crwn-db-f0322",
    storageBucket: "crwn-db-f0322.appspot.com",
    messagingSenderId: "986703765393",
    appId: "1:986703765393:web:e28187a62bd9a5a247c430",
    measurementId: "G-P5MT4CPZZK"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestone = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
