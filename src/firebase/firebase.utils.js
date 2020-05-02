import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAtczN2FbsqTAOB6c9D9NGnFH3HLojsK6I",
    authDomain: "shopping-app-5ce12.firebaseapp.com",
    databaseURL: "https://shopping-app-5ce12.firebaseio.com",
    projectId: "shopping-app-5ce12",
    storageBucket: "shopping-app-5ce12.appspot.com",
    messagingSenderId: "432001227906",
    appId: "1:432001227906:web:b7733b4962ce489e01a89b",
    measurementId: "G-GCJRKY3NSS"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = ()  => auth.signInWithPopup(provider);

export default firebase;

