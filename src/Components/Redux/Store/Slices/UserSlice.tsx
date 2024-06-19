import { createSlice }  from "@reduxjs/toolkit";


export const UserSlice=createSlice({
    name:"userSlice",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload);
        },
        removeUser(state,action){
            state.splice(action.payload,1);
        },
        deleteUsers(state,action){
            return state=[];
        },
    }
})
export const {addUser,removeUser,deleteUsers}=UserSlice.actions;