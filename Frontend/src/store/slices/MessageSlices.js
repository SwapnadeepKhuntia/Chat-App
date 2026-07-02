import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";


const initialState = {
   allContacts: [],
   messages: [],
   chats: [],
   activeTab: "chats",
   selectedUser: null,
   isUserLoading: false,
   isMessagesLoading: false,
   isSoundEnabled: JSON.parse(localStorage.getItem("isSoundEnabled")) === "true" ? true : false,
}

export const getAllContacts = createAsyncThunk("message/getAllContacts", async () => {
    try {
        const response = axios.get("http://localhost:7000/api/message/contacts/",{
            withCredentials: true, // Include cookies in the request
        });
        // toast.promise(response,{
        //     loading: "Loading contacts...",
        //     success:"Contacts loaded successfully",
        //     error: "Failed to load contacts"
        // });
        return (await response).data;
    } catch (error) {
        throw error.response.data.message || "Failed to load contacts";
    }   
})

export const getMychatPartners = createAsyncThunk("message/getMychatPartners", async () => {
    try {
        const response = axios.get("http://localhost:7000/api/message/chats/",{
            withCredentials: true, // Include cookies in the request
        });
        // console.log(response);
        // toast.promise(response,{
        //     loading: "Loading chats...",
        //     success:"Chats loaded successfully",
        //     error: "Failed to load chats"
        // });
        return (await response).data;
    } catch (error) {
        throw error.response.data.message || "Failed to load chats";
    }
})


export const getMessagebyuserId = createAsyncThunk("message/getMessagebyuserId", async (userId) => {
    try {
        console.log(userId);
        
        const response = axios.get(`http://localhost:7000/api/message/${userId}`,{
            withCredentials: true, // Include cookies in the request
        });
           

        return (await response).data;
    } catch (error) {
        throw error.response.data.message || "Failed to load messages";
    }
})

export const sendMessage = createAsyncThunk("message/sendMessage", async ({receiverId, text}) => {
    try {
        const response = axios.post(`http://localhost:7000/api/message/${receiverId}`,{
            content: text
        },{
            withCredentials: true, // Include cookies in the request
        });
        // console.log(response);
        // toast.promise(response,{ 
        //     loading: "Sending message...",
        //     success:"Message sent successfully",

        //     error: "Failed to send message"
        // });
        return (await response).data;
    }
        catch (error) {
        throw error.response.data.message || "Failed to send message";
    }
})

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        toggleSound: (state) => {
            state.isSoundEnabled = !state.isSoundEnabled;
            localStorage.setItem("isSoundEnabled", state.isSoundEnabled);
        },
        setactiveTab: (state, action) => {
            state.activeTab = action.payload;
            console.log(action.payload);
        },
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
            // console.log("state.selectedUser",state.selectedUser);
        },
        clearMessages: (state) => {
            state.messages = [];
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllContacts.pending, (state) => {
            state.isUserLoading = true;
        })
        .addCase(getAllContacts.fulfilled, (state, action) => {
            state.isUserLoading = false;
            state.allContacts = action.payload;
            console.log(action.payload);
        })
        .addCase(getAllContacts.rejected, (state) => {
            state.isUserLoading = false;
        })
        .addCase(getMychatPartners.pending, (state) => {
            state.isUserLoading = true;
        })
        .addCase(getMychatPartners.fulfilled, (state, action) => {
            state.isUserLoading = false;
            state.chats = action.payload;
            // console.log(action.payload);
            
        })
        .addCase(getMychatPartners.rejected, (state) => {
            state.isUserLoading = false;
        })

         .addCase(getMessagebyuserId.pending,(state, action)=>{
             state.isMessagesLoading = true;
        })
        
        .addCase(getMessagebyuserId.fulfilled,(state, action)=>{
            state.isMessagesLoading = false;
            state.messages = action.payload;

          
        })

    }

})

export const {toggleSound, setactiveTab, setSelectedUser, clearMessages} = messageSlice.actions;

export default messageSlice.reducer;