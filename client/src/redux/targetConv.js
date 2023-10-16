import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    targetConv:"",
    name:"",
    tarId:"",
    currentConv:{}
}
export const targetConvSlice = createSlice({
    name: 'targetConv',
    initialState,
    reducers: {
        changetargetConv:(state,action)=>
        {
state.targetConv=action.payload
        },
        changeName:(state,action)=>
        {
state.name=action.payload
        },
        changeTarId:(state,action)=>
        {
state.tarId=action.payload
        },
        changeCurrentConv:(state,action)=>
        {
state.currentConv=action.payload
        }
              }})
export const { changetargetConv,changeName,changeTarId,changeCurrentConv } = targetConvSlice.actions
export default targetConvSlice.reducer