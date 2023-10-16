import Navbar from "../components/Navbar"
import Header from "../components/Header";
import PopularAuto from "../components/PopularAuto";
import PopularBuyAndSell from "../components/PopularBuyAndSell";
import PopularRealEstate from "../components/PopularRealEstate";
import SignInToSeeMore from "../components/SignInToSeeMore";
import Footer from "../components/Footer";
import Locations from "../components/Locations";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const Home=({val,setVal})=>
{
    const { currentUser } = useSelector(state=>state.user)
        useEffect(()=>{window.scrollTo({ top: 0 });},[])
    return(<div style={{overflow:"hidden"}}>
{val ? <Locations val={val} setVal={setVal}/>
:
<>
<Navbar val={val} setVal={setVal}/>
<Header/>
<PopularAuto/>
<br/>
<PopularBuyAndSell/>
<br/>
{!currentUser && <><SignInToSeeMore/>
<br/></>}
<PopularRealEstate/>
<Footer/>
</>
}
</div>)
}
export default Home