import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    location:"Canada"
}
export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        changeLoc:(state,action)=>
        {
state.location=action.payload
        }
              }})
export const { changeLoc } = locationSlice.actions
export default locationSlice.reducer