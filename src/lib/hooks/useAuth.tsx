// useAuth.ts
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { app, db } from '@/lib/firebase/firebaseConfig';
import { AuthState, UserProfile } from './useAuthTypes';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const auth = getAuth(app);

const useAuth = (): AuthState => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setLoading(true); // Set loading state to true when auth state changes
            if (user) {
                setUser(user);
                try {
                    const userDoc = await getDoc(doc(db, 'users', user.uid));
                    if (userDoc.exists()) {
                        const data = userDoc.data() as UserProfile;
                        setUserProfile(data);
                    } else {
                        // ? create new user profile if the user not exist
                        const newUserProfile: UserProfile = {
                            uid: user.uid,
                            displayName: user.displayName || '',
                            email: user.email || '',
                            photoURL: user.photoURL || '',
                            emailVerified: user.emailVerified,
                            providerData: user.providerData
                        };
                        await setDoc(doc(db, 'users', user.uid), newUserProfile);
                        setUserProfile(newUserProfile);
                    }
                } catch (error) {
                    console.error("Fehler beim Abrufen oder Erstellen des Benutzerprofils:", error);
                }
            } else {
                setUser(null);
                setUserProfile(null);
            }
            setLoading(false);

        });

        return () => unsubscribe();
    }, []);

    return { user, loading, userProfile };
};

export default useAuth;
