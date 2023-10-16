import Navbar from "../components/Navbar"
import Header from "../components/Header";
import PopularAuto from "../components/PopularAuto";
import PopularBuyAndSell from "../components/PopularBuyAndSell";
import PopularRealEstate from "../components/PopularRealEstate";
import SignInToSeeMore from "../components/SignInToSeeMore";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
const UserMainPage=()=>
{
    const {currentUser}=useSelector(state=>state.user)
    return(<>
        <Navbar logged={true}/>
<Header/>
<PopularAuto/>
<br/>
<PopularBuyAndSell/>
<br/>
{
    currentUser && <SignInToSeeMore/>
}
<br/>
<PopularRealEstate/>
<Footer/>
    </>)
}
export default UserMainPage