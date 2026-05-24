import { createSlice } from '@reduxjs/toolkit'





const authSlice = createSlice({
    name: 'authhandle',
    initialState: {
        isAuthenticated: false,
        user: {id: 1, name:"Swapnadeep Khuntia", email: "swapnadipkhutia@gmail.com"},
        isloding: false,
    }
})


export default authSlice.reducer