import { configureStore } from '@reduxjs/toolkit';
// add thunk middleware and turn on automatically some development checks (by using the configureStore redux/toolkit)

import ThemeReducer from './feature/theme-slice';
import LanguageReducer from './feature/lang';


export const store = configureStore({
    // handle the redux combine of reducer 

    reducer: {
        theme: ThemeReducer,
        language: LanguageReducer,
    }
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>


