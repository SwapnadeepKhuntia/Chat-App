import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from "react-hot-toast";
import axios from 'axios';
const initialState  = {
    isLoggedIn: false,
    data: null,
    isLoading: false,
}


export const createAccount = createAsyncThunk("auth/signup", async (data) => {
//    console.log("gvhdfhgf",data);
   
    try {
        const response = axios.post("http://localhost:7000/api/auth/register/", data);
        console.log("response",response);
        toast.promise(response,{
            loading: "Creating account...",
            success:"Account created successfully",
            error: "Failed to create account"
        });
        return (await response).data;
    } catch (error) {
        throw error.response.data.message || "Failed to create account";
    }
})




const authSlice = createSlice({
    name: 'authhandle',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(createAccount.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createAccount.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.data = action.payload;
            // console.log("payload",action);
        })
        .addCase(createAccount.rejected, (state) => {
            state.isLoading = false;
        })
    }
})


export default authSlice.reducer