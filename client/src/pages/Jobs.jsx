import Navbar from "../components/Navbar"
import { useEffect, useState, useRef} from "react"
import "./styles.css"
import Footer from "../components/Footer"
import TuneIcon from '@mui/icons-material/Tune';
import { axiosInstance } from "../config/Config.js"
import JobPost from "../components/JobPost"
import { useSelector } from "react-redux"
import LoadingGif from "../Gif/loading.gif"
import { useNavigate, useParams } from "react-router-dom"
const RealEstate=()=>
{
    const {location}=useSelector(state=>state.location)
    const [ads,setAds]=useState([])
    const [length,setLength]=useState(-1)
    const [all,setAll]=useState(true)
    const [oldestF,setOldestF]=useState(false)
    const [lowestF,setLowestF]=useState(false)
    const [filtered,setFiltered]=useState(false)
    const [highestF,setHighestF]=useState(false)
    const [tempArr,setTempArr]=useState([])
    const [numberofpages,setNumberofpages]=useState(0)
    const [page,setPage]=useState(1)
    const sel=useRef()
    const [fulltime,setFulltime]=useState(0)
    const [parttime,setParttime]=useState(0)
    const [remote,setRemote]=useState(0)
    const [hybrid,setHybrid]=useState(0)
    const navigate=useNavigate()
    const [temporary,setTemporary]=useState(0)
    const [contract,setContract]=useState(0)
    const [altArr,setAltArr]=useState(null)
    const [displayVal,setDisplayVal]=useState("Jobs")
    const path=useParams()
    useEffect(()=>
    {
        const fun=async()=>
        {
            setAll(true)
            setOldestF(false)
            setLowestF(false)
            setHighestF(false)
            sel.current.value="all"
            switch(path.id)
            {
                case "Full-Time":
                    {
                        setDisplayVal("Full Time Jobs")
                        const res=await axiosInstance.get(`/jobs/getrecordsbasedtype/${"Full Time"}/${location}`)
                        setAltArr(res.data)
                        break;
                    }
                    case "Part-Time":
                        {
                            
                            setDisplayVal("Part Time Jobs")
                            const res=await axiosInstance.get(`/jobs/getrecordsbasedtype/${"Part Time"}/${location}`)
                            setAltArr(res.data)
                            break;
                        }
                        case "Remote":
                            {
                                
                                setDisplayVal("Remote Jobs")
                                const res=await axiosInstance.get(`/jobs/getrecordsbasedtype/${"Remote"}/${location}`)
                                setAltArr(res.data)
                                break;
                            }
                            case "Hybrid":
                                {
                                    
                                    setDisplayVal("Hybrid Jobs")
                                    const res=await axiosInstance.get(`/jobs/getrecordsbasedtype/${"Hybrid"}/${location}`)
                                    setAltArr(res.data)
                                    break;
                                }
                                case "Temporary":
                                    {
                                        
                                        setDisplayVal("Temporary Jobs")
                                        const res=await axiosInstance.get(`/jobs/getrecordsbasedtype/${"Temporary"}/${location}`)
                                        setAltArr(res.data)
                                        break;
                                    }
                                    case "Contract":
                                        {
                                            
                                            setDisplayVal("Contract Jobs")
                                            const res=await axiosInstance.get(`/jobs/getrecordsbasedtype/${"Contract"}/${location}`)
                                            setAltArr(res.data)
                                            break;
                                        }                
            }
        }
        fun()

    },[path.id])
    const handleNavigation=(val)=>
    {
        setFiltered(false)
        switch(val)
        {
            case 1:
                {
                    navigate(`/jobs/Full-Time`)
                    break;
                }
            case 2:
                {
                    navigate(`/jobs/Part-Time`)
                    break;
                }
            case 3:
                {
                    navigate(`/jobs/Remote`)
                    break;
                }
            case 4:
                {
                    navigate(`/jobs/Hybrid`)
                    break;
                }
            case 5:
                {
                    navigate(`/jobs/Temporary`)
                    break;
                }
            case 6:
                {
                    navigate(`/jobs/Contract`)
                    break;
                }
        }
    }
    useEffect(()=>
    {
        setFulltime(ads.filter((ad) => ad.type === "Full Time").length)
        setParttime(ads.filter((ad) => ad.type === "Part Time").length)
        setRemote(ads.filter((ad) => ad.type === "Remote").length)
        setHybrid(ads.filter((ad) => ad.type === "Hybrid").length)
        setTemporary(ads.filter((ad) => ad.type === "Temporary").length)
        setContract(ads.filter((ad) => ad.type === "Contract").length)
    },[ads])
    const [loading,setLoading]=useState(false)
      const handleMethod=(method)=>
    {
        if(method==="all")
        {
            try 
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
            catch(e)
            {
                console.clear()
            }

        }
        if(method==="oldest_first")
        {
            try 
            {
                setLoading(true)
                setAll(true)
                setOldestF(false)
                setLowestF(false)
                setHighestF(false)
                if(altArr===null)
                setAds(ads.slice().sort((a, b) => b.createdAt > a.createdAt ? -1 : 1))
                else 
                setAds(altArr.slice().sort((a, b) => b.createdAt > a.createdAt ? -1 : 1))
                setLoading(false)
            }
            catch(e)
            {
                console.clear()
            }
        }
        if(method==="lowest_first")
        {
            try 
            {
                setLoading(true)
                if(altArr===null)
                setTempArr(ads.slice().sort((a, b) => a.salary > b.salary ? 1 : -1))
                else 
                setTempArr(altArr.slice().sort((a, b) => a.salary > b.salary ? 1 : -1))
                setLowestF(true)
                setOldestF(false)
                setAll(false)
                setHighestF(false)
                setLoading(false)
            }
            catch(e)
            {
                console.clear()
            }
        }
        if(method==="highest_first")
        {
            try 
            {
                setLoading(true)
                setAll(false)
                setOldestF(false)
                setLowestF(false)
                setHighestF(true)
                if(altArr===null)
                setTempArr(ads.slice().sort((a, b) => b.salary > a.salary ? 1 : -1))
                else 
                setTempArr(altArr.slice().sort((a, b) => b.salary > a.salary ? 1 : -1))
                setLoading(false)
            }
            catch(e)
            {
                console.clear()
            }
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
            const res=await axiosInstance.get(`/jobs/getads/${location}`)
            setAds(res.data)
            setLoading(false)
        }
        fun()
        window.scrollTo({ top: 0 });
    },[])
return(<>
    <Navbar/>
    <div style={{backgroundColor: "#f8f9f9",minHeight:"100vh",overflow:"hidden"}}>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="content">
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
<h5 className="headingsForMobile" style={{fontWeight:"bold",color:"#373373"}}>{displayVal} in {location==="Newfoundland and Labrador" ? "Newfoundland" : location}</h5>
<h5 className="headingsForMobile" style={{fontWeight:"bold",color:"#373373"}}>Showing {!loading ? ads.length : "~"} Result{ads.length>1? "s" : ""} in {location==="Newfoundland and Labrador" ? "Newfoundland" : location}</h5>
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
  <option value="lowest_first">Salary: lowest first</option>
  <option value="highest_first">Salary: highest first</option>
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
<div className="autoResults">
<div className="title">Job Type:</div>
<div onClick={()=>{handleNavigation(1)}} className="unsel3ct3d">Full Time ({fulltime})</div>
<div onClick={()=>{handleNavigation(2)}} className="unsel3ct3d">Part Time ({parttime})</div>
<div onClick={()=>{handleNavigation(3)}} className="unsel3ct3d">Remote ({remote})</div>
<div onClick={()=>{handleNavigation(4)}} className="unsel3ct3d">Hybrid ({hybrid})</div>
<div onClick={()=>{handleNavigation(5)}} className="unsel3ct3d">Temporary ({temporary})</div>
<div onClick={()=>{handleNavigation(6)}} className="unsel3ct3d">Contract ({contract})</div>
</div>
</div>
</div>
   <div className="col-lg-9 cardsForMobile">
   <div style={{display:filtered && "none"}}>
   {
oldestF? page>=1? tempArr.slice(0,page*10).map(ad=>
    {
        return  <JobPost ad={ad} key={ad._id}/>
    }) : tempArr.map(ad=>
            {
                return  <JobPost ad={ad} key={ad._id}/>
            })
            : lowestF? page>=1? tempArr.slice(0,page*10).map(ad=>
                {
                    return  <JobPost ad={ad} key={ad._id}/>
                }) :  tempArr.map(ad=>
                {
                    return  <JobPost ad={ad} key={ad._id}/>
                })
                : highestF? page>=1? tempArr.map(ad=>
                    {
                        return  <JobPost ad={ad} key={ad._id}/>
                    }) : tempArr.slice(0,page*10).map(ad=>
                    {
                        return  <JobPost ad={ad} key={ad._id}/>
                    })
                    : page>=1 && altArr===null ? ads.slice().sort((a, b) => b.createdAt > a.createdAt ? 1 : -1).slice(0,page*10).map(ad=>
                        {
                            return  <JobPost ad={ad} key={ad._id}/>
                        }) : altArr===null? ads.slice().sort((a, b) => b.createdAt > a.createdAt ? 1 : -1).map(ad=>
                        {

                            return  <JobPost ad={ad} key={ad._id}/>
                        }) : altArr.slice().sort((a, b) => b.createdAt > a.createdAt ? 1 : -1).map(ad=>
                            {
    
                                return  <JobPost ad={ad} key={ad._id}/>
                            })
} 
</div>
{ !filtered &&
    (loading? <h5 style={{textAlign:"center"}}><img className="loadingGif" width={50} src={LoadingGif}/></h5>
    : altArr===null && ads.length===0 ? <h5  style={{textAlign:"center"}}>No Results.</h5>
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
export default RealEstate
