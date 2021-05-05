import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBK7tY4cVcDtCTJs087ir8KZw5zQwbb3mk",
    authDomain: "clown-db-77cea.firebaseapp.com",
    projectId: "clown-db-77cea",
    storageBucket: "clown-db-77cea.appspot.com",
    messagingSenderId: "145565946039",
    appId: "1:145565946039:web:1eeae69ea8a60da1487d32",
    measurementId: "G-Q8ZDX93EW5"
};

export const createUserProfileDocument  = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;