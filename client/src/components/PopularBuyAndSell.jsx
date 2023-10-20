import "./styles.css"
import Interior from "../resources/interior.jpg"
import Classic from "../resources/classic.png"
import Camper from "../resources/Camper.jpeg"
import Boat from "../resources/boat.jpeg"
import Motor from "../resources/Motor.jpg"
import Furniture from "../resources/Furniture.png"
import Garden from "../resources/Garden.png"
import Tools from "../resources/Tools.png"
import { Link } from "react-router-dom"
import { useEffect, useState} from "react"
const PopularBuyAndSell=()=>
{
const [r,setR]=useState(0)
useEffect(()=>
{
    setR(Math.floor(Math.random()*4))
},[])
return(
<>
<div className="showHeadersOnMobile" style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:25,display:"none"}}>
            <div className="homeHeadersbuyandsell" style={{fontWeight:"bold"}}>Popular in Buy and Sell</div>
            </div>
<div className="container">
    <div style={{display:"block"}} className="row">
        <div className="col-lg-12 popular">
        <div className="hideHeadersOnMobile" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div style={{fontWeight:"bold",padding:"20px 0px"}}>Popular in Buy and Sell</div>
            </div>
<div className="cards">
    <Link to="/jobs/jobs" style={{backgroundImage:`url(${Furniture})`,backgroundPosition:"center"}} className="buyandsellCard">
<span className="cardContent">Jobs</span>
    </Link>
    <Link to="/pets" style={{backgroundImage:`url(${Garden})`,backgroundPosition:"center"}} className="buyandsellCard">
<span className="cardContent">Pets</span>
    </Link>
    <Link to="/services" style={{backgroundImage:`url(${Tools})`,backgroundPosition:"center"}} className="buyandsellCard">
<span className="cardContent">Services</span>
    </Link>
</div>
        </div>
    </div>
</div>
</>)
}
export default PopularBuyAndSell 
