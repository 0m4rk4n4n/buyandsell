import { useState } from "react"
import { Link } from "react-router-dom"
import { format } from "timeago.js";
const RealEstatePost=({ad})=>
{
return(<>
      <Link style={{textDecoration:"none",color:"inherit"}} to={`/realestatead/${ad._id}`}>
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
            {ad.urgent && <div style={{fontWeight:"bold",color:"crimson"}}>Urgently Hiring!</div>}
            <div>{format(ad.createdAt)}</div>
        </div>
        <div className="desc">
        {ad.description.length>180 ? ad.description.slice(0,180)+"..." : ad.description}
            </div>
            <div style={{display:"none",paddingTop:10}} className="descForMobile">
            {ad.description.length>60 ? ad.description.slice(0,60)+"..." : ad.description}
            </div>
            <br/>
            <div className="mainTextSizeForMobile">
            <div className="textSizeForMobile elementsForMobile" style={{display:"flex",alignItems:"center",gap:10}}>
            <div className="textSizeForMobile elementsForMobile" style={{fontWeight:"bold"}}>{ad.rental ? "For Rent" : "For Sale"}</div>
            <div className="textSizeForMobile elementsForMobile" style={{fontWeigt:"bold"}}>|</div>
            <div className="textSizeForMobile elementsForMobile location" style={{fontWeight:"bold",display:`${ad.size>999 && "none"}`}}>{ad.size}<span>{" "}ft</span><sup>2</sup></div>
            <div className="textSizeForMobile elementsForMobile" style={{fontWeigt:"bold"}}>|</div>
            <div className="textSizeForMobile elementsForMobile location" style={{fontWeight:"bold"}}>{ad.bedrooms===1 ? ad.bedrooms + " Bedroom" : ad.bedrooms + " Bedrooms"} </div>
            <div className="textSizeForMobile elementsForMobile" style={{fontWeigt:"bold"}}>|</div>
            <div className="textSizeForMobile elementsForMobile location" style={{fontWeight:"bold"}}>{ad.bathrooms===1 ? ad.bathrooms + " Bathroom" : ad.bathrooms + " Bathrooms"} </div>
            <div className="textSizeForMobile elementsForMobile" style={{fontWeigt:"bold"}}>|</div>
            <div className="textSizeForMobile elementsForMobile location" style={{fontWeight:"bold"}}>{ad.type[0].toUpperCase() + ad.type.slice(1)}</div>
            </div>
        </div>
        </div>  
    </div>
      </Link> 
</>)
}
export default RealEstatePost