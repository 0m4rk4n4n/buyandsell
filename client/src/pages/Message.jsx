import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import SendIcon from '@mui/icons-material/Send';
import ChatFriend from "../components/ChatFriend";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../config/Config.js"
import OutgoingMessage from "../components/OutgoingMessage";
import IncomingMessage from "../components/IncomingMessage";
import {io} from "socket.io-client"
import LoadingGif from "../Gif/loading.gif"
import { setSelectedConversation } from "../redux/conversation";
import { useParams } from "react-router-dom";
import typingGif from "../Gif/typing.gif"
const Message=()=>
{
    const [conversations,setConversations]=useState([])
    const {selectedConversation}=useSelector(state=>state.conversation)
    const [message,setMessage]=useState("")
    const [tarConv,setTarConv]=useState(null)
    const [socket,setSocket]=useState(null)
    const [name,setName]=useState("")
    const { currentUser } = useSelector(state=>state.user)
    const [messages,setMessages]=useState([])
    const [loading,setLoading]=useState(false)
    const dispatch=useDispatch()
    const [users,setUsers]=useState([])
    const [targetId,setTargetId]=useState(null)
    const [unreadConvs,setUnreadConvs]=useState([])
    const [arrivalMessage,setArrivalMessage]=useState({})
    const [otherUserId,setOtherUserId]=useState("")
    const msgInp=useRef()
    const [loading2,setLoading2]=useState(false)
    const ref=useRef()
    const [conId,setConId]=useState(null)
    const {conversationId}=useSelector(state=>state.notificationName)
    const [target,setTarget]=useState(null)
    const [read,setRead]=useState([])
    const path=useParams()
    const [typing,setTyping]=useState(false)
    useEffect(()=>{window.scrollTo({ top: 0 });},[])
    useEffect(()=>
    {
      if(path.id!=="1")
      {

        const fun=async()=>
        {
          const res=await axiosInstance.get(`/conversation/searchforaconversation/${path.id}/${currentUser._id}`)
          if(res.data===false)
          {
          try 
          {
            await axiosInstance.post(`/conversation`,{senderId:currentUser._id,receiverId:path.id})
          }
          catch(e)
          {
            console.clear()
          }
          }
        }
        fun()
      }
    },[path.id])
    useEffect(()=>
    {
      const fun=async()=>
      {
        if(tarConv)
        {
          setLoading2(true)
          const res=await axiosInstance.get(`/conversation/conv/${tarConv}`)
          dispatch(setSelectedConversation(res.data))
          setLoading2(false)
        }
      }
      fun()
    },[tarConv])
    useEffect(()=>
    {
      const fun=async()=>
      {
        if(targetId!==null)
        {
          setLoading(true)
          const res=await axiosInstance.get(`/auth/getuser/${targetId}`)
          setName(res.data.name)
          setOtherUserId(res.data._id)
          setLoading(false)
        }
      }
      fun()
    },[selectedConversation])
    useEffect(()=>{
        ref.current?.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})
        messages.forEach(message=>
          {
            if(message.read===false)
            setRead([...read,{read:false,conId:message.conversationId}])
          })
    },[messages])
    useEffect(()=>
    {
      try 
      {
        const fun=async()=>
        {
            setLoading(true)
            try
            {
            setSocket(io(`https://sellsphere.online`, {transports: ['websocket']}))
            }
            catch(e)
            {
              console.log(e)
            }
            const res= await axiosInstance.get(`/conversation/${currentUser._id}`)
            setConversations(res.data)
            dispatch(setSelectedConversation(res.data[res.data.length-1]))
            res.data.forEach(conversation => {
              conversation && conversation.members.forEach(id=>
                {
                    if(!users.includes(id))
                    setUsers([...users,id])
                    if(id!==currentUser._id)
                    {
                        axiosInstance.get(`/auth/getuser/${id}`).then(res=>setName(res.data.name))
                        setLoading(false)
                    }
                })
            })
        }
        currentUser && fun()
      }
      catch(e)
      {
        console.clear()
      }
    },[])
    useEffect(()=>
    {
      socket!==null && socket.on("getMessage",(data)=>
      {
        setArrivalMessage(
          {
            sender:data.senderId,
            receiver:data.receiverId,
            text:data.text,
            conversationId:data.conversationId,
            read:true,
            createdAt:Date.now()
          })
          socket!==null && socket.on("getNotifications",(data)=>
          {
            setConId(data.conversationId)
          })
      })
    })
    useEffect(()=>
    {
      socket!==null && socket.on("getTyper",(data)=>
      {
        if(data.conversationId===selectedConversation._id && data.senderId===otherUserId && data.receiverId===currentUser._id && selectedConversation?.members.includes(data.receiverId) && selectedConversation?.members.includes(data.senderId))
        {
          setTyping(true)
        }
        clearTimeout(window.typingTimeout);
    window.typingTimeout = setTimeout(() => {
      setTyping(false)
    }, 500);
      })
    })
    useEffect(()=>
    {
      arrivalMessage!==null && selectedConversation!==null && selectedConversation && selectedConversation.members.includes(arrivalMessage.sender) && currentUser._id === arrivalMessage.receiver  && selectedConversation.members.includes(currentUser._id)  && setMessages((prev)=>[...prev,arrivalMessage])
    },[arrivalMessage])
    const handleKeyPress=(e)=>
    {
        const fun=async()=>
        {
          if(message!=="")
          {
            try 
            {
              if(tarConv)
              {
                const res=await axiosInstance.post(`/message/`,{conversationId:tarConv,sender:currentUser._id,message:message})
                socket?.emit("sendMessage",{senderId:currentUser._id,receiverId:targetId,text:message,conversationId:selectedConversation._id})
                setMessages([...messages,res.data])
                msgInp.current.value=""
                setMessage("")
                await axiosInstance.put(`/conversation/update/${Date.now()}/${selectedConversation._id}`)
              }
            }   
            catch(e)
            {
                console.clear()
            }
          }

        }
        e.code === "Enter" && currentUser && fun()
    }
    useEffect(()=>
    {
      try 
      {
        setLoading(true)
        const fun=async()=>
        {
          if(tarConv)
          {
            setLoading2(true)
            const res= await axiosInstance.get(`/message/${tarConv}`)
            setMessages(res.data)
            setLoading2(false)
          }
        }
        setLoading(false)
        fun()
      }
      catch(e)
      {
        console.clear()
      }
    },[tarConv])
    const handleTyping=(e)=>
    {
        setMessage(e.target.value)
        socket?.emit("sendTyper",{senderId:currentUser._id,receiverId:targetId,conversationId:selectedConversation._id})
    }
    const sendMessage=()=>
    {
        const fun=async()=>
        {
          if(message!=="")
          {
            try 
            {
               const res=await axiosInstance.post(`/message/`,{conversationId:tarConv,sender:currentUser._id,message:message})
               socket?.emit("sendMessage",{senderId:currentUser._id,receiverId:targetId,text:message,conversationId:selectedConversation._id})
               setMessages([...messages,res.data])
               msgInp.current.value=""
               setMessage("")
               await axiosInstance.put(`/conversation/update/${Date.now()}/${selectedConversation._id}`)
            }   
            catch(e)
            {
                console.clear()
            }
          }
        }
        currentUser && fun()
    }
    return(<>
    <Navbar/>
    <>
    <div style={{color:"rgb(55, 51, 115)",fontWeight:"bold",textAlign:"center",margin:"0px",fontSize:25,backgroundColor:"rgb(248, 249, 249)",padding:10}}>Messages</div>
    <div className="MessageSection" style={{backgroundColor:"rgb(248, 249, 249)",minHeight:"100vh",display:"flex",overflow:"hidden"}}>
    <div style={{margin:10}} className="messaging">
      <div className="inbox_msg">
        <div className="inbox_people">
          <div className="headind_srch">
            <div className="recent_heading">
              <h4 className="convName">Recent</h4>
            </div>
          </div>
          {conversations.slice().sort((a, b) => a.updatedAt > b.updatedAt ? -1 : 1).map(conversation=>
            {
                return <ChatFriend key={conversation._id} setTargetId={setTargetId} setTarConv={setTarConv} tarConv={tarConv} notificationId={null} socket={socket} setName={setName} conversation={conversation} unreadConvs={unreadConvs}/>
            })}
        </div>
        <div className="mesgs">
{loading2 ?
<div style={{fontWeight:"600",textAlign:"center",color:"#05728f",padding:20,fontWeight:"600",fontSize:15}}>
<div className="retChat">Retrieving chat</div>
<div><img className="loadingGif" width={50} src={LoadingGif}/></div>
</div> :      <>     
          <span className="convName" style={{borderBottom:"2px solid lightgrey",color:"#05728f",textAlign:"center",display:"block",margin:"0px auto",fontSize:15,fontWeight:"600",margin:"0px 0px 10px 0px",paddingBottom:10,color:"#373373"}}>
            {conversations.length===0 ? "You have no conversations" :  tarConv===null ? "Select a conversation to start" : `Conversation with ${name && name.charAt(0).toUpperCase() + name.slice(1)}`}
          </span>
          <div className="msg_history">
            {currentUser && messages.map(message=>
                {
                  if(message.sender===currentUser._id)
                  return (<><OutgoingMessage key={message._id} message={message}/><div ref={ref} /></>)
                  else
                  return (<><IncomingMessage key={message._id} message={message}/><div ref={ref} /></>)
                })}
          </div>
{typing &&           <div style={{display:"flex",alignItems:"center",gap:5,padding:5}}>
            <img style={{mixBlendMode:"multiply"}} src={typingGif} width={40} alt="Typing gif"/>
            <div style={{padding:5,fontFamily:"inherit"}}>{name} is typing...</div>
          </div>}
          <div className="type_msg">
{conversations.length!==0 && tarConv!==null &&             <div className="input_msg_write">
              <input ref={msgInp} onKeyPress={(e)=>{handleKeyPress(e)}} onChange={(e)=>{handleTyping(e)}} type="text" className="write_msg" placeholder="Type a message" />
            <div onClick={sendMessage} className="msg_send_btn"><SendIcon/></div>
          </div> }
        </div></>}
      </div>
    </div>      
  </div>
</div>
                </>
    <Footer/>
    </>)
}
export default Message
