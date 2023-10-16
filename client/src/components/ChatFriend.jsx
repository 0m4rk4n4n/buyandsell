import { useEffect, useState } from "react"
import "./styles.css"
import { axiosInstance } from "../config/Config.js"
import { useDispatch, useSelector } from "react-redux"
import Avatar from "../resources/user_icon.png"
import { setSelectedConversation } from "../redux/conversation"
const ChatFriend=({conversation,socket,setTargetId,setTarConv})=>
{
    const [user,setUser]= useState({})
    const [loading,setLoading]=useState(false)
    const { currentUser } = useSelector(state=>state.user)
    const [messages,setMessages]=useState([])
    const [read,setRead]=useState(true)
    const dispatch=useDispatch()
    const [notificationn,setNotificationn]=useState(false)
    const [otherUser,setOtherUser]=useState(null)
    const handleTargetConv=()=>
    {
      setRead(false)
      setNotificationn(false)
      setLoading(true)
      try 
      {
        setTarConv(conversation._id)
        if(conversation.members[0]!==currentUser._id)
        setTargetId(conversation.members[0])
        else
        setTargetId(conversation.members[1])
        const fun=async()=>
        {
          await axiosInstance.put(`/message/setRead/${conversation._id}`)
          try
          {
            const res=await axiosInstance.get(`/conversation/conv/${conversation._id}`)
            dispatch(setSelectedConversation(res.data))
          }
          catch(e)
          {
            console.clear()
          }
          setLoading(false)
        }
        fun()
      }
      catch(e)
      {
        console.clear()
      }
    }
    useEffect(() => {
      if (socket) {
        socket.emit("addUser", otherUser);
  
        socket.on("getUsers", (users) => {
        });
  
        return () => {
          socket.off("getUsers");
        };
      }
    }, [socket]);
    useEffect(()=>
    {
      if(conversation.members[0]!==currentUser._id)
      setOtherUser(conversation.members[0])
      else
      setOtherUser(conversation.members[1])
        const fun=async()=>
        {
          setLoading(true)
          const res12=await axiosInstance.get(`/message/doeshaveunread/${conversation._id}/${conversation.members[0]!==currentUser._id ? conversation.members[0] : conversation.members[1]}`)
          if(res12.data===false)
          setRead(false)
            conversation.members.forEach(memberId => {
                if(memberId!==currentUser._id)
                {
                    axiosInstance.get(`/auth/getuser/${memberId}`).then((res)=>{setUser(res.data)})
                }
            })
            setLoading(false)
        }
        fun()
    },[])

    useEffect(()=>
    {
      socket && socket.emit("addUser",otherUser)
      socket && socket.on("getUsers",(users)=>
      {})
    },[user])
    return(<div onClick={handleTargetConv} className="inbox_chat">
    <div  className="chat_list active_chat">
      <div className="chat_people">
        <div style={{mixBlendMode:"multiply"}} className="chat_img"> <img src={Avatar} alt="Avatar"/> </div>
        <div style={{position:"relative"}} className="chat_ib">
          <h5 className="chatName">{user.name} <span className="chat_date">{conversation.updatedAt && conversation.updatedAt.split("T")[0]}</span></h5>
        </div>
      </div>
           {!loading && read && <div className="NewMsg" style={{color:"crimson",textAlign:"right"}}>New Message</div>}
    </div>
  </div>)
}
export default ChatFriend