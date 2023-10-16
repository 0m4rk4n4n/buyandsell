import { useEffect, useState } from "react"
import { format } from "timeago.js"
const OutgoingMessage=({message})=>
{

return(            <div style={{padding:5}} className="outgoing_msg">
<div className="sent_msg">
  <p>{message.text}</p>
  <span className="time_date">{format(message.createdAt && message.createdAt)}</span> </div>
</div>)
}
export default OutgoingMessage