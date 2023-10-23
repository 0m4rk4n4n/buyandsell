import "./styles.css"
import { Link } from "react-router-dom"
const SignInToSeeMore=()=>
{
return(<>
<div className="container">
<div className="row">
        <div className="col-lg-8 effects">
<h5 style={{textAlign:"center",color:"#fff",padding:35}}>Buy & Sell is a lot better when you’re a member</h5>
<p style={{textAlign:"center",color:"#fff"}}>See more relevant listings, find what you’re looking for quicker, and more!</p>
                <br/>
<button className="SignInToSeeMoreBtn" style={{display:"block",cursor:"pointer",margin:"30px auto",borderRadius:5,padding:5,borderColor:"transparent"}}><Link style={{textDecoration:"none",color:"inherit"}} to="/login">Sign In</Link></button>
        </div>
    </div>
</div>
</>)
}
export default SignInToSeeMore
