import { useDispatch, useSelector } from "react-redux"
import "./styles.css"
import { Link } from "react-router-dom"
import { logOut } from "../redux/userSlice"
const Footer=()=>
{
    const {currentUser}=useSelector(state=>state.user)
    const dispatch=useDispatch()
    const handleLogout=()=>
    {
     dispatch(logOut())   
    }
return(<div className="footer">
<div className="hide00">
    <div className="changeGap" style={{paddingTop:"3%",padding:"0px 80px",display:"flex",alignItems:"center",gap:"20%"}}>
        <div  className="hide01">
        <div style={{color:"#fff",fontWeight:"bold",paddingTop:"16%"}}>About Buy and Sell</div>
        <br/>
        <p className="par" style={{color:"#fff",width:550}}>
    Are you looking to buy or sell cars, real estate, find the perfect job, access essential services, or even find a loving pet to bring into your home? Look no further! Buy and Sell is your comprehensive online platform designed to meet all your buying and selling needs. With our easy-to-use and intuitive interface, you can navigate through a wide range of listings, connect with other users, and make transactions with confidence. <Link to="/about">Learn More</Link>
    </p>
        </div>
        <div className="drag" style={{marginTop:"5%"}}>
        <div className="buyandsell" style={{color:"#fff",fontWeight:"bold"}}>Buy and Sell Ads</div>
        <div style={{color:"#fff",textAlign:"center"}}>
        <Link to="/autosbasedoncondition/con+any+condition" style={{marginTop:10,color:"inherit",display:"inherit"}}>Cars</Link>
        <Link to="/real-estate/ads" style={{marginTop:10,color:"inherit",display:"inherit"}}>Real Estate</Link>
        <Link to="/jobs/jobs" style={{marginTop:10,color:"inherit",display:"inherit"}}>Jobs</Link>
        <Link to="/services" style={{marginTop:10,color:"inherit",display:"inherit"}}>Services</Link>
        <Link to="/pets" style={{marginTop:10,color:"inherit",display:"inherit"}}>Pets</Link>
        </div>
        </div>
{!currentUser &&         <div style={{marginTop:"5%"}}>
        <div className="class34" style={{color:"#fff",fontWeight:"bold",textAlign:"center"}}>Popular Ads </div>

        <div to="" style={{color:"#fff",textAlign:"center"}}>
        <Link to="/autosbasedoncondition/New" style={{marginTop:10,color:"inherit",display:"inherit"}}>Brand New Cars</Link>
        <Link to="/autosbasedoncondition/Used" style={{marginTop:10,color:"inherit",display:"inherit"}}>Used Cars</Link>
        <Link to="/autosbasedoncondition/Electric" style={{marginTop:10,color:"inherit",display:"inherit"}}>Electric Vehicles</Link>
        <Link to="/real-estate/Houses-For-Sale" style={{marginTop:10,color:"inherit",display:"inherit"}}>Houses for sale</Link>
        <Link to="/real-estate/Long-Term-Rentals" style={{marginTop:10,color:"inherit",display:"inherit"}}>Rentals</Link>
        </div>
        </div>}
{currentUser && <div className="drag" style={{marginTop:"5%"}}>
        <div style={{color:"#fff",fontWeight:"bold",textAlign:"center"}}>Tools </div>

        <div style={{color:"#fff",textAlign:"center"}}>
        <Link to="/" style={{marginTop:10,color:"inherit",display:"inherit"}}>Home</Link>
        <Link to="/postad" style={{marginTop:10,color:"inherit",display:"inherit"}}>Post an Ad</Link>
        <Link to="/message/1" style={{marginTop:10,color:"inherit",display:"inherit"}}>Messages</Link>
        <Link to={`/user/${currentUser._id}`} style={{marginTop:10,color:"inherit",display:"inherit"}}>Your Ads</Link>
        <Link onClick={handleLogout} to="/" style={{marginTop:10,color:"inherit",display:"inherit"}}>Logout</Link>
        </div>
        </div>}
    </div>
        <div style={{display:"none"}} className="show01">
        <div style={{color:"#fff",fontWeight:"bold",marginTop:"5%"}}>About Buy and Sell</div>
     <br/>
        <p className="par" style={{color:"#fff",minWidth:"70%",textAlign:"center",margin:"10px auto"}}>
    Are you looking to buy or sell cars, real estate, find the perfect job, access essential services, or even find a loving pet to bring into your home? Look no further! Buy and Sell is your comprehensive online platform designed to meet all your buying and selling needs. With our easy-to-use and intuitive interface, you can navigate through a wide range of listings, connect with other users, and make transactions with confidence. <Link to="/about">Learn More</Link>
    </p>
    <br/>
        </div>
</div> 
</div>
)
}
export default Footer
