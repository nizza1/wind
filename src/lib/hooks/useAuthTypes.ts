import { User, UserInfo } from 'firebase/auth';

export interface UserProfile {
    uid: string;
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
    emailVerified: boolean;
    providerData: UserInfo[];
}

export interface AuthState {
    user: User | null;
    loading: boolean;
    userProfile: UserProfile | null;
}