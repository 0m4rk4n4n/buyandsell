import Navbar from "../components/Navbar"
import { useEffect, useRef, useState } from "react"
import "./styles.css"
import Footer from "../components/Footer"
import { axiosInstance } from "../config/Config.js"
import PetsPost from "../components/PetsPost"
import TuneIcon from '@mui/icons-material/Tune';
import { useSelector } from "react-redux"
import LoadingGif from "../Gif/loading.gif"
const Pets=()=>
{
    const sel=useRef()
    const {location}=useSelector(state=>state.location)
    const [ads,setAds]=useState([])
    const [all,setAll]=useState(true)
    const [oldestF,setOldestF]=useState(false)
    const [lowestF,setLowestF]=useState(false)
    const [highestF,setHighestF]=useState(false)
    const [tempArr,setTempArr]=useState([])
    const [filtered,setFiltered]=useState(false)
    const [numberofpages,setNumberofpages]=useState(0)
    const [page,setPage]=useState(1)
    const [loading,setLoading]=useState(false)
    const [firstValue,setFirstValue]=useState(0)
    const [secondValue,setSecondValue]=useState(0)
    const handleSearch=(e)=>
    {
        e.preventDefault()
        setFiltered(false)
        setAll(true)
        setOldestF(false)
        setLowestF(false)
        setHighestF(false)
        sel.current.value="all"
        const fun=async()=>
        {
            const res=await axiosInstance.get(`/pets/getbasedonpricegiven/${firstValue}/${secondValue}/${location}`)
            setAds(res.data)
        }
        fun()
    }
    const handleMethod=(method)=>
    {
        if(method==="all")
        {
            setLoading(true)
            setAll(true)
            setOldestF(false)
            setLowestF(false)
            setHighestF(false)
            setAds(ads.slice().sort((a, b) => b.createdAt > a.createdAt ? 1 : -1))
            setLoading(false)
        }
        if(method==="oldest_first")
        {
            setLoading(true)
            setOldestF(true)
            setAll(false)
            setLowestF(false)
            setHighestF(false)
            setTempArr(ads.slice().sort((a, b) => a.createdAt > b.createdAt ? 1 : -1))
            setLoading(false)
        }
        if(method==="lowest_first")
        {
            setLoading(true)
            setTempArr(ads.slice().sort((a, b) => a.price > b.price ? 1 : -1))
            setLowestF(true)
            setOldestF(false)
            setAll(false)
            setHighestF(false)
            setLoading(false)
        }
        if(method==="highest_first")
        {
            setLoading(true)
            setAll(false)
            setOldestF(false)
            setLowestF(false)
            setHighestF(true)
            setTempArr(ads.slice().sort((a, b) => b.price > a.price ? 1 : -1))
            setLoading(false)
        }
       
    }
    const incPage=()=>
    {
        if(page!==1010101010101010)
        setPage(prev=>prev+1)
    }
    useEffect(()=>
    {
        if(page*10>ads.slice(page*10).length)
        setPage(1010101010101010)
    },[page])
    useEffect(()=>
    {
        setNumberofpages(Math.floor(ads.length/10))
        setPage(1)
        const fun=async()=>
        {
            setLoading(true)
            const res=await axiosInstance.get(`/pets/getads/${location}`)
            setAds(res.data)
            setLoading(false)
        }
        fun()
        window.scrollTo({ top: 0 });
    },[])
    const HandleOptions=(value)=>
    {

    }
return(<>
    <Navbar/>
    <div style={{backgroundColor: "#f8f9f9",minHeight:"100vh"}}>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="content">
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
<h5 className="headingsForMobile" style={{fontWeight:"bold",color:"#373373"}}>Pets in {location==="Newfoundland and Labrador" ? "Newfoundland" : location}</h5>
<h5 className="headingsForMobile" style={{fontWeight:"bold",color:"#373373"}}>Showing {!loading ? ads.length : "~"} Results in {location==="Newfoundland and Labrador" ? "Newfoundland" : location}</h5>
                    </div>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
<div style={{fontWeight:"bold",color:"#373373"}}><div className="filtersIcon" style={{textAlign:"left",display:"flex",justifyContent:"center",gap:5,display:"none"}}>
    <div><TuneIcon/></div>
    <div onClick={()=>{setFiltered(true)}} style={{paddingBottom:5}}>Show Filters</div>
    </div>
    </div>
<br/><br/><br/><br/>
<select ref={sel} onChange={(e)=>{handleMethod(e.target.value)}} style={{cursor:"pointer"}} selected="Categories" placeholder="Categories" className="Input" name="cars" id="cars">
  <option defaultChecked={true} value="all">Posted: newest first</option>
  <option value="oldest_first">Posted: oldest first</option>
  <option value="lowest_first">Price: lowest first</option>
  <option value="highest_first">Price: highest first</option>
</select>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-3">
            <div className={`filter ${filtered && "filtered"}`}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<h6  style={{fontWeight:"bold",color:"#373373"}}>Current Matches ({ads.length})</h6>
{filtered && <h6 className="hideOnExpand" onClick={()=>{setFiltered(false)}} style={{fontWeight:"bold",color:"#373373",cursor:"pointer"}}>X</h6>}
    </div>
    
    <div className="hr"></div>
    <h6 className="title">Location:</h6>

<div className="city sel3ct3d">
    {location==="Newfoundland and Labrador" ? "Newfoundland" : location} ({ads.length})
</div>
<div className="hr"></div>
<div className="title">Adoption fee:</div>
<form style={{display:"flex",gap:20,padding:20,justifyContent:"center",alignItems:"center"}}>
    <div style={{display:"flex",gap:10}}>
        <div style={{position:"relative"}}>
            <div style={{fontSize:15}}>From</div>
    <input onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()} onChange={(e)=>{setFirstValue(e.target.value)}} style={{width:50,height:30}} type="number"/>
        </div>
    -
    <div style={{position:"relative"}}>
    <div style={{fontSize:15}}>To</div>
    <input onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()} onChange={(e)=>{setSecondValue(e.target.value)}} style={{width:50,height:30}} type="number"/>
        </div>
    </div>
    <div>
    <button onClick={(e)=>{handleSearch(e)}} style={{backgroundColor:"green",marginTop:20,border:"none",color:"#fff",borderRadius:10,padding:4,cursor:"pointer",fontSize:14}}>Search</button>
    </div>
</form>
</div>

            </div>
            <div className="col-lg-9 cardsForMobile">
            <div style={{display:filtered && "none"}}>
   {
oldestF? page>=1? tempArr.slice(0,page*10).map(ad=>
    {
        return  <PetsPost ad={ad} key={ad._id}/>
    }) : tempArr.map(ad=>
            {
                return  <PetsPost ad={ad} key={ad._id}/>
            })
            : lowestF? page>=1? tempArr.slice(0,page*10).map(ad=>
                {
                    return  <PetsPost ad={ad} key={ad._id}/>
                }) :  tempArr.map(ad=>
                {
                    return  <PetsPost ad={ad} key={ad._id}/>
                })
                : highestF? page>=1? tempArr.map(ad=>
                    {
                        return  <PetsPost ad={ad} key={ad._id}/>
                    }) : tempArr.slice(0,page*10).map(ad=>
                    {
                        return  <PetsPost ad={ad} key={ad._id}/>
                    })
                    : page>=1 ? ads.slice().sort((a, b) => b.createdAt > a.createdAt ? 1 : -1).slice(0,page*10).map(ad=>
                        {
                            return  <PetsPost ad={ad} key={ad._id}/>
                        }) : ads.slice().sort((a, b) => b.createdAt > a.createdAt ? 1 : -1).map(ad=>
                        {

                            return  <PetsPost ad={ad} key={ad._id}/>
                        })
   }
   </div>
   {
    !filtered &&
    
        (loading? <h5 style={{textAlign:"center"}}><img className="loadingGif" width={50} src={LoadingGif}/></h5>
        :ads.length===0 ? <h5  style={{textAlign:"center"}}>No Results.</h5>
        : ads.length<10 ? <h5  style={{textAlign:"center"}}>You viewed all results</h5>
        :    <h5 onClick={incPage} className={`${page!==1010101010101010 && "loadMore"}`} style={{textAlign:"center",cursor:`${page!==1010101010101010 ? "pointer" : ""}`}}>{page===1010101010101010 ? "You viewed all results" : "Load More..."}</h5>
    )}
    </div>
        </div>
    </div>
    </div>
<Footer/>
</>)
}
export default Pets
