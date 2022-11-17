import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAO4-e4nmHkynUfOq3jcUyBCBmosdkhuvQ",
    authDomain: "dog-shop-53e5d.firebaseapp.com",
    projectId: "dog-shop-53e5d",
    storageBucket: "dog-shop-53e5d.appspot.com",
    messagingSenderId: "827796553251",
    appId: "1:827796553251:web:a6e395ef0f77000e86fb96"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email, createAt
            })
        }
        catch (error) {
            console.log('Error creating user', error.message)
        }
    }
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    return userDocRef;
}




