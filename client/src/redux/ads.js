import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    autoAds:[],
    jobAds:[],
    petAds:[],
    realestateAds:[],
    serviceAds:[]
}
export const adsSlice = createSlice({
    name: 'ads',
    initialState,
    reducers: {
        changeAutoAds:(state,action)=>
        {
state.autoAds.push(action.payload)
        },
        changeJobAds:(state,action)=>
        {
state.jobAds.push(action.payload)
        },
        changePetAds:(state,action)=>
        {
state.petAds.push(action.payload)
        },
        changeRealEstateAds:(state,action)=>
        {
state.realestateAds.push(action.payload)
        },
        changeServiceAds:(state,action)=>
        {
state.serviceAds.push(action.payload)
        },

              }})
export const { changeAutoAds,
    changeJobAds,
    changePetAds,
    changeRealEstateAds,
    changeServiceAds } = adsSlice.actions
export default adsSlice.reducer