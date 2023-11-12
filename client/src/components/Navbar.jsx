import "./styles.css"
import Icon from "../resources/logo.png"
import GpsNotFixedIcon from '@mui/icons-material/GpsNotFixed'
import { Link, useNavigate } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search'
import styled from "styled-components"
import { useEffect,useState } from "react"
import * as React from 'react';
import { useDispatch, useSelector } from "react-redux"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import {changeLoc} from "../redux/location"
import { logOut } from "../redux/userSlice"
import Menu from '@mui/material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import { addQuery } from "../redux/search"
import { axiosInstance } from "../config/Config.js"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
const Navbar=({logged,val,setVal})=>
{
    const {currentUser}=useSelector(state=>state.user)
    const [open, setOpen] = useState(false);
    const [locPopUp,setLocPopUp]=useState(false)
    const dispatch=useDispatch()
    const {location}=useSelector(state=>state.location)
    const [category,setCategory]=useState("")
    const [titles,setTitles]=useState([])
    const [searchQuery,setSearchQuery]=useState("")
    const navigate=useNavigate()
    useEffect(()=>
    {
      const fun=async()=>
      {
        const res=await axiosInstance.get(`/Auth/gettitles/${location}`)
        setTitles(res.data)
      }
      fun()
    },[])
    const handleLogOut=()=>
    {
      dispatch(logOut())
      window.location.reload();
      navigate("/")
    }
    const handleCategoryChange=(e)=>
    {
      setCategory(e.target.value)
    }

    const handleSearch=()=>
    {
      const fun=async()=>
      {
        searchQuery.length>0 && navigate(`/search/${searchQuery}`)
      }
      fun()
    }
    const chgLoc=(loc)=>
    {
      dispatch(changeLoc(loc))
      setOpen(false)
      window.location.reload()
    }
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    const TopLine=styled.div
    `
    width:100%;
    height:5px;
    background-color: #373373;
    transition-duration: 0.3s;
    `

return(<div style={{overflow:"hidden"}}>
        <div >
      <Dialog 
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent >
<span className="locationsBar DialogContent" style={{display:"block",textAlign:"center",width:300,backgroundColor:"#fff",height:610,color:"#373373",cursor:"pointer",padding:10,fontSize:20}}>
<ul onClick={()=>{chgLoc("Canada")}} className="pElements">All provinces</ul>
<ul onClick={()=>{chgLoc("Alberta")}} className="pElements">Alberta</ul>
<ul onClick={()=>{chgLoc("British Colombia")}} className="pElements">British Colombia</ul>
<ul onClick={()=>{chgLoc("Manitoba")}} className="pElements">Manitoba</ul>
<ul onClick={()=>{chgLoc("New Brunswick")}} className="pElements">New Brunswick</ul>
<ul onClick={()=>{chgLoc("Newfoundland and Labrador")}} className="pElements">Newfoundland and Labrador</ul>
<ul onClick={()=>{chgLoc("Northwest Territories")}} className="pElements">Northwest Territories</ul>
<ul onClick={()=>{chgLoc("Nova Scotia")}} className="pElements">Nova Scotia</ul>
<ul onClick={()=>{chgLoc("Nunavut")}} className="pElements">Nunavut</ul>
<ul onClick={()=>{chgLoc("Ontario")}} className="pElements">Ontario</ul>
<ul onClick={()=>{chgLoc("Prince Edward Island")}} className="pElements">Prince Edward Island</ul>
<ul onClick={()=>{chgLoc("Quebec")}} className="pElements">Quebec</ul>
<ul onClick={()=>{chgLoc("Saskatchewan")}} className="pElements">Saskatchewan</ul>
<ul onClick={()=>{chgLoc("Yukon")}} className="pElements">Yukon</ul>
</span>
        </DialogContent>
      </Dialog>
    </div>
<TopLine></TopLine>
<br/>
<div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"flex-start",width:"25%"}}>
      <Link style={{textDecoration:"none",color:"inherit"}} to="/">
      <img className="navLogo" width={100} height={50} src={"https://i.ibb.co/n6gCFrD/logo.png"} alt="Logo"/>
      </Link>
      </div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"80%"}}>
    <div style={{display:"flex",alignItems:"center"}}>
<Autocomplete className="adjustWidth" style={{width:500}} disablePortal id="combo-box-demo" options={titles} renderInput={(params) => <TextField onSelect={(e)=>{setSearchQuery(e.target.value)}} onChange={(e)=>{setSearchQuery(e.target.value)}} {...params} label="" />}/>
<input onClick={handleSearch} style={{width:100}} className="InputBtn" type="submit" value="Search"/>
</div>
<div onClick={handleClickOpen} >
<ul style={{width:190,cursor:"pointer"}} className="area" onClick={()=>{setOpen(true)}}><><GpsNotFixedIcon/></><span className="navLocation signin" style={{fontSize:`${!currentUser? 10 : 15}`,fontWeight:"600"}}>{location==="Newfoundland and Labrador" ? "Newfoundland" : location}</span></ul>
</div>
      </div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"flex-end",width:"25%"}}>
      <div style={{display:"flex",alignItems:"center",gap:5}} >
{!currentUser && <Link style={{textDecoration:"none"}} to="/login"><button className="AdBtn signinbtn">Sign In</button></Link>}        
{currentUser ? <Link className="postAdBtn" style={{textDecoration:"none"}} to="/postad"><button className="AdBtn PostAddd">Post Ad</button></Link> : <Link style={{textDecoration:"none"}} to="/register"><button className="AdBtn register">Register</button></Link>}
{currentUser &&  <PopupState className="demo-popup-menu" variant="popper" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button className="popupstate" style={{border:"none",outline:"none"}} {...bindTrigger(popupState)}>
          <AccountCircleIcon className="popupstatebutton" style={{color:"#373373",fontSize:45}}/> 
          </Button>
          <Menu {...bindMenu(popupState)}>
            <div style={{minWidth:200,textAlign:"center",fontWeight:"600"}}>
                Welcome {currentUser.name && currentUser.name.charAt(0).toUpperCase() + currentUser.name.slice(1)}!
            </div>
            <div style={{height:1,width:200,backgroundColor:"grey"}}></div>
            <Link style={{textDecoration:"none",color:"inherit"}} to="/">
            <MenuItem style={{textAlign:"center",margin:"0px auto",display:"block"}} onClick={popupState.close}>Home</MenuItem>
            </Link>
            <Link className="PostAd" style={{textDecoration:"none",color:"inherit"}} to="/postad">
            <MenuItem style={{textAlign:"center",margin:"0px auto",display:"block"}} onClick={popupState.close}>Post Ad</MenuItem>
            </Link>
            <Link style={{textDecoration:"none",color:"inherit"}} to={`/message/1`}>
            <MenuItem style={{textAlign:"center",margin:"0px auto",display:"block"}} onClick={popupState.close}>Messages</MenuItem>
            </Link>
            <Link style={{color:"inherit",textDecoration:"none"}} to={`/user/${currentUser._id}`}>
            <MenuItem style={{textAlign:"center",margin:"0px auto",display:"block"}} onClick={popupState.close}>Your Ads</MenuItem>
            </Link>
            <MenuItem style={{textAlign:"center",margin:"0px auto",display:"block"}} onClick={handleLogOut}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>}
<div>
</div>
</div>
      </div>
      </div>
      <br/>
    <div className="container navElements">
        <div className="row">
            <div style={{textAlign:"center",display:"flex",gap:"15%",justifyContent:"center",padding:10,fontWeight:"400"}} className="col-lg-12 navOptions">
            <Link style={{textDecoration:"none",color:"inherit"}} to="/autosbasedoncondition/con+any+condition">
           <div className="elements">Cars</div>
            </Link>
            <Link style={{textDecoration:"none",color:"inherit"}} to="/real-estate/ads">
            <div className="elements">Real Estate</div>
            </Link>
            <Link style={{textDecoration:"none",color:"inherit"}} to="/jobs/jobs">
            <div className="elements">Jobs</div>
            </Link>
            <Link style={{textDecoration:"none",color:"inherit"}} to="/services">
            <div className="elements">Services</div>
            </Link>
            <Link style={{textDecoration:"none",color:"inherit"}} to="/pets">
            <div className="elements">Pets</div>
            </Link>
            </div>
        </div>
    </div>
</div>)
}
export default Navbar


