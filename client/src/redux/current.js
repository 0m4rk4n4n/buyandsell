import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentArr:[]
}

export const currentSlice = createSlice({
    name: 'currentArr',
    initialState,
    reducers: {
       
        changeArr:(state,action)=>
        {
state.currentArr.push(action.payload)
        }
              }})
  export const { changeArr } = currentSlice.actions

export default currentSlice.reducer