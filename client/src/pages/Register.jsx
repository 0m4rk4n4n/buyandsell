import Navbar from "../components/Navbar"
import "./styles.css"
import MailIcon from '@mui/icons-material/Mail'
import LockIcon from '@mui/icons-material/Lock'
import Footer from "../components/Footer"
import PersonIcon from '@mui/icons-material/Person'
import { Link, useNavigate } from "react-router-dom"
import { axiosInstance } from "../config/Config.js"
import { useEffect, useState } from "react"
import { loginStart,loginFailure,loginSuccess } from "../redux/userSlice"
import { useDispatch, useSelector } from "react-redux"
import Giphy from "../resources/giphy.gif"
import PhoneIcon from '@mui/icons-material/Phone'
const Register=()=>
{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [msg,setMsg]=useState(false)
    const {currentUser}=useSelector(state=>state.user)
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [alreadyRegisteredMsg,setAlreadyRegisteredMsg]=useState(false)
    const [password1,setPassword1]=useState("")
    const [password2,setPassword2]=useState("")
    const [phone,setPhone]=useState(0)
    const [msgg,setMsgg]=useState(false)
    const [loading,setLoading]=useState(false)
    const [passwordLengthMsg,setPasswordLengthMsg]=useState(false)
    const [passwordsEqual,setPasswordsEqual]=useState(false)
    useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[])
    useEffect(()=>
    {
password1===password2 ? setPasswordsEqual(true) : setPasswordsEqual(false)
    },[password1,password2])
    const handleRegisteration=(e)=>
    {
   
        e.preventDefault()
        const fun=async()=>
        {
            setLoading(true)
            if(phone.length===10)
            {
                if(passwordsEqual && password2.length<10)
                {
                    setPasswordLengthMsg(true)
                }
                else
                {
                    try 
                    {
                        dispatch(loginStart())
                        const res=await axiosInstance.post("/Auth/register/",{name:name,email:email,password:password1,phone:phone})
                        await axiosInstance.post(`/conversation`,{senderId:"65249962de83e8e0dbce8ec9",receiverId:res.data._id})
                        const ress=await axiosInstance.get(`/conversation/getaconversation/65249962de83e8e0dbce8ec9/${res.data._id}`)
                        await axiosInstance.post(`/message`,{conversationId:ress.data._id,sender:"65249962de83e8e0dbce8ec9",message:`Hello ${res.data.name && res.data.name && res.data.name.charAt(0).toUpperCase() + res.data.name.slice(1)}, Thank you for using Sellsphere. This is a friendly reminder that conversations can't be made through this section. Users may go to an Ad they like and start a conversation from there. Thank you for using our service, Sellsphere Team`})
                        passwordsEqual && res.status===200  && dispatch(loginSuccess(res.data)) && navigate("/user-main-page")
                    }
                    catch(e)
                    {
                        e.response.status===409 && setAlreadyRegisteredMsg(true)
                        console.clear()
                        dispatch(loginFailure())
                        setMsg(true)
                    }
                }

            }
            else 
            {
                setMsgg(true)
            }
            setLoading(false)
        }
        fun()

    }
return(<div>
            <Navbar/>
            <div style={{overflow:"hidden"}} className="Register">
                <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="formforRegisteration">
                           <div className="row">
                           <form onSubmit={(e)=>{handleRegisteration(e)}} style={{padding:"40px 80px",fontWeight:"bold",fontSize:20}} className="col-8">
                           <div style={{padding:"0px 40px"}}>Register</div>
                           <div style={{position:"relative"}}>
                           <input required onChange={(e)=>{setName(e.target.value)}} className="inp" style={{margin:"15px 40px",padding:10,width:500,height:50}} type="text" placeholder="Username"/>
                           <PersonIcon style={{position:"absolute",top:28,left:45}}/>
                           </div>
                           <div style={{margin:"0px 40px",fontSize:15,color:"grey",width:500}}>Your username will be displayed on your public profile.</div>
                           <div style={{position:"relative"}}>
                           <input required onChange={(e)=>{setEmail(e.target.value)}} className="inp" style={{margin:"15px 40px",padding:10,width:500,height:50}} type="email" placeholder="Email"/>
                           <MailIcon style={{position:"absolute",top:28,left:45}}/>
                           </div>
                           <div style={{position:"relative"}}>
                           <input required onChange={(e)=>{setPhone(e.target.value)}} className="inp" style={{margin:"15px 40px",padding:10,width:500,height:50}} type="number" placeholder="Phone number"/>
                           <PhoneIcon style={{position:"absolute",top:28,left:45}}/>
                           </div>
                           <div style={{position:"relative"}}>
                           <input required onChange={(e)=>{setPassword1(e.target.value)}} className="inp" style={{margin:"15px 40px",padding:10,width:500,height:50}} type="password" placeholder="Password"/>
                           <LockIcon style={{position:"absolute",top:28,left:45}}/>
                           </div>
                           <div style={{position:"relative"}}>
                           <input required onChange={(e)=>{setPassword2(e.target.value)}} className="inp" style={{margin:"15px 40px",padding:10,width:500,height:50}} type="password" placeholder="Re-enter Password"/>
                           <LockIcon style={{position:"absolute",top:28,left:45}}/>
                           </div>
                           <div style={{color:"red",display:`${passwordsEqual ? "none" : "block"}`,fontSize:15,padding:"0px 40px"}}>Passwords don't match</div>
                           {alreadyRegisteredMsg && <div style={{margin:"10px 40px",color:"crimson",borderRadius:5,padding:5,width:350,cursor:"pointer"}}>This email is already registered</div>}
                           {passwordLengthMsg && <div style={{margin:"10px 40px",color:"crimson",borderRadius:5,padding:5,fontWeight:"bold",fontSize:12,width:350,cursor:"pointer"}}>Password needs to contain at least 10 characters</div>}
                           {msgg && <div style={{margin:"10px 40px",color:"crimson",borderRadius:5,padding:5,width:320,fontWeight:"bold",fontSize:12,cursor:"pointer"}}>Phone number needs to be 10 digits</div>}
                           {loading ? <div style={{margin:"10px 40px",display:"block",textAlign:"center",mixBlendMode:"hard-light",borderRadius:5,padding:5,width:100,cursor:"pointer",borderColor:"transparent"}}><img src={Giphy} alt="loading gif"/></div> : <input type="submit" value="Create an account" style={{margin:"10px 40px",backgroundColor:"#373373",color:"#fff",borderRadius:5,padding:5,width:250,cursor:"pointer",borderColor:"transparent"}}/>}
                                 </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 hideThisOnMobile">
                    <div className="SignInInstead regNow"> 
                    <div style={{textAlign:"center",fontWeight:"bold",padding:20,color:"#373373"}}>Already Registered?</div>
                    <h6 style={{textAlign:"center",padding:10,fontSize:15,color:"#373373",fontWeight:"600"}}>Sign in to post your ad.</h6>
                    <Link style={{textDecoration:"none",color:"inherit"}} to="/login ">
                    <button style={{margin:"20px auto",display:"block",backgroundColor:"#373373",color:"#fff",borderRadius:5,padding:6,cursor:"pointer",borderColor:"transparent",width:150}}>Sign In</button>
                    </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div style={{overflow:"hidden",display:"none",minHeight:"50vh",textAlign:"center",margin:"5px auto",backgroundColor:"#fff",width:400}} className="form2">
                    <div className="signInTitle">
                        Register
                    </div>
                    <form onSubmit={(e)=>{handleRegisteration(e)}}>
                    <div style={{position:"relative"}}>
                           <input required onChange={(e)=>{setName(e.target.value)}} className="inp" style={{margin:"15px 40px",padding:10,width:320,height:50}} type="text" placeholder="Username"/>
                           <PersonIcon style={{position:"absolute",top:28,left:45}}/>
                           </div>
                           <div style={{margin:"0px 40px",fontSize:12,fontWeight:"bold",color:"grey",width:320}}>Your username will be displayed on your public profile.</div>
                                               <div className="inpDiv" style={{position:"relative"}}>
                           <input required onChange={(e)=>{setEmail(e.target.value)}} className="inp" style={{margin:"15px 40px",padding:10,width:320,height:50}} type="email" placeholder="Email"/>
                           <MailIcon style={{position:"absolute",top:28,left:45}}/>
                           </div>
                           <div className="inpDiv" style={{position:"relative"}}>
                           <input required onChange={(e)=>{setPhone(e.target.value)}} className="inp" style={{margin:"15px 40px",padding:10,width:320,height:50}} type="number" placeholder="Phone number"/>
                           <PhoneIcon style={{position:"absolute",top:28,left:45}}/>
                           </div>
                           <div className="inpDiv" style={{position:"relative"}}>
                           <input required onChange={(e)=>{setPassword1(e.target.value)}} className="inp" style={{margin:"15px 40px",padding:10,width:320,height:50}} type="password" placeholder="Password"/>
                           <LockIcon style={{position:"absolute",top:28,left:45}}/>
                           </div>
                           <div className="inpDiv" style={{position:"relative"}}>
                           <input required onChange={(e)=>{setPassword2(e.target.value)}} className="inp" style={{margin:"15px 40px",padding:10,width:320,height:50}} type="password" placeholder="Re-enter Password"/>
                           <LockIcon style={{position:"absolute",top:28,left:45}}/>
                           </div>
                           <div style={{color:"red",display:`${passwordsEqual ? "none" : "block"}`,fontSize:12,padding:"0px 40px",fontWeight:"bold"}}>Passwords don't match</div>
                           {alreadyRegisteredMsg && <div style={{margin:"10px auto",color:"crimson",borderRadius:5,padding:5,width:320,fontWeight:"bold",cursor:"pointer",textAlign:"center"}}>This email is already registered</div>}
                           {passwordLengthMsg && <div style={{margin:"10px auto",fontWeight:"bold",color:"crimson",borderRadius:5,padding:5,fontWeight:"bold",fontSize:12,width:350,cursor:"pointer"}}>Password needs to contain at least 10 characters</div>}
                           {msgg && <div style={{margin:"10px auto",color:"crimson",borderRadius:5,padding:5,width:320,fontWeight:"bold",fontSize:12,cursor:"pointer"}}>Phone number needs to be 10 digits</div>}
                           <Link style={{textDecoration:"none",color:"inherit"}} to="/login">
                           <div style={{textAlign:"center",fontWeight:"bold",padding:5,color:"#373373"}}>Already registered? Sign in instead</div>
                           </Link>
                           <div className="leaveSpace" style={{display:"none",height:"5px"}}></div>
                           <div className="leaveSpace" style={{display:"none",height:"20px"}}></div>
                           {loading ? <div style={{margin:"0px auto",mixBlendMode:"hard-light",color:"#fff",borderRadius:5,padding:5,width:100,cursor:"pointer",borderColor:"transparent"}}><img src={Giphy} alt="loading gif"/></div> : <input type="submit" value="Create an account" style={{margin:"10px 40px",backgroundColor:"#373373",color:"#fff",borderRadius:5,padding:5,width:250,cursor:"pointer",borderColor:"transparent"}}/>}
                </form>
                </div>
            <Footer/>
</div>)
}
export default Register
