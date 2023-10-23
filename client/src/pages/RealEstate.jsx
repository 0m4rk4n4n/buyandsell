import Navbar from "../components/Navbar"
import { useEffect, useState, useRef, memo} from "react"
import "./styles.css"
import Footer from "../components/Footer"
import RealEstatePost from "../components/RealEstatePost"
import { axiosInstance } from "../config/Config.js"
import LoadingGif from "../Gif/loading.gif"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import TuneIcon from '@mui/icons-material/Tune';
const RealEstate=()=>
{
    const [filter,setFilter]=useState(1)
    const [viewed,setViewed]=useState(0)
    const [colorViewed,setColorViewed]=useState(0)
    const [filtered,setFiltered]=useState(false)
    const {location}=useSelector(state=>state.location)
    const [ads,setAds]=useState([])
    const [length,setLength]=useState(-1)
    const [all,setAll]=useState(true)
    const [oldestF,setOldestF]=useState(false)
    const [lowestF,setLowestF]=useState(false)
    const [highestF,setHighestF]=useState(false)
    const [tempArr,setTempArr]=useState([])
    const [numberofpages,setNumberofpages]=useState(0)
    const [page,setPage]=useState(1)
    const dispatch=useDispatch()
    const sel=useRef()
    const [longTermCount,setLongTermCount]=useState(0)
    const [shortTermCount,setShortTermCount]=useState(0)
    const [roomRentals,setRoomRentals]=useState(0)
    const [officeRentals,setOfficeRentals]=useState(0)
    const [housesForSale,setHousesForSale]=useState(0)
    const [condosForSale,setCondosForSale]=useState(0)
    const [landForSale,SetLandForSale]=useState(0)
    const [officeForSale,setOfficeForSale]=useState(0)
    const [petFriendly,setPetFriendly]=useState(0)
    const [notPetFriendly,setNotPetFriendly]=useState(0)
    const [val1,setVal1]=useState(0)
    const [val2,setVal2]=useState(0)
    const [altArr,setAltArr]=useState(null)
    const navigate=useNavigate()
    const path=useParams()
    const [loading,setLoading]=useState(false)
    const [displayVal,setDisplayVal]=useState("Real Estate")
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
            try 
            {
                const res=await axiosInstance.get(`/real-estate/getbasedonpricegiven/${val1}/${val2}/${location}`)
                setAltArr(res.data)
            }
            catch(e)
            {
                console.clear()
            }
        }
        fun()
    }
    useEffect(()=>
        {
    setLongTermCount(ads.filter((ad) => ad.type === "Long term rentals").length)
    setShortTermCount(ads.filter((ad) => ad.type === "Short term rentals").length)
    setRoomRentals(ads.filter((ad) => ad.type === "Room for Rent").length)
    setOfficeRentals(ads.filter((ad) => ad.type === "Office for Rent").length)
    setHousesForSale(ads.filter((ad) => ad.type === "House for sale").length)
    setCondosForSale(ads.filter((ad) => ad.type === "Condo for sale").length)
    SetLandForSale(ads.filter((ad) => ad.type === "Land for sale").length)
    setOfficeForSale(ads.filter((ad) => ad.type === "Office for sale").length)
    setPetFriendly(ads.filter((ad) => ad.pets === true).length)
    setNotPetFriendly(ads.filter((ad) => ad.pets === false).length)
    
    },[ads])
    useEffect(()=>
    {
        window.scrollTo({top:0,behavior:"smooth"})
       const fun=async()=>
       {
        setAll(true)
        setOldestF(false)
        setLowestF(false)
        setHighestF(false)
        sel.current.value="all"
        switch(path.id)
        {
            case "Long-Term-Rentals":
            {
                setDisplayVal("Long Term Rentals")
                const res=await axiosInstance.get(`/real-estate/getbasedontype/${"Long term rentals"}/${location}`)
                setAltArr(res.data)
                break;
            }
            case "Short-Term-Rentals":
            {
                setDisplayVal("Short Term Rentals")
                const res=await axiosInstance.get(`/real-estate/getbasedontype/${"Short term rentals"}/${location}`)
                setAltArr(res.data)
                break;
            }
            case "Room-Rentals":
            {
                setDisplayVal("Room Rentals")
                const res=await axiosInstance.get(`/real-estate/getbasedontype/${"Room for Rent"}/${location}`)
                setAltArr(res.data)
                break;
            }
            case "Office-Rentals":
            {
                setDisplayVal("Office Rentals")
                const res=await axiosInstance.get(`/real-estate/getbasedontype/${"Office rentals"}/${location}`)
                setAltArr(res.data)
                break;
            }
            case "Houses-For-Sale":
            {
                setDisplayVal("Houses For Sale")
                const res=await axiosInstance.get(`/real-estate/getbasedontype/${"House for sale"}/${location}`)
                setAltArr(res.data)
                break;
            }
            case "Condos-For-Sale":
            {
                setDisplayVal("Condos For Sale")
                const res=await axiosInstance.get(`/real-estate/getbasedontype/${"Condo for sale"}/${location}`)
                setAltArr(res.data)
                break;
            }
            case "Land-For-Sale":
            {
                setDisplayVal("Land For Sale")
                const res=await axiosInstance.get(`/real-estate/getbasedontype/${"Land for sale"}/${location}`)
                setAltArr(res.data)
                break;
            }
            case "Offices-For-Sale":
            {
                setDisplayVal("Office For Sale")
                const res=await axiosInstance.get(`/real-estate/getbasedontype/${"Office for sale"}/${location}`)
                setAltArr(res.data)
                break;
            }
            case "!Pet-Friendly":
            {
                setDisplayVal("Non Pet Friendly Properties")
                const res=await axiosInstance.get(`/real-estate/notpetfriendly/${location}`)
                setAltArr(res.data)
                break;
            }
            case "Pet-Friendly":
            {
                setDisplayVal("Pet Friendly Properties")
                const res=await axiosInstance.get(`/real-estate/petfriendly/${location}`)
                setAltArr(res.data)
                break;
            }
        }
       }
       fun()
    },[path])
      const handleNavigation=(value)=>
      {
        setFiltered(false)
        switch(value)
        {
                case 1:
                {
                    navigate(`/real-estate/Long-Term-Rentals`)
                    break;
                }
                case 2:
                {
                    navigate(`/real-estate/Short-Term-Rentals`)
                    break;
                }
                case 3:
                {
                    navigate(`/real-estate/Room-Rentals`)
                    break;
                }
                case 4:
                {
                    navigate(`/real-estate/Office-Rentals`)
                    break;
                }
                case 5:
                {
                    navigate(`/real-estate/Houses-For-Sale`)
                    break;
                }
                case 6:
                {
                    navigate(`/real-estate/Condos-For-Sale`)
                    break;
                }
                case 7:
                {
                    navigate(`/real-estate/Land-For-Sale`)
                    break;
                }
                case 8:
                {
                    navigate(`/real-estate/Offices-For-Sale`)
                     break;
                }
                case 9:
                {
                    navigate(`/real-estate/Pet-Friendly`)
                    break;
                }
                case 10:
                {
                    navigate(`/real-estate/!Pet-Friendly`)
                    break;
                }
                default:
                break;
        }
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
            if(altArr===null)
            setAds(ads.slice().sort((a, b) => b.createdAt > a.createdAt ? 1 : -1))
            else 
            setAds(altArr.slice().sort((a, b) => b.createdAt > a.createdAt ? 1 : -1))
            setLoading(false)
        }
        if(method==="oldest_first")
        {
            setLoading(true)
            setOldestF(true)
            setAll(false)
            setLowestF(false)
            setHighestF(false)
            if(altArr===null)
            setTempArr(ads.slice().sort((a, b) => a.createdAt > b.createdAt ? 1 : -1))
            else 
            setTempArr(altArr.slice().sort((a, b) => a.createdAt > b.createdAt ? 1 : -1))
            setLoading(false)
        }
        if(method==="lowest_first")
        {
            setLoading(true)
            if(altArr===null)
            setTempArr(ads.slice().sort((a, b) => a.price > b.price ? 1 : -1))
            else 
            setTempArr(altArr.slice().sort((a, b) => a.price > b.price ? 1 : -1))
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
            if(altArr===null)
            setTempArr(ads.slice().sort((a, b) => b.price > a.price ? 1 : -1))
            else 
            setTempArr(altArr.slice().sort((a, b) => b.price > a.price ? 1 : -1))
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
if(altArr===null)
{
    if(page*10>ads.slice(page*10).length)
    setPage(1010101010101010)
}
else 
{
    if(page*10>altArr.slice(page*10).length)
    setPage(1010101010101010)
}
    },[page])
    useEffect(()=>
    {
        setLoading(true)
        setLength(ads.length)
        setLoading(false)
    },[ads])
    useEffect(()=>
    {
        
        setNumberofpages(Math.floor(ads.length/10))
        setPage(1)
        const fun=async()=>
        {
            setLoading(true)
            const data=await axiosInstance.get(`/real-estate/getallads/${location}`)
            setAds(data.data)
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
<h5 className="headingsForMobile" style={{fontWeight:"bold",color:"#373373"}}>{displayVal} in {location==="Newfoundland and Labrador" ? "Newfoundland" : location}</h5>
<h5 className="headingsForMobile" style={{fontWeight:"bold",color:"#373373"}}>Showing {!loading && altArr===null ? ads.length : altArr!==null ? altArr.length : "~"} Result{altArr===null && ads.length>1 || altArr!==null && altArr.length>1? "s" : ""} in {location==="Newfoundland and Labrador" ? "Newfoundland" : location}</h5>
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
<h6  style={{fontWeight:"bold",color:"#373373"}}>Current Matches ({altArr===null ? ads.length : altArr.length})</h6>
{filtered && <h6 className="hideOnExpand" onClick={()=>{setFiltered(false)}} style={{fontWeight:"bold",color:"#373373",cursor:"pointer"}}>X</h6>}
    </div>
    <div className="hr"></div>
    <h6 className="title">Location:</h6>
<div className="city sel3ct3d">
{location==="Newfoundland and Labrador" ? "Newfoundland" + ` (${ads.length})` : location + ` (${altArr===null ? ads.length : altArr.length})`}
</div>
<div className="hr"></div>
<div className="autoResults">
<div className="title">For Rent:</div>
<div onClick={()=>{handleNavigation(1)}} className="unsel3ct3d">Long Term Rentals ({longTermCount})</div>
<div onClick={()=>{handleNavigation(2)}} className="unsel3ct3d">Short Term Rentals ({shortTermCount})</div>
<div onClick={()=>{handleNavigation(3)}} className="unsel3ct3d">Room Rentals ({roomRentals})</div>
<div onClick={()=>{handleNavigation(4)}} className="unsel3ct3d">Office Rentals ({officeRentals})</div>
<div className="hr"></div>
<div className="title">For Sale:</div>
<div onClick={()=>{handleNavigation(5)}} className="unsel3ct3d">Houses for sale ({housesForSale})</div>
<div onClick={()=>{handleNavigation(6)}} className="unsel3ct3d">Condos for sale ({condosForSale})</div>
<div onClick={()=>{handleNavigation(7)}} className="unsel3ct3d">Land for sale ({landForSale})</div>
<div onClick={()=>{handleNavigation(8)}} className="unsel3ct3d">Office space for sale ({officeForSale})</div>
<div className="hr"></div>
</div>
<div className="title">Price:</div>
<form style={{display:"flex",justifyContent:"center",gap:20,padding:20,alignItems:"center"}}>
    <div style={{display:"flex",gap:10}}>
        <div style={{position:"relative"}}>
            <div style={{fontSize:15}}>From</div>
    <input onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()} onChange={(e)=>{setVal1(e.target.value)}} style={{width:50,height:30}} type="number"/>
        </div>
    -
    <div style={{position:"relative"}}>
    <div style={{fontSize:15}}>To</div>
    <input onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()} onChange={(e)=>{setVal2(e.target.value)}} style={{width:50,height:30}} type="number"/>
        </div>
    </div>
    <div>
    <button onClick={(e)=>{handleSearch(e)}} style={{backgroundColor:"green",marginTop:20,border:"none",color:"#fff",borderRadius:10,padding:4,cursor:"pointer",fontSize:14}}>Search</button>
    </div>
</form>
<div className="hr"></div>
<div className="title">
Pet Friendly
</div>
<div onClick={()=>{handleNavigation(9)}} className="unsel3ct3d">Yes ({petFriendly})</div>
<div onClick={()=>{handleNavigation(10)}} className="unsel3ct3d">No ({notPetFriendly})</div>
</div>
</div>
   <div className="col-lg-9 cardsForMobile">
   <div style={{display:filtered && "none"}}>
{
oldestF? page>=1? tempArr.slice(0,page*10).map(ad=>
    {
        return  <RealEstatePost ad={ad} key={ad._id}/>
    }) : tempArr.map(ad=>
            {
                return  <RealEstatePost ad={ad} key={ad._id}/>
            })
            : lowestF? page>=1? tempArr.slice(0,page*10).map(ad=>
                {
                    return  <RealEstatePost ad={ad} key={ad._id}/>
                }) :  tempArr.map(ad=>
                {
                    return  <RealEstatePost ad={ad} key={ad._id}/>
                })
                : highestF? page>=1? tempArr.map(ad=>
                    {
                        return  <RealEstatePost ad={ad} key={ad._id}/>
                    }) : tempArr.slice(0,page*10).map(ad=>
                    {
                        return  <RealEstatePost ad={ad} key={ad._id}/>
                    })
                    : page>=1 && altArr===null ? ads.slice().sort((a, b) => b.createdAt > a.createdAt ? 1 : -1).slice(0,page*10).map(ad=>
                        {
                            return  <RealEstatePost ad={ad} key={ad._id}/>
                        }) : altArr===null? ads.slice().sort((a, b) => b.createdAt > a.createdAt ? 1 : -1).map(ad=>
                        {

                            return  <RealEstatePost ad={ad} key={ad._id}/>
                        }) : altArr.slice().sort((a, b) => b.createdAt > a.createdAt ? 1 : -1).map(ad=>
                            {
    
                                return  <RealEstatePost ad={ad} key={ad._id}/>
                            })
} 
</div>
{ !filtered &&

   (loading? <h5 style={{textAlign:"center"}}><img className="loadingGif" width={50} src={LoadingGif}/></h5>
    : altArr===null && ads.length===0 ? <h5  style={{textAlign:"center",cursor:"pointer"}}>No Results.</h5>
    : altArr!==null && altArr.length===0 ? <h5  style={{textAlign:"center",cursor:"pointer"}}>No Results.</h5>
    : altArr===null && ads.length<10 ? <h5  style={{textAlign:"center",cursor:"pointer"}}>You viewed all results</h5>
    : altArr!==null && altArr.length<10 ? <h5  style={{textAlign:"center",cursor:"pointer"}}>You viewed all results</h5>
    : <h5 onClick={incPage} className={`${page!==1010101010101010 && "loadMore"}`} style={{textAlign:"center",cursor:`${page!==1010101010101010 ? "pointer" : ""}`}}>{page===1010101010101010 ? "You viewed all results" : "Load More..."}</h5>
)}
    </div>
    </div>
    </div>
    </div>
<Footer/>

</>)
}
export default memo(RealEstate)
