import { useEffect, useState, useRef } from "react"
import "./styles.css"
import { axiosInstance } from "../config/Config.js"
import { useDispatch, useSelector } from "react-redux"
import Avatar from "../resources/user_icon.png"
import { setSelectedConversation } from "../redux/conversation"
import typing from "../Gif/typing.gif"
const ChatFriend=({conversation,socket,setTargetId,setTarConv,typingConv,conId})=>
{
    const [user,setUser]= useState({})
    const [loading,setLoading]=useState(false)
    const { currentUser } = useSelector(state=>state.user)
    const [messages,setMessages]=useState([])
    const [read,setRead]=useState(true)
    const dispatch=useDispatch()
    const [notificationn,setNotificationn]=useState(false)
    const [otherUser,setOtherUser]=useState(null)
    const UserTyping=useRef(false)
    const notificationRef = useRef(false);
    useEffect(() => {
      if (socket) {
        socket.on("getMessage", (data) => {
          if (data.senderId === conversation.members[0] || data.senderId === conversation.members[1]) {
            notificationRef.current = true;
          }
          socket.on("getTyper",(data)=>
          {
              UserTyping.current=true          
          })
        });
        return () => {
          socket.off("getMessage");
        };
      }
    }, [socket, conversation.members]);
    const handleTargetConv=()=>
    {
      notificationRef.current=false
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
        return () => {
          socket.off("getUsers");
        };
      }
    }, [socket])
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
    },[user])
    return(<div onClick={handleTargetConv} className="inbox_chat">
    <div style={{backgroundColor:`${conId===conversation._id  ? "#e3e3e3" : "inherit"}`}}  className="chat_list active_chat">
      <div className="chat_people">
        <div style={{mixBlendMode:"multiply"}} className="chat_img"> <img src={Avatar} alt="Avatar"/> </div>
        <div style={{position:"relative"}} className="chat_ib">
          <h5 className="">{user.name && user.name.charAt(0).toUpperCase() + user.name.slice(1)} <span className="chat_date">{conversation.updatedAt && conversation.updatedAt.split("T")[0]}</span>
          </h5>
          {typingConv.current===conversation._id && <img width={30} style={{mixBlendMode:"multiply"}} src={typing}/>}
        </div>
      </div>
           {!loading && (read || notificationRef.current) && <div className="NewMsg" style={{color:"crimson",textAlign:"right"}}>New Message</div>}
    </div>
  </div>)
}
export default ChatFriend
