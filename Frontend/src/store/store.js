import {configureStore} from '@reduxjs/toolkit'
import authReducer from './slices/AuthSlices.js'
export const store = configureStore({
    reducer: {
        // Add your reducers here
        auth: authReducer
    },
})