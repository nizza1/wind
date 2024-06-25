import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProfile } from "@/lib/hooks/useAuthTypes";

interface UserState {
    user: UserProfile | null;
    loading: boolean;
}

const initialState: UserState = {
    user: null,
    loading: true,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserProfile | null>) => {
            state.user = action.payload,
                state.loading = false
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        }
    }
})


export const { setUser, setLoading } = userSlice.actions;
export default userSlice.reducer;

