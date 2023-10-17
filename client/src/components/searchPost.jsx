import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { format } from "timeago.js";
const searchPost=({ad})=>
{
return(<>
      <Link style={{textDecoration:"none",color:"inherit",position:"relative"}} to={`/${ad.adType==="auto" ? "ad" : ad.adType==="service" ? "servicead" : ad.adType==="realestate" ? "realestatead" : ad.adType==="job" ? "jobad" : "petsad"}/${ad._id}`}>
      <div className="post">
      <div style={{maxHeight:"120px"}} className="imageContainer">
        <img style={{maxHeight:120}} className="cardImage" src={ad.Img[0]}/>
        </div>
        <div style={{width:"100%"}} className="cardDetails">
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{fontWeight:"bold",color:"#373373",fontSize:18}}>{ad.title[0].toUpperCase() + ad.title.slice(1).toLowerCase()}</div>
        {ad.adType==="job" ? <div className="priceForMobile" style={{color:"green",fontWeight:"bold",fontSize:20}}>{"$"}{ad.salary===45000 ? "40,000 - 50,000 / Year" : ad.salary===55000 ? "50,000 - 60,000 / Year" : ad.salary===65000 ? "60,000 - 70,000 / Year" : ad.salary===75000 ? "70,000 - 80,000 / Year" : ad.salary===85000 ? "80,000 - 90,000 / Year" : ad.salary===95000 ? "90,000 - 100,000 / Year" : "100,000 / Year"}</div> :  <div className="priceForMobile" style={{color:"green",fontWeight:"bold",fontSize:20}}>{"$"}{ad.price?.toLocaleString() && ad.price.toLocaleString()}</div>}
        </div>
       <div style={{height:3}}></div>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div className="location">{ad.location==="Newfoundland and Labrador" ? "Newfoundland" : ad.location}</div>
            <div>|</div>
            <div>{format(ad.createdAt)}</div>
        </div>
        <div style={{height:3}}></div>
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
