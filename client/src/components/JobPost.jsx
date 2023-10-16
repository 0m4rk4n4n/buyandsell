import { useState } from "react"
import { Link } from "react-router-dom"
import { format } from "timeago.js";
const JobPost=({ad})=>
{
const [desc,setDesc]=useState(" 7 seaters , runs good , winter tires , heated seats , 3.6 Engine, fully loaded, sunroof, clean title RTL Active status Alberta Registered Phone: (825-994-5299)")
return(<>
      <Link style={{textDecoration:"none",color:"inherit"}} to={`/jobad/${ad._id}`}>
      <div style={{position:"relative"}} className="post">
      <div style={{maxHeight:120}} className="imageContainer imgHeight">
        <img style={{display:"flex",justifyContent:"center",maxHeight:120}} className="cardImage imgHeight" src={ad.Img[0]}/>
        </div>
        <div style={{width:"100%"}} className="cardDetails">
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div className="autoTitle" style={{fontWeight:"bold",color:"#373373",fontSize:22}}>{ad.title[0].toUpperCase() + ad.title.slice(1)}</div>
        <div className="priceForMobile salaryforMobile" style={{color:"green",fontWeight:"bold",fontSize:20}}>{"$"}{ad.salary===45000 ? "40,000 - 50,000 / Year" : ad.salary===55000 ? "50,000 - 60,000 / Year" : ad.salary===65000 ? "60,000 - 70,000 / Year" : ad.salary===75000 ? "70,000 - 80,000 / Year" : ad.salary===85000 ? "80,000 - 90,000 / Year" : ad.salary===95000 ? "90,000 - 100,000 / Year" : "100,000 / Year"}</div>
        </div>

        <div className="detailsforMobile" style={{display:"flex",alignItems:"center",gap:10}}>
            <div className="location">{ad.location==="Newfoundland and Labrador" ? "Newfoundland" : ad.location}</div>
            <span>|</span>
            <div>{format(ad.createdAt)}</div>
        </div>
        <div className="desc">
        {ad.description.length>180 ? ad.description.slice(0,180)+"..." : ad.description}
            </div>
            <div style={{display:"none",paddingTop:10}} className="descForMobile">
            {ad.description.length>60 ? ad.description.slice(0,60)+"..." : ad.description}
            </div>
            <br/>
<div style={{display:"flex",alignItems:"center",gap:10,position:"absolute",bottom:10}}>
<div className="urgHiring" style={{fontWeight:"bold"}}>{ad.type}</div>
<span>|</span>
{ad.urgent && <div className="urgHiring" style={{fontWeight:"bold",color:"crimson"}}>Urgently Hiring!</div>}
{ad.benifits && <><span>|</span><div style={{fontWeight:"600"}}>Benifits included</div></>}
</div>
        </div>
        </div>  
      </Link> 
</>)
}
export default JobPost