import { createSlice } from '@reduxjs/toolkit';

const searchSlice=createSlice({
    name:'search',
    initialState:{
        searchItem:''
    },
    reducers:{
        searchItem:(state,action)=>{
            state.searchItem=action.payload
        },
        clearSearchItem:(state)=>{
            state.searchItem=''
        },
    },

})

export const {searchItem,clearSearchItem}=searchSlice.actions
export default searchSlice.reducer