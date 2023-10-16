import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    notificationName:"",
    senderId:"",
    conversationId:"",
    receiverID:""
}
export const notificationSlice = createSlice({
    name: 'notificationName',
    initialState,
    reducers: {
        changeNotificationName:(state,action)=>
        {
state.notificationName=action.payload
        },
        changeSenderId:(state,action)=>
        {
state.notificationName=action.payload
        },
        changeConversationId:(state,action)=>
        {
state.conversationId=action.payload
        },
        changeReceiverId:(state,action)=>
        {
state.receiverID=action.payload
        },
              }})
export const { changeNotificationName, changeSenderId, changeConversationId, changeReceiverId } = notificationSlice.actions
export default notificationSlice.reducer