import {configureStore} from '@reduxjs/toolkit'
import authReducer from './slices/AuthSlices.js'
import messageReducer from './slices/MessageSlices.js'
export const store = configureStore({
    reducer: {
        // Add your reducers here
        auth: authReducer,
        message: messageReducer,
    },
})