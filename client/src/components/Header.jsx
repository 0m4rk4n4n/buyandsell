import { useSelector } from "react-redux"
import "./styles.css"
import { Link } from "react-router-dom"
const Header=()=>
{
    const { currentUser } = useSelector(state=>state.user)
return(<div className="Header">
    <div className="description">
    Start selling your car with Canada's largest automotive marketplace
    <Link style={{textDecoration:"none",color:"inherit"}} to={`/${currentUser ? "postad" : "register"}`}>
<button className="ShopToday">Post Your Ad Now!</button>   
</Link>
    </div>
</div>)
}
export default Header 