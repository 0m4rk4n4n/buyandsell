import "./styles.css"
import Interior from "../resources/interior.jpg"
import Boat from "../resources/boat.jpeg"
import { Link } from "react-router-dom"
import Motor from "../resources/Motor.jpg"
const PopularAuto=()=>
{
return(
<>
<div className="showHeadersOnMobile" style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:25,display:"none"}}>
            <div className="homeHeaders" style={{fontWeight:"bold"}}>Popular in Autos</div>
            </div>
<div className="container">
    <div style={{display:"block"}} className="row">
        <div className="col-lg-12 popular">
        <div className="hideHeadersOnMobile" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div style={{fontWeight:"bold"}}>Popular in Autos</div>
            </div>

<div className="cards">
    <Link to="/autosbasedoncondition/New&Cars" style={{backgroundImage:`url(${Interior})`,backgroundPosition:"center"}} className="buyandsellCard">
<span className="cardContent">Brand new cars</span>
    </Link>
    <Link to="/autosbasedoncondition/Used&Cars" style={{backgroundImage:`url(${Boat})`,backgroundPosition:"center"}} className="buyandsellCard">
<span className="cardContent">Used Cars</span>
    </Link>
    <Link to="/autosbasedoncondition/Electric&Cars" style={{backgroundImage:`url(${Motor})`,backgroundPosition:"center"}} className="buyandsellCard">
<span className="cardContent">Electric vehicles</span>
    </Link>    
</div>
        </div>
    </div>
</div>
</>)
}
export default PopularAuto
