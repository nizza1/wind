import { createSlice } from '@reduxjs/toolkit';


type LangState = {
    value: 'en' | 'de'
}

const initialState: LangState = {
    value: 'en'
}

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanguage(state) {
            state.value === 'en' ? state.value = 'de' : state.value = 'en';
        }
    }
})

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
