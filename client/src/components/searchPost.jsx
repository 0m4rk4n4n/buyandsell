import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { format } from "timeago.js";
const searchPost=({ad})=>
{
return(<>
      <Link style={{textDecoration:"none",color:"inherit",position:"relative"}} to={`/${ad.adType==="auto" ? "ad" : ad.adType==="service" ? "servicead" : ad.adType==="realestate" ? "realestatead" : ad.adType==="job" ? "jobad" : "petsad"}/${ad._id}`}>
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
        <div className="desc paddingOff">
        {ad.description.length>180 ? ad.description.slice(0,180)+"..." : ad.description}
            </div>
            <div style={{display:"none"}} className="descForMobile">
                <br/>
        {ad.description.length>70 ? ad.description.slice(0,70)+"..." : ad.description}
            </div>
            <br/>
            <div className="textSizeForMobile" style={{display:"flex",alignItems:"center",position:"absolute",bottom:10}}>
            <div className="location locationPost" style={{fontWeight:"bold",fontSize:12}} >From {ad.adType==="auto" ? "Autos" : ad.adType==="pet" ? "Pets" : ad.adType==="service" ? "Services" : ad.adType==="realestate" ? "Real Estate" : "Jobs"} in {ad.location==="Newfoundland and Labrador" ? "Newfoundland" : ad.location}</div>
        </div>
        </div>
    </div>
      </Link>
</>)
}
export default searchPost
