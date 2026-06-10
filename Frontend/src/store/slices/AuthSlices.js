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

export const loginAccount = createAsyncThunk("auth/login", async (data) => {
    try {
        const response = axios.post("http://localhost:7000/api/auth/login/", data, {
            withCredentials: true, // Include cookies in the request
        });
        console.log("response",response);
        toast.promise(response,{
            loading: "Logging in...",
            success:"Logged in successfully",
            error: "Failed to log in"
        });
        return (await response).data;
    } catch (error) {
        throw error.response.data.message || "Failed to log in";
    }
})

export const logoutAccount = createAsyncThunk("auth/logout", async () => {
    try {
        const response = axios.post("http://localhost:7000/api/auth/logout/",{},{
            withCredentials: true, // Include cookies in the request
        });
        console.log("logout response",response);
        toast.promise(response,{
            loading: "Logging out...",
            success:"Logout successfully",
            error: "Failed to log out"
        });
        return (await response).data;
    } catch (error) {
        throw error.response.data.message || "Failed to log out";
    }
});

export const updateProfilePicture = createAsyncThunk("auth/updateProfilePicture", async (formData) => {
    try {
        const response = axios.post("http://localhost:7000/api/auth/updateProfilePicture/", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }); 
        toast.promise(response,{    
            loading: "Updating profile picture...",
            success:"Profile picture updated successfully",
            error: "Failed to update profile picture"
        });
        return (await response).data;
    } catch (error) {
        throw error.response.data.message || "Failed to update profile picture";
    }
});


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
        .addCase(loginAccount.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(loginAccount.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.data = action.payload;
            console.log("payload",action);
        })
        .addCase(loginAccount.rejected, (state) => {
            state.isLoading = false;
        })
        .addCase(logoutAccount.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(logoutAccount.fulfilled, (state) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.data = null;
        })
        .addCase(logoutAccount.rejected, (state) => {
            state.isLoading = false;
        })
    }
})


export default authSlice.reducer