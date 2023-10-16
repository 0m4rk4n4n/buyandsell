import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    color:{red:"" ,black:"" ,blue:"" ,brown:"" ,green:"" ,white:"" ,grey:"" ,gold:"" ,yellow:"" ,tan:"" ,pink:"" ,purple:"" ,
    silver:"" ,orange:""
}}

export const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        changered:(state,action)=>
        {
            state.color.red=action.payload
        
        },
        changeblack:(state,action)=>
        {
            state.color.black=action.payload
        
        },
        changeblue:(state,action)=>
        {
            state.color.blue=action.payload
        
        },
        changebrown:(state,action)=>
        {
            state.color.brown=action.payload
        
        },
        changegreen:(state,action)=>
        {
            state.color.green=action.payload
        
        },
        changewhite:(state,action)=>
        {
            state.color.white=action.payload
        
        },
        changegrey:(state,action)=>
        {
            state.color.grey=action.payload
        
        },
        changegold:(state,action)=>
        {
            state.color.gold=action.payload
        
        },
        changeyellow:(state,action)=>
        {
            state.color.yellow=action.payload
        
        },
        changetan:(state,action)=>
        {
            state.color.tan=action.payload
        
        },
        changepink:(state,action)=>
        {
            state.color.pink=action.payload
        
        },
        changepurple:(state,action)=>
        {
            state.color.purple=action.payload
        
        },
        changeorange:(state,action)=>
        {
            state.color.orange=action.payload
        
        },
        changesilver:(state,action)=>
        {
            state.color.silver=action.payload
        
        }
}})
  export const {changered,
    changeblack,
    changeblue,
    changebrown,
    changegreen,
    changewhite,
    changegrey,
    changegold,
    changeyellow,
    changetan,
    changepink,
    changepurple,
    changeorange,
    changesilver

    } = colorSlice.actions

export default colorSlice.reducer