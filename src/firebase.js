import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBZOHRjo9UN-ml4aBmDvL-1KfAydvduBdI",
    authDomain: "linkedin-clone-b61c3.firebaseapp.com",
    projectId: "linkedin-clone-b61c3",
    storageBucket: "linkedin-clone-b61c3.appspot.com",
    messagingSenderId: "790942442998",
    appId: "1:790942442998:web:b4172b55d6b422b75413d7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };