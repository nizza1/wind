// useAuth.ts
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app, db } from '@/lib/firebase/firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { setUser, setLoading } from '@/app/globalState/feature/userProfile';
import { UserProfile } from './useAuthTypes';

const auth = getAuth(app);

const useAuth = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            dispatch(setLoading(true)); // Set loading state to true when auth state changes
            if (user) {
                try {
                    const userDoc = await getDoc(doc(db, 'users', user.uid));
                    if (userDoc.exists()) {
                        const data = userDoc.data() as UserProfile;
                        dispatch(setUser(data));
                    } else {
                        // Create new user profile if the user does not exist
                        const newUserProfile: UserProfile = {
                            uid: user.uid,
                            displayName: user.displayName || '',
                            email: user.email || '',
                            photoURL: user.photoURL || '',
                            emailVerified: user.emailVerified,
                            providerData: user.providerData
                        };
                        await setDoc(doc(db, 'users', user.uid), newUserProfile);
                        dispatch(setUser(newUserProfile));
                    }
                } catch (error) {
                    console.error("Error retrieving or creating user profile:", error);
                }
            } else {
                dispatch(setUser(null));
            }
            dispatch(setLoading(false));
        });

        return () => unsubscribe();
    }, [dispatch]);
};

export default useAuth;
