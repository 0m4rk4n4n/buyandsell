import "./styles.css"
import Apartments from "../resources/Apartments.png"
import Houses from "../resources/Houses.png"
import Rentals from "../resources/Rentals.png"
import { Link } from "react-router-dom"
const PopularRealEstate=()=>
{
return(
<><div className="showHeadersOnMobile" style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:25,display:"none"}}>
<div className="homeHeadersRealEstate" style={{fontWeight:"bold"}}>Popular in Real Estate</div>
<Link to="real-estate/ads" className="homeHeadersRealEstate">Browse All Real Estate</Link>
</div>
<div className="container">
<div style={{display:"block"}} className="row">
<div className="col-lg-12 popular">
<div className="hideHeadersOnMobile" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
<div style={{fontWeight:"bold",padding:"20px 0px"}}>Popular in Real Estate</div>
<div style={{padding:"20px 70px"}}>Browse All Real Estate</div>
</div>
<div className="cards">
<Link to="/real-estate/Condos-For-Sale" style={{backgroundImage:`url(${Apartments})`,backgroundPosition:"center"}} className="realestateCard">
<span className="cardContent">Condos for Sale</span>
</Link>
<Link to="/real-estate/Houses-For-Sale" style={{backgroundImage:`url(${Houses})`,backgroundPosition:"center"}} className="realestateCard">
<span className="cardContent">Houses fo sale</span>
</Link>
<Link to="/real-estate/Long-Term-Rentals" style={{backgroundImage:`url(${Rentals})`,backgroundPosition:"center"}} className="realestateCard">
<span className="cardContent">Rentals</span>
</Link>  
</div>
</div>
</div>
</div>
</>)
}
export default PopularRealEstate