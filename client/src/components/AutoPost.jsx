import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { format } from "timeago.js";
const AutoPost=({ad})=>
{
return(<>
      <Link style={{textDecoration:"none",color:"inherit"}} to={`/ad/${ad._id}`}>

      <div style={{position:"relative"}} className="post">
      <div style={{maxHeight:120}} className="imageContainer imgHeight">
        <img style={{display:"flex",justifyContent:"center",maxHeight:120}} className="cardImage imgHeight" src={ad.Img[0]}/>
        </div>
        <div style={{width:"100%"}} className="cardDetails">
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div className="autoTitle" style={{fontWeight:"bold",color:"#373373",fontSize:22}}>{ad.title[0].toUpperCase() + ad.title.slice(1)}</div>
        <div className="priceForMobile" style={{color:"green",fontWeight:"bold",fontSize:20}}>{"$"}{ad.price.toLocaleString()}</div>
        </div>
        <div className="detailsforMobile" style={{display:"flex",alignItems:"center",gap:10}}>
            <div className="location">{ad.location==="Newfoundland and Labrador" ? "Newfoundland" : ad.location}</div>
            <div>|</div>
            <div>{format(ad.createdAt)}</div>
        </div>
        <div className="desc">
        {ad.description.length>180 ? ad.description.slice(0,180)+"..." : ad.description}
            </div>
            <div style={{display:"none",paddingTop:5,whiteSpace:"break-spaces"}} className="descForMobile">
        {ad.description.length>60 ? ad.description.slice(0,60)+"..." : ad.description}
            </div>
            <br/>
            <div className="mainTextSizeForMobile" style={{display:"flex",alignItems:"center",gap:10}}>
            <div className="textSizeForMobile location" style={{fontWeight:"bold"}} >{ad.make[0].toUpperCase() + ad.make.slice(1).toLowerCase()}</div>
            <div className="textSizeForMobile" style={{fontWeigt:"bold"}}>|</div>
            <div className="textSizeForMobile location" style={{fontWeight:"bold"}} >{ad.fuelType[0].toUpperCase() + ad.fuelType.slice(1).toLowerCase()}</div>
            <div className="textSizeForMobile" style={{fontWeigt:"bold"}}>|</div>
            <div className="textSizeForMobile location" style={{fontWeight:"bold"}} >{ad.color[0].toUpperCase() + ad.color.slice(1)}</div>
            <div className="textSizeForMobile" style={{fontWeigt:"bold"}}>|</div>
            <div className="textSizeForMobile location" style={{fontWeight:"bold"}} >{ad.transmission[0].toUpperCase() + ad.transmission.slice(1)}</div>
            <div className="textSizeForMobile" style={{fontWeigt:"bold"}}>|</div>
            <div className="textSizeForMobile" style={{fontWeight:"bold"}}>{ad.kilometers && ad.kilometers.toLocaleString()} KM</div>
        </div>
        </div>
    </div>
      </Link>
</>)
}
export default AutoPost
