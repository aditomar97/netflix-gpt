import { createSlice } from "@reduxjs/toolkit";

const initialState={
data:null
}


const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
addUser(state,action){
  state.data=action.payload  
},
removeUser(state,action){
state.data=null
}
    }
})

export const {addUser,removeUser} = userSlice.actions

export default userSlice.reducer