import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state, actions)=>{
            console.log("test this")
        }
    }
});

export const  {addToCart} = cartSlice.actions
export default cartSlice.reducer;