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

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error crreating user',error.message);
        }
    }
    return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
