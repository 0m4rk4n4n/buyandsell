import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    newCount:0,
    usedCount:0
}
export const autosConditionSlice = createSlice({
    name: 'autoscondition',
    initialState,
    reducers: {
        switchNew:(state,action)=>
        {
state.newCount=action.payload
        },
        switchUsed:(state,action)=>
        {
state.usedCount=action.payload
        }
              }})
export const { switchNew, switchUsed} = autosConditionSlice.actions
export default autosConditionSlice.reducer