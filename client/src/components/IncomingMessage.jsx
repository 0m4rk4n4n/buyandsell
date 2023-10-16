import { format } from "timeago.js"
import Avatar from "../resources/user_icon.png"
const IncomingMessage=({message})=>
{
return(            <div style={{padding:5}} className="incoming_msg">
<div style={{mixBlendMode:"multiply"}} className="incoming_msg_img"> <img src={Avatar} alt="Avatar"/> </div>
<div className="received_msg">
  <div className="received_withd_msg">
    <p>{message.text}</p>
    <span className="time_date">{format(message.createdAt && message.createdAt)}</span> </div>
</div>
</div>)
}
export default IncomingMessage