import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser:null,
loading:false,
error:false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart:(state)=>
        {
            state.loading=true
        
        },        loginSuccess:(state,action)=>
        {
            state.loading=false
            state.currentUser=action.payload
        
        },        loginFailure:(state)=>
        {
            state.loading=false
            state.error=false
        
        },
        changeName:(state,action)=>
        {
            state.currentUser.name=action.payload
        }
        ,        logOut:(state)=>
        {
     return initialState
    }}})
  export const { loginStart,changeName,image,loginSuccess, loginFailure,logOut,subscription } = userSlice.actions

export default userSlice.reducer