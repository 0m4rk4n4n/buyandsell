import { useParams } from "react-router-dom";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react";
import { axiosInstance } from "../config/Config.js"
import SearchPost from "../components/searchPost";
import LoadingGif from "../Gif/loading.gif";
import { useSelector } from "react-redux";
const SearchPage=({})=>
{
    const [results,setResults]=useState([])
    const path=useParams()
    const {location}=useSelector(state=>state.location)
    const [loading,setLoading]=useState(false)
    useEffect(()=>
    {
        const fun=async()=>
        {
            setLoading(true)
            const res=await axiosInstance.get(`/auth/searchwithquery/${path.id}/${location}`)
            setResults(res.data)
            setLoading(false)
        }
        fun()
    },[path.id])
return(<>
<Navbar/>
<div style={{minHeight:"100vh",backgroundColor:"rgb(248, 249, 249)",overflow:"hidden"}}>
<div className="row">
    <div className="col-lg-4 searchpage" style={{fontWeight:"bold",color:"rgb(55, 51, 115)",padding:"40px"}}>
        Search Results for {path.id}
    </div>
    <div className="col-lg-4"></div>
    <div className="col-lg-4"></div>
    </div>
<div className="container">

    <div className="row">
        <div className="col-lg-1"></div>
        <div style={{margin:"30px 0px"}} className="col-lg-10">
        {loading? <div><h5 style={{textAlign:"center"}}><img className="loadingGif" width={50} src={LoadingGif}/></h5></div> : results.length===0? <div style={{textAlign:"center",fontWeight:"bold"}}>No Results</div> : results.map(ad=>
    {
        return <SearchPost key={ad._id} ad={ad}/>
    })}
        </div>
        <div className="col-lg-1"></div>
    </div>

</div>
</div>

<Footer/>
</>)
}
export default SearchPage