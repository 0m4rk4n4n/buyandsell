import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    query:[]
}
export const searchSlice = createSlice({
    name: 'query',
    initialState,
    reducers: {
        addQuery:(state,action)=>
        {
state.query.push(action.payload)
        }
              }})
export const { addQuery } = searchSlice.actions
export default searchSlice.reducer