import Navbar from "../components/Navbar"
import "./styles.css"
import MailIcon from '@mui/icons-material/Mail'
import LockIcon from '@mui/icons-material/Lock'
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
const ForgotPassword=()=>
{
    useEffect(()=>{window.scrollTo({ top: 0 });},[])
    const [open, setOpen] = useState(false);
    const [email,setEmail]=useState("")
    const handleClick=(e)=>
    {
        e.preventDefault()
          if(e.target.value!==0 || e.target.value!=="0" || e.target.value!==null || e.target.value!==undefined)
          {
                setTimeout(() => {
                setOpen(true)
            }, 2000);
          }
    }
    const handleClose = () => {
      setOpen(false);
    }
return(<div>
            <Navbar/>
            <div style={{overflow:"hidden"}} className="Login">
                <div className="">
                <div className="row">
                    <div className="col-lg-12">
                        <form onSubmit={(e)=>{handleClick(e)}} style={{display:"flex",flexDirection:"column",height:"40vh",justifyContent:"center",alignItems:"center",margin:"20px auto"}} className="resetForm">
                           <div className="row">
                           <div style={{fontWeight:"bold",fontSize:30}} className="col-12">
                           <div style={{textAlign:"center",padding:"20px 0px"}}>Reset Password</div>
                           <div style={{position:"relative"}}>
                           <input onChange={(e)=>{setEmail(e.target.value)}} className="inp inp2" style={{width:400,height:50,display:"block",margin:"0px auto",fontSize:20}} type="email" placeholder="Enter your Email"/>
                           </div>
                           </div>
                           </div>
                           <input style={{margin:"25px auto",display:"block",backgroundColor:"#373373",color:"#fff",borderRadius:5,padding:5,width:200,cursor:"pointer",borderColor:"transparent",textAlign:"center"}} type={"submit"} value={"Reset Password"}/>
                        </form>
                    </div>
                </div>
                </div>
            </div>
            <Dialog 
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent >
<span className="locationsBar DialogContent" style={{display:"block",textAlign:"center",width:300,backgroundColor:"#fff",height:"120px",color:"#373373",cursor:"pointer",padding:10,fontSize:20}}>
an email has been sent to you with instructions on how to reset your password.
</span>
        </DialogContent>
      </Dialog>
            <Footer/>
</div>)
}
export default ForgotPassword
