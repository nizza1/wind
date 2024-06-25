

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from './firebaseConfig';
const auth = getAuth(app);


const signInWithEmail = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error('Fehler bei der Anmeldung:', error);
        throw error;
    }
};

const registerWithEmail = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error('Fehler bei der Registrierung:', error);
        throw error;
    }
};

const signOutUser = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error('Fehler bei der Abmeldung:', error);
        throw error;
    }
};

// Google sign in
const signInWithGoogle = async () => {

    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        return result.user;
    } catch (error) {
        console.error('Fehler bei der Google-Anmeldung:', error);
        throw error;
    }
}


export { auth, signInWithEmail, signOutUser, registerWithEmail, signInWithGoogle };