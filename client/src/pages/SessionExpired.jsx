import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../redux/userSlice"
const SessionExpired=()=>
{
const [timer,setTimer]=useState(false)
const dispatch=useDispatch()
const navigate=useNavigate()
useEffect(()=>
{
    dispatch(logOut())
    setTimeout(() => {
        setTimer(true)
    }, 1200);
},[])
timer && navigate("/login")
return(<div style={{fontWeight:"600",fontSize:30,  display:"flex",alignItems:"center",justifyContent: "center",height: "100vh"}}>Your Session Has expired! You are being redirected to the login page.</div>)
}
export default SessionExpired