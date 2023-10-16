import Navbar from "../components/Navbar"
import "./styles.css"
import MailIcon from '@mui/icons-material/Mail'
import LockIcon from '@mui/icons-material/Lock'
import Footer from "../components/Footer"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { loginStart,loginFailure,loginSuccess } from "../redux/userSlice"
import { useDispatch } from "react-redux"
import Giphy from "../resources/giphy.gif"
import { axiosInstance } from "../config/Config.js"
const Login=()=>
{   
    const [res,setRes]=useState(true)
    const [counter,setCounter]=useState(0)
    const [loading,setLoading]=useState(false)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [msg,setMsg]=useState(false)
    useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[])
    const handleLogin=(e)=>
    {
        e.preventDefault()
        const fun=async()=>
        {
            setCounter(state=>state+1)
            try 
            {
                setLoading(true)
                dispatch(loginStart())
               const res= await axiosInstance.post("/Auth/login/",{email:email,password:password}) 
               res.status===200 && dispatch(loginSuccess(res.data)) && navigate("/user-main-page")
               res.status!==200 && setRes(false)
               setLoading(false)
            }
            catch(e)
            {
                setLoading(true)
                console.clear()
                dispatch(loginFailure())
                setMsg(true)
                setLoading(false)
            }
        }
        fun()
    }
    const [keepmesignedin,setKeepmysignedin]=useState(0)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
return(<div>
            <Navbar/>
            <div className="Login" style={{overflow:"hidden"}}>
                <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 dpBlockforPhone centerSections adjustwidth">
                        <div className="form">
                           <form onSubmit={(e)=>{handleLogin(e)}} className="row">
                           <div  style={{padding:"40px 80px",fontWeight:"bold",fontSize:20}} className="col-8 chgPadding">
                           <div className="centerElements" style={{padding:"0px 40px"}}>Sign In</div>
                           <div className="inpDiv" style={{position:"relative"}}>
                           <input required onChange={(e)=>{setEmail(e.target.value)}} className="inp" style={{margin:"15px 40px",padding:10,width:500,height:50}} type="email" placeholder="Email"/>
                           <MailIcon className="InpIcons" style={{position:"absolute",top:28,left:45}}/>
                           </div>
                           <div className="inpDiv" style={{position:"relative"}}>
                           <input required onChange={(e)=>{setPassword(e.target.value)}} className="inp" style={{margin:"15px 40px",padding:10,width:500,height:50}} type="password" placeholder="Password"/>
                           <LockIcon className="InpIcons" style={{position:"absolute",top:28,left:45}}/>
                           </div>
                           <Link style={{textDecoration:"none",color:"inherit"}} to="/forgot-password">
                           <div className="centerElements" style={{padding:"10px 40px",margin:"10px 0px",color:"#2681db",fontSize:16}}>Forgot Password?</div>
                           </Link>
                           <div style={{padding:"0px 40px",fontSize:18,color:"red",marginBottom:12,display:`${msg ? "block" : "none"}`}}>Wrong Email or Password</div>
                           {loading? <img style={{width:100,margin:"10px 40px",mixBlendMode:"hard-light"}} src={Giphy} alt="loading gif"/> :                            <input className="signinInput" type="submit" value="Sign In" style={{margin:"0px 40px",backgroundColor:"#373373",color:"#fff",borderRadius:5,padding:5,width:150,cursor:"pointer",borderColor:"transparent"}}/>}

                                 </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 dpBlockforPhone centerSections hideThisOnMobile">
                    <div className="regNow">
                    <div style={{textAlign:"center",fontWeight:"bold",padding:20,color:"#373373"}}>Not registered yet?</div>
                    <h6 style={{textAlign:"center",padding:10,fontSize:15,color:"#373373",fontWeight:"600"}}>Register now to post, edit, and manage ads. It's quick, easy, and free!</h6>
                    <Link style={{textDecoration:"none",color:"inherit"}} to="/register">
                    <button style={{margin:"20px auto",display:"block",backgroundColor:"#373373",color:"#fff",borderRadius:5,padding:10,cursor:"pointer",borderColor:"transparent",width:150}}>Register Now</button>
                    </Link>
                    </div>
                    </div>
                </div>
                </div>
                <div>
                </div>
                </div>
                <div style={{overflow:"hidden",display:"none",height:"50vh",textAlign:"center",margin:"1px auto",backgroundColor:"#fff",width:400}} className="form2">
                    <div className="signInTitle">
                        Sign In
                    </div>
                    <form onSubmit={(e)=>{handleLogin(e)}}>
                                               <div className="inpDiv" style={{position:"relative"}}>
                           <input required onChange={(e)=>{setEmail(e.target.value)}} className="inp" style={{margin:"15px 40px",padding:10,width:320,height:50}} type="email" placeholder="Email"/>
                           <MailIcon style={{position:"absolute",top:28,left:45}}/>
                           </div>
                           <div className="inpDiv" style={{position:"relative"}}>
                           <input required onChange={(e)=>{setPassword(e.target.value)}} className="inp" style={{margin:"15px 40px",padding:10,width:320,height:50}} type="password" placeholder="Password"/>
                           <LockIcon style={{position:"absolute",top:28,left:45}}/>
                           </div>
                           
                           <Link style={{textDecoration:"none",color:"inherit"}} to="/register">
                           <div style={{textAlign:"center",fontWeight:"bold",padding:5,color:"#373373"}}>Create an account</div>
                           </Link>
                           <div className="leaveSpace" style={{display:"none",height:"5px"}}></div>
                           <Link style={{textDecoration:"none",color:"inherit"}} to="/forgot-password">
                           <div style={{textAlign:"center",fontWeight:"bold",padding:5,color:"#373373"}}>Forgot password?</div>
                           </Link>
                           <div className="leaveSpace" style={{display:"none",height:"20px"}}></div>
                           <div style={{padding:"0px 40px",fontSize:18,color:"red",marginBottom:12,display:`${msg ? "block" : "none"}`}}>Wrong Email or Password</div>
                           {loading? <img style={{width:100,margin:"0px 40px",mixBlendMode:"hard-light"}} src={Giphy} alt="loading gif"/> :                            <input className="signinInput" type="submit" value="Sign In" style={{margin:"10px 40px",backgroundColor:"#373373",color:"#fff",borderRadius:5,padding:3,width:150,cursor:"pointer",borderColor:"transparent"}}/>}
                </form>
                </div>
            <Footer/>
</div>)
}
export default Login