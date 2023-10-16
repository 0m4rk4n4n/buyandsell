import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    num:1
}
export const numSlice = createSlice({
    name: 'num',
    initialState,
    reducers: {
        switchNum:(state,action)=>
        {
state.num=action.payload
        }
              }})
export const { switchNum } = numSlice.actions
export default numSlice.reducer