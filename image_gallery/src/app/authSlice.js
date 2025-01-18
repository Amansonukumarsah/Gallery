import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    token:localStorage.getItem('authToken') || null,
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.token = action.payload;
            localStorage.setItem('authToken', action.payload);
        },
        logout:(state,action)=>{
            state.token = null;
            localStorage.removeItem('authToken');
        }
    },
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
