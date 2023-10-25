import { useState } from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { format } from "timeago.js";
const ServicesPost=({ad})=>
{
const {location}=useSelector(state=>state.location)
const [desc,setDesc]=useState(" 7 seaters , runs good , winter tires , heated seats , 3.6 Engine, fully loaded, sunroof, clean title RTL Active status Alberta Registered Phone: (825-994-5299)")
return(<>
      <Link style={{textDecoration:"none",color:"inherit"}} to={`/servicead/${ad._id}`}>
      <div style={{position:"relative"}} className="post">
      <div style={{maxHeight:120}} className="imageContainer imgHeight">
        <img style={{display:"flex",justifyContent:"center",maxHeight:120}} className="cardImage imgHeight" src={ad.Img[0]}/>
        </div>
        <div style={{width:"100%"}} className="cardDetails">
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div className="autoTitle" style={{fontWeight:"bold",color:"#373373",fontSize:22}}>{ad.title[0].toUpperCase() + ad.title.slice(1)}</div>
        <div className="priceForMobile" style={{color:"green",fontWeight:"bold",fontSize:20}}>{"$"}{ad.price.toLocaleString() && ad.price.toLocaleString()}</div>
        </div>

        <div className="detailsforMobile" style={{display:"flex",alignItems:"center",gap:10}}>
        <div className="location">{ad.location}</div>
            <div>|</div>
            <div>{format(ad.createdAt)}</div>
        </div>
        <div className="desc">
        {ad.description.length>180 ? ad.description.slice(0,180)+"..." : ad.description}
            </div>
            <div style={{display:"none",paddingTop:15}} className="descForMobile">
            {ad.description.length>110 ? ad.description.slice(0,110)+"..." : ad.description}
            </div>
        </div>  
        </div>
      </Link> 
</>)
}
export default ServicesPost
