import { useState } from "react"
import "./styles.css"
import { Link, useParams } from "react-router-dom"
const Listing=({ad})=>
{
    const [carAd,setCarAd]=useState(false)
    const [petAd,setPetAd]=useState(false)
    const [serviceAd,setServiceAd]=useState(false)
    const [jobAd,setJobAd]=useState(false)
    const path=useParams()
    const [realEstateAd,setRealEstateAd]=useState(false)
    const [type,setType]=useState("")

return(<>
{
    <Link
    style={{ textDecoration: "none", color: "inherit" }}
    to={`/${ad.adType==="auto" ? "ad" : ad.adType==="service" ? "servicead" : ad.adType==="realestate" ? "realestatead" : ad.adType==="job" ? "jobad" : "petsad"}/${ad._id}`}
  >
<div style={{display:"flex",alignItems:"center",gap:15,marginTop:50,cursor:"pointer"}}>
<div className="listingCard">
<img className="listingImg" src={ad.Img[0]}/>
<div style={{fontWeight:"bold",padding:"20px 10px",textAlign:"center"}}>{ad.title}</div>
<div style={{fontWeight:"bold",color:"green",textAlign:"center"}}>Please Contact</div>
</div>
</div>
  </Link>
}           
</>)
}
export default Listing