import Navbar from "../components/Navbar"
import { useEffect, useRef, useState } from "react"
import "./styles.css"
import AutoPost from "../components/AutoPost"
import Footer from "../components/Footer"
import { axiosInstance } from "../config/Config.js"
import LoadingGif from "../Gif/loading.gif"
import TuneIcon from '@mui/icons-material/Tune';
import { useNavigate, useParams } from "react-router-dom"
import Locations from "../components/Locations"
import { changeacura, changealexus, changeaston,changealm,changeamc,changegmc,changebmw,changeland,changegeo,changeford,changelotus,changemg,changemini,changeram, changeaudi, changeaustin, changebentley, changebricklin, changebugatti, changebuick, changecadillac, changechevrolet, changechrysler, changedaewoo, changedaihatsu, changedatsun, changedodge, changeeagle, changeferrari, changefiat, changegenesis, changehonda, changehummer, changehyundai, changeinfiniti, changeisuzu, changejaguar, changejeep, changekia, changelamborghini, changelincoln, changemaserati, changemaybach, changemazda, changemcLaren, changemercedes, changemercury, changemitsubishi, changenissan, changeoldsmobile, changeopel, changepeugeot, changeplymouth, changepolestar, changepontiac, changeporsche, changerenault, changesaab, changesaturn, changescion, changeshelby, changesmart, changesubaru, changesuzuki, changetesla, changetoyota, changetriumph, changevolkswagen, changevolvo } from "../redux/brandsSlice"
import { useDispatch, useSelector } from "react-redux"
import { switchNew, switchUsed } from "../redux/autoscondition"
import { changeblack, changebrown, changegreen, changepink, changepurple, changered, changetan, changewhite, changeyellow,changesilver,changeorange,changeblue,changegrey,changegold } from "../redux/colorSlice"
const AutosBaesOnCondition=({val,setVal})=>
{
    const rf=useRef()
    const sel=useRef()
    const dispatch=useDispatch()
    const [allTypes,setAllTypes]=useState([])
    const [viewed,setViewed]=useState(0)
    const [autoRecords,setAutoRecords]=useState(20)
    const [pages,setPages]=useState(autoRecords/10)
    const [colorViewed,setColorViewed]=useState(0)
    const [ads,setAds]=useState([])
    const path=useParams()
    const {location}=useSelector(state=>state.location)
    const [p1,setP1]=useState(0)
    const [p2,setP2]=useState(0)
    const priceInp1=useRef()
    const priceInp2=useRef()
    const YearInp1=useRef()
    const YearInp2=useRef()
    const [price1,setPrice1]=useState(0)
    const [price2,setPrice2]=useState(0)
    const { usedCount, newCount } = useSelector(state=>state.autoscondition)
    const [kmin,setKmin]=useState(0)
    const [kmax,setKmax]=useState(0)
    const [pmin,setPmin]=useState(0)
    const [pmax,setPmax]=useState(0)
    const [ymin,setYmin]=useState(0)
    const [ymax,setYmax]=useState(0)
    const [y1,setY1]=useState(0)
    const [y2,setY2]=useState(0)
    const [k1,setK1]=useState(0)
    const [k2,setK2]=useState(0)
    const [automatic,setAutomatic]=useState(0)
    const [filtered,setFiltered]=useState(false)
    const [diesel,setDiesel]=useState(0)
    const [gasoline,setGasoline]=useState(0)
    const [hybrid,setHybrid]=useState(0)
    const [electric,setElectric]=useState(0)
    const [manual,setManual]=useState(0)
    const [type,setType]=useState("")
    const [colorr,setColorr]=useState("")
    const [condition,setCondition]=useState("")
    const [brands,setBrands]=useState({})
    const {brand}=useSelector(state=>state.brand)
    const [con,setCon]=useState(path.id.split("+")[1])
    const [make,setMake]=useState(path.id.split("+")[1])
    const {color}=useSelector(state=>state.color)
    const [all,setAll]=useState(true)
    const [oldestF,setOldestF]=useState(false)
    const [lowestF,setLowestF]=useState(false)
    const [highestF,setHighestF]=useState(false)
    const [tempArr,setTempArr]=useState([])
    const [numberofpages,setNumberofpages]=useState(0)
    const [page,setPage]=useState(1)
    const [loading,setLoading]=useState(false)
    const { autoAds } = useSelector(state=>state.ads)
    useEffect(()=>
    {
        if(page*10>tempArr.slice(page*10).length)
        setPage(1010101010101010)
    },[page])
    useEffect(()=>
    {
setNumberofpages(Math.floor(ads.length/10))
setPage(1)
    },[])

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
    const loadBasedOnYear=()=>
    {
        setFiltered(false)
        const fun=async()=>
        {
try 
{
    setLoading(true)
    let res=await axiosInstance.get(`/autos/getbasedonyeargiven/${y1}/${y2}/${location}`)
    setAds(res.data)
    setLoading(false)
}
catch(e)
{
    throw e
}
        }
        fun()
        YearInp1.current.value=""
        YearInp2.current.value=""
    }
    const loadBasedOnPrice=(e)=>
    {
        setFiltered(false)
        const fun=async()=>
        {
try 
{
    setLoading(true)
    let res=await axiosInstance.get(`/autos/getbasedonpricegiven/${price1}/${price2}/${location}`)
    setAds(res.data)
    setLoading(false)
}
catch(e)
{
    throw e
}
        }
        fun()
        priceInp1.current.value=""
        priceInp2.current.value=""
    }
    const incPage=()=>
    {
        if(page!==1010101010101010)
        setPage(prev=>prev+1)
    }
    useEffect(()=>
    {
        setPage(1)
        const fun=async()=>
        {
          try 
          {
            const x=await axiosInstance.get(`/autos/getbrandcounts/${location}`)
            const xx=await axiosInstance.get(`/autos/getbrandcounts/${location}`)
            const xxx=await axiosInstance.get(`/autos/getbrandcounts/${location}`)
            setBrands(xxx.data)         
            const res=await axiosInstance.get(`/autos/findnumbersbasedoncondition/new/${location}`)    
            res=await axiosInstance.get(`/autos/findnumbersbasedoncondition/new/${location}`)
            res=await axiosInstance.get(`/autos/findnumbersbasedoncondition/new/${location}`)
            dispatch(switchNew(res.data))
            const res1=await axiosInstance.get(`/autos/findnumbersbasedoncondition/used/${location}`)  
            res1=await axiosInstance.get(`/autos/findnumbersbasedoncondition/used/${location}`)  
            res1=await axiosInstance.get(`/autos/findnumbersbasedoncondition/used/${location}`)  
            dispatch(switchUsed(res1.data)) 
            const res1111=await axiosInstance.get(`/autos/getallads/${location}`)  
            setAllTypes(res1111.data)  
            const resx=await axiosInstance.get(`/autos/findnumbersbasedontransmission/automatic/${location}`)
            setAutomatic(resx.data)
            const resxx=await axiosInstance.get(`/autos/findnumbersbasedontransmission/manual/${location}`)
            setManual(resxx.data)
            const resxx11=await axiosInstance.get(`/autos/findnumbersbasedonfuel/diesel/${location}`)
            setDiesel(resxx11.data)
            const resxxx=await axiosInstance.get(`/autos/findnumbersbasedonfuel/gas/${location}`)
            setGasoline(resxxx.data)
            const resxxxx=await axiosInstance.get(`/autos/findnumbersbasedonfuel/hybrid/${location}`)
            setHybrid(resxxxx.data)
            const resxxxxx=await axiosInstance.get(`/autos/findnumbersbasedonfuel/electric/${location}`)
            setElectric(resxxxxx.data)
            const color1=await axiosInstance.get(`/autos/findcolors/red/${location}`)
            dispatch(changered(color1.data))
            const color2=await axiosInstance.get(`/autos/findcolors/black/${location}`)
            dispatch(changeblack(color2.data))
            const color3=await axiosInstance.get(`/autos/findcolors/blue/${location}`)
            dispatch(changeblue(color3.data))
            const color4=await axiosInstance.get(`/autos/findcolors/brown/${location}`)
            dispatch(changebrown(color4.data))
            const color5=await axiosInstance.get(`/autos/findcolors/green/${location}`)
            dispatch(changegreen(color5.data))
            const color6=await axiosInstance.get(`/autos/findcolors/white/${location}`)
            dispatch(changewhite(color6.data))
            const color7=await axiosInstance.get(`/autos/findcolors/grey/${location}`)
            dispatch(changegrey(color7.data))
            const color8=await axiosInstance.get(`/autos/findcolors/gold/${location}`)
            dispatch(changegold(color8.data))
            const color88=await axiosInstance.get(`/autos/findcolors/yellow/${location}`)
            dispatch(changeyellow(color88.data))
            const color9=await axiosInstance.get(`/autos/findcolors/tan/${location}`)
            dispatch(changetan(color9.data))
            const color10=await axiosInstance.get(`/autos/findcolors/pink/${location}`)
            dispatch(changepink(color10.data))
            const color11=await axiosInstance.get(`/autos/findcolors/purple/${location}`)
            dispatch(changepurple(color11.data))
            const color12=await axiosInstance.get(`/autos/findcolors/silver/${location}`)
            dispatch(changesilver(color12.data))
            const color13=await axiosInstance.get(`/autos/findcolors/orange/${location}`)
            dispatch(changeorange(color13.data))
          }
          catch(e)
          {
            throw e
          }
        }
  fun()
    },[])
    useEffect(()=>
    {
        setPage(1)
        const fun=async()=>
        {
            if(path.id.split("+")[1]==="any")
{
try 
{
    setLoading(true)
const res=await axiosInstance.get(`/autos/getallads/${location}`)
setAds(res.data)
setTempArr(res.data)
setLoading(false)
}
catch(e)
{
    throw e
}
     }}
     fun()
    },[])
   useEffect(()=>
   {
    setPage(1)
    dispatch(changemercedes(brands.mercedes))
    dispatch(changeacura(brands.acura))
    dispatch(changealm(brands.alm))
    dispatch(changeamc(brands.amc))
    dispatch(changeaston(brands.aston))
    dispatch(changeaudi(brands.audi))
    dispatch(changegmc(brands.gmc))
    dispatch(changeaustin(brands.austin))
    dispatch(changebentley(brands.bentley))
    dispatch(changebmw(brands.bmw))
    dispatch(changebricklin(brands.bricklin))
    dispatch(changebugatti(brands.bugatti))
    dispatch(changebuick(brands.buick))
    dispatch(changecadillac(brands.cadillac))
    dispatch(changechevrolet(brands.chevrolet))
    dispatch(changechrysler(brands.chrysler))
    dispatch(changedaewoo(brands.daewoo))
    dispatch(changedaihatsu(brands.daihatsu))
    dispatch(changedodge(brands.dodge))
    dispatch(changedatsun(brands.datsun))
    dispatch(changeeagle(brands.eagle))
    dispatch(changeferrari(brands.ferrari))
    dispatch(changefiat(brands.fiat))
    dispatch(changegenesis(brands.genesis))
    dispatch(changegeo(brands.geo))
    dispatch(changehonda(brands.honda))
    dispatch(changehummer(brands.hummer))
    dispatch(changehyundai(brands.hyundai))
    dispatch(changeinfiniti(brands.infiniti))
    dispatch(changeisuzu(brands.isuzu))
    dispatch(changejaguar(brands.jaguar))
    dispatch(changejeep(brands.jeep))
    dispatch(changekia(brands.kia))
    dispatch(changelamborghini(brands.lamborghini))
    dispatch(changeland(brands.land))
    dispatch(changealexus(brands.lexus))
    dispatch(changeford(brands.ford))
    dispatch(changelincoln(brands.lincoln))
    dispatch(changelotus(brands.lotus))
    dispatch(changemaserati(brands.maserati))
    dispatch(changemaybach(brands.maybach))
    dispatch(changemazda(brands.mazda))
    dispatch(changemcLaren(brands.mcLaren))
    dispatch(changemercury(brands.mercury))
    dispatch(changemg(brands.mg))
    dispatch(changemini(brands.mini))
    dispatch(changemitsubishi(brands.mitsubishi))
    dispatch(changenissan(brands.nissan))
    dispatch(changeoldsmobile(brands.oldsmobile))
    dispatch(changeopel(brands.opel))
    dispatch(changepeugeot(brands.peugeot))
    dispatch(changeplymouth(brands.plymouth))
    dispatch(changepolestar(brands.polestar))
    dispatch(changepontiac(brands.pontiac))
    dispatch(changeporsche(brands.porsche))
    dispatch(changeram(brands.ram))
    dispatch(changerenault(brands.renault))
    dispatch(changesaab(brands.saab))
    dispatch(changesaturn(brands.saturn))
    dispatch(changescion(brands.scion))
    dispatch(changeshelby(brands.shelby))
    dispatch(changesmart(brands.smart))
    dispatch(changesubaru(brands.subaru))
    dispatch(changesuzuki(brands.suzuki))
    dispatch(changetoyota(brands.toyota))
    dispatch(changetesla(brands.tesla))
    dispatch(changetriumph(brands.triumph))
    dispatch(changevolvo(brands.volvo))
    dispatch(changevolkswagen(brands.volkswagen))
   },[brands])
   useEffect(()=>
   {
    setPage(1)
    window.scrollTo({top:0,behavior:"smooth"})
   },[k1,k2])
   useEffect(()=>
   {
    setPage(1)
   },[kmin,kmax])
    const navigate=useNavigate()
        const handlefuel=(type)=>
    {
        setFiltered(false)
        switch (type)
        {
               case "diesel":
                {
                            navigate(`/autosbasedoncondition/0+Diesel+fuel_type`)
                }
                break;
                case "gas":
                {
                            navigate(`/autosbasedoncondition/0+Gas+fuel_type`)
                }
                break;
                case "hybrid":
                {
                            navigate(`/autosbasedoncondition/0+Hybrid+fuel_type`)
                }
                break;
                case "electric":
                {
                            navigate(`/autosbasedoncondition/0+Electric+fuel_type`)
                }
                break;
        }
    }
    const handlemake=(value)=>
    {
        setFiltered(false)
        switch(value)
        {
                   case "mercedes":
                        {
                    navigate(`/autosbasedoncondition/+mercedes+make`)
                    break;
                        }
                   case "audi":
                        {
                        navigate(`/autosbasedoncondition/+audi+make`)
                        break;
                        }
                    case "austin":
                        {
                            navigate(`/autosbasedoncondition/+austin+make`)
                            break;
                        }
    
                    case "bentley":
                            {
                                navigate(`/autosbasedoncondition/+bentley+make`)
                                break;
                            }
                    case "bricklin":
                                {
                                    navigate(`/autosbasedoncondition/+bricklin+make`)
                                    break;
                                }
                    case "bugatti":
                                {
                                     navigate(`/autosbasedoncondition/+bugatti+make`)
                                     break;
                                }
                    case "buick":
                                {
                                    navigate(`/autosbasedoncondition/+buick+make`)
                                    break;
                                    }
                    case "cadillac":
                                     {
                                     navigate(`/autosbasedoncondition/+cadillac+make`)
                                   break;
                                     }            
                    case "isuzu":
                                     {
                                     navigate(`/autosbasedoncondition/+isuzu+make`)
                                       break;
                                     }          
                    case "infiniti":
                                     {
                                     navigate(`/autosbasedoncondition/+infiniti+make`)
                                      break;
                                     }          
                    case "hyundai":
                                     {
                                    navigate(`/autosbasedoncondition/+hyundai+make`)
                                     break;
                                     }          
                    case "hummer":
                                     {
                                     navigate(`/autosbasedoncondition/+hummer+make`)
                                     break;
                                     }          
                    case "honda":
                                     {
                                    navigate(`/autosbasedoncondition/+honda+make`)
                                    break;
                                     }          
                    case "gmc":
                                     {
                                    navigate(`/autosbasedoncondition/+gmc+make`)
                                    break;
                                     }          
                    case "geo":
                                     {
                                    navigate(`/autosbasedoncondition/+geo+make`)
                                    break;
                                     }          
                    case "genesis":
                                     {
                                    navigate(`/autosbasedoncondition/+genesis+make`)
                                    break;
                                     }          
                    case "ford":
                                     {
                                    navigate(`/autosbasedoncondition/+ford+make`)
                                    break;
                                     }          
                    case "fiat":
                                     {
                                   navigate(`/autosbasedoncondition/+fiat+make`)
                                    break;
                                     }          
                    case "ferrari":
                                     {
                                   navigate(`/autosbasedoncondition/+ferrari+make`)
                                    break;
                                     }          
                    case "eagle":
                                    {
                                   navigate(`/autosbasedoncondition/+eagle+make`)
                                     break;
                                    }          
                    case "dodge":
                                    {
                                    navigate(`/autosbasedoncondition/+dodge+make`)
                                    break;
                                    }          
                    case "daihatsu":
                                    {
                                    navigate(`/autosbasedoncondition/+daihatsu+make`)
                                    break;
                                    }          
                    case "datsun":
                                    {
                                    navigate(`/autosbasedoncondition/+datsun+make`)
                                    break;
                                    }          
                    case "daewoo":
                                    {
                                    navigate(`/autosbasedoncondition/+daewoo+make`)
                                    break;
                                    }          
                    case "chrysler":
                                     {
                                    navigate(`/autosbasedoncondition/+chrysler+make`)
                                     break;
                                     }          
                    case "mcLaren":
                                     {
                                    navigate(`/autosbasedoncondition/+mcLaren+make`)
                                    break;
                                     }          
                    case "mazda":
                                     {
                                   navigate(`/autosbasedoncondition/+mazda+make`)
                                    break;
                                     }          
                    case "maybach":
                                     {
                                    navigate(`/autosbasedoncondition/+maybach+make`)
                                     break;
                                     }          
                    case "maserati":
                                     {
                                    navigate(`/autosbasedoncondition/+maserati+make`)
                                     break;
                                     }          
                    case "lotus":
                                    {
                                    navigate(`/autosbasedoncondition/+lotus+make`)
                                     break;
                                    }          
                    case "Lincoln":
                                    {
                                    navigate(`/autosbasedoncondition/+Lincoln+make`)
                                     break;
                                    }          
                    case "fiat":
                                    {
                                    navigate(`/autosbasedoncondition/+fiat+make`)
                                    break;
                                    }          
                     case "lexus":
                                    {
                                       navigate(`/autosbasedoncondition/+lexus+make`)
                                    break;
                                    }         
                    case "lamborghini":
                                    {
                                       navigate(`/autosbasedoncondition/+lamborghini+make`)
                                    break;
                                     }          
                    case "kia":
                                     {
                                        navigate(`/autosbasedoncondition/+kia+make`)
                                    break;
                                     }                                       
                    case "jeep":
                                     {
                                        navigate(`/autosbasedoncondition/+jeep+make`)
                                    break;
                                     }          
                    case "mini":
                                     {
                                        navigate(`/autosbasedoncondition/+mini+make`)
                                        break;
                                     }         
                    case "mg":
                                        {
                                        navigate(`/autosbasedoncondition/+mg+make`)
                                        break;
                                         }          
                    case "mercury":
                                         {
                                        navigate(`/autosbasedoncondition/+mercury+make`)
                                        break;
                                         }                                       
                    case "mercedes":
                                         {
                                         navigate(`/autosbasedoncondition/+mercedes+make`)
                                         break;
                                         }         

                    case "peugeot":
                                            {
                                          navigate(`/autosbasedoncondition/+peugeot+make`)
                                          break;
                                            }         
                    case "opel":
                                               {
                                          navigate(`/autosbasedoncondition/+opel+make`)
                                          break;
                                                }          
                    case "oldsmobile":
                                                {
                                          navigate(`/autosbasedoncondition/+oldsmobile+make`)
                                          break;
                                                }                                       
                    case "nissan":
                        {
                                         navigate(`/autosbasedoncondition/+nissan+make`)
                                         break;
                        }         
                    case "saab":
                            {
                                         navigate(`/autosbasedoncondition/+saab+make`)
                                         break;
                            }
                    case "renault":
                                {
                                           navigate(`/autosbasedoncondition/+renault+make`)
                                           break;
                                }
                    case "land":
                                    {
                                            navigate(`/autosbasedoncondition/+land+make`)
                                            break;
                                    }
                    case "ram":
                                    {
                                            navigate(`/autosbasedoncondition/+ram+make`)
                                            break;
                                    }
                    case "porsche":
                                    {
                                            navigate(`/autosbasedoncondition/+porsche+make`)
                                            break;
                                    }
                    case "smart":
                                    {
                                            navigate(`/autosbasedoncondition/+smart+make`)
                                            break;
                                    }
                    case "shelby":
                                    {
                                            navigate(`/autosbasedoncondition/+shelby+make`)
                                            break;
                                    }
                    case "scion":
                                   {
                                           navigate(`/autosbasedoncondition/+scion+make`)
                                            break;
                                   }
                    case "saturn":
                                   {
                                           navigate(`/autosbasedoncondition/+saturn+make`)
                                            break;
                                   }
                    case "tesla":
                                   {
                                            navigate(`/autosbasedoncondition/+tesla+make`)
                                            break;
                                   }
                    case "toyota":
                                   {
                                            navigate(`/autosbasedoncondition/+toyota+make`)
                                            break;
                                   }
                     case "suzuki":
                                   {
                                           navigate(`/autosbasedoncondition/+suzuki+make`)
                                            break;
                                   }
                    case "volkswagen":
                                   {
                                           navigate(`/autosbasedoncondition/+volkswagen+make`)
                                            break;
                                   }
                    case "subaru":
                                   {
                                           navigate(`/autosbasedoncondition/+saturn+make`)
                                            break;
                                   }
                    case "triumph":
                                   {
                                           navigate(`/autosbasedoncondition/+triumph+make`)
                                            break;
                                   }
                    case "volvo":
                                   {
                                           navigate(`/autosbasedoncondition/+volvo+make`)
                                             break;
                                   }
                    case "amc":
                                   {
                                           navigate(`/autosbasedoncondition/+amc+make`)
                                             break;
                                   }
                    case "am":
                                   {
                                            navigate(`/autosbasedoncondition/+am+make`)
                                              break;
                                   }
                    case "alfa":
                                   {
                                             navigate(`/autosbasedoncondition/+alfa+make`)
                                              break;
                                   }
                    case "acura":
                                   {
                                              navigate(`/autosbasedoncondition/+acura+make`)
                                              break;
                               }
                    case "aston":
                               {
                                              navigate(`/autosbasedoncondition/+aston+make`)
                                               break;
                               }                                                                                       
                    case "bmw":
                               {
                                              navigate(`/autosbasedoncondition/+bmw+make`)
                                               break;
                               }       
                    case "chevrolet":
                               {
                                              navigate(`/autosbasedoncondition/+chevrolet+make`)
                                               break;
                               }  
                    case "hummer":
                               {
                                              navigate(`/autosbasedoncondition/+hummer+make`)
                                               break;
                               }  
                               default: break;
        }
    }
    const handletransmission=(value)=>
    {
        setFiltered(false)
        if(value==="automatic")
navigate(`/autosbasedoncondition/0+Automatic+transmission`)
        if(value==="manual")
navigate(`/autosbasedoncondition/0+Manual+transmission`)
    }
    const handlecondition=async(condition)=>
    {
setFiltered(false)
navigate(`/autosbasedoncondition/con+${condition}+condition`)
    }
    const handlecolor=(color)=>
    {
        setFiltered(false)
navigate(`/autosbasedoncondition/0+${color}+color`)
    }
    useEffect(()=>
    {
        setPage(1)
        setK1(path.id.split("+")[0])
        setK2(path.id.split("+")[1])
        setMake(path.id.split("+")[1])
        setType(path.id.split("+")[2])
        setColorr(path.id.split("+")[1])
        setCondition(path.id.split("+")[1])
        const fun=async()=>
        {
            try
            {
if(type==="fuel_type")
            {
try 
{
    setLoading(true)
    const res=await axiosInstance.get(`/autos/getrecordsbasedonfueltype/${k2}/${location}`)
    setAds(res.data)
    setLoading(false)
}
catch(e)
{
    console.clear()
}
            }
if(type==="transmission")
{
     try 
    {
        setLoading(true)
        const res=await axiosInstance.get(`/autos/getrecordsbasedontransmission/${k2}/${location}`)
        setAds(res.data)
        setLoading(false)
    }
    catch(e)
    {
        console.clear()
    }
}
if(type==="condition")
            {
try 
{
    setLoading(true)
    const res=await axiosInstance.get(`/autos/fetchbasedoncondition/${condition}/${location}`)
    setAds(res.data)
    setLoading(false)
}
catch(e)
{
    throw e
}
            }
if(path.id.split("+")[2]==="color")
                    {
try 
{
    setLoading(true)
    const res=await axiosInstance.get(`/autos/getrecordsbasedoncolor/${path.id.split("+")[1]}/${location}`)
    setAds(res.data)
    setLoading(false)
}
catch(e)
{
    throw e
}
                    }
if(type==="brand")
                    {
try 
{
    setLoading(true)
    const res=await axiosInstance.get(`/autos/getrecordsbasedoncolor/${color}/${location}`)
    setAds(res.data)
    setLoading(false)
}
catch(e)
{
    throw e
}
                    }
if(type==="make")
{
try 
{
    setLoading(true)
    const res=await axiosInstance.get(`/autos/getbasedonmake/${make}/${location}`)
    setAds(res.data)
    setLoading(false)
}
catch(e)
{
    throw e
}
}
}
            catch(e)
            {
console.clear()
            }
        }
        fun()
    },[condition,path,p1,p2,y1,y2,k1,k2,type,make])


return(
val ? <Locations val={val} setVal={setVal}/>
:
<>
<Navbar/>
    <div style={{backgroundColor: "#f8f9f9",minHeight:"100vh"}}>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="content">
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
<h5 className="headingsForMobile" style={{fontWeight:"bold",color:"#373373"}}>{condition==="any" ? `Cars in ${location==="Newfoundland and Labrador" ? "Newfoundland" : location}` : condition==="used"? `Used Cars in ${location==="Newfoundland and Labrador" ? "Newfoundland" : location}` : condition==="new"?  `New Cars in ${location==="Newfoundland and Labrador" ? "Newfoundland" : location}` : `${make[0].toUpperCase() + make.slice(1).toLowerCase()} Cars in ${location==="Newfoundland and Labrador" ? "Newfoundland" : location}`}</h5>
{loading? <h5 className="headingsForMobile" style={{fontWeight:"bold",color:"#373373"}}>Showing ~ Results in {location==="Newfoundland and Labrador" ? "Newfoundland" : location}</h5> : <h5 className="headingsForMobile" style={{fontWeight:"bold",color:"#373373"}}>Showing {ads.length} Results in {location==="Newfoundland and Labrador" ? "Newfoundland" : location}</h5> }

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
<h6  style={{fontWeight:"bold",color:"#373373"}}>Current Matches ({usedCount+newCount})</h6>
{filtered && <h6 className="hideOnExpand" onClick={()=>{setFiltered(false)}} style={{fontWeight:"bold",color:"#373373",cursor:"pointer"}}>X</h6>}
    </div>
    <div className="hr"></div>
    <h6 className="title">Location:</h6>
<div className="city sel3ct3d">
    {location==="Newfoundland and Labrador" ? "Newfoundland" : location} ({usedCount+newCount})
</div>
<div className="hr"></div>
<div className="autoResults">
<div className="title">Autos:</div>
<div ref={rf} onClick={()=>handlecondition("any")} className="unsel3ct3d">Any ({usedCount+newCount})</div>
<div onClick={()=>handlecondition("new")} className="unsel3ct3d">New ({newCount})</div>
<div onClick={()=>handlecondition("used")} className="unsel3ct3d">Used ({usedCount})</div>
<div className="hr"></div>
<div className="title">Car Make:</div>
<div onClick={()=>{handlemake("acura")}} className="unsel3ct3d">Acura ({brand.acura})</div>
<div onClick={()=>{handlemake("amc")}} className="unsel3ct3d">AMC ({brand.amc})</div>
<div onClick={()=>{handlemake("aston")}} className="unsel3ct3d">Aston Martin ({brand.aston})</div>
<div  className="view" onClick={()=>setViewed(prev=>!prev)} style={{textAlign:"center",padding:10,cursor:"pointer",color:"blue",fontWeight:"bold",display:`${!viewed ? "block" : "none"}`}}>
    View All Makes
</div>
<div className={`${!viewed && "secondSection"}`}>
<div onClick={()=>{handlemake("audi")}} className="unsel3ct3d">Audi ({brand.audi})</div>
<div onClick={()=>{handlemake("austin")}} className="unsel3ct3d">Austin-Healey ({brand.austin})</div>
<div onClick={()=>{handlemake("bentley")}} className="unsel3ct3d">Bentley ({brand.bentley})</div>
<div onClick={()=>{handlemake("bmw")}} className="unsel3ct3d">BMW ({brand.bmw})</div>
<div onClick={()=>{handlemake("bricklin")}} className="unsel3ct3d">Bricklin ({brand.bricklin})</div>
<div onClick={()=>{handlemake("bugatti")}} className="unsel3ct3d">Bugatti ({brand.bugatti})</div>
<div onClick={()=>{handlemake("buick")}} className="unsel3ct3d">Buick ({brand.buick})</div>
<div onClick={()=>{handlemake("cadillac")}} className="unsel3ct3d">Cadillac ({brand.cadillac})</div>
<div onClick={()=>{handlemake("chevrolet")}} className="unsel3ct3d">Chevrolet ({brand.chevrolet})</div>
<div onClick={()=>{handlemake("chrysler")}} className="unsel3ct3d">Chrysler ({brand.chrysler})</div>
<div onClick={()=>{handlemake("daewoo")}} className="unsel3ct3d">Daewoo ({brand.daewoo})</div>
<div onClick={()=>{handlemake("daihatsu")}} className="unsel3ct3d">Daihatsu ({brand.daihatsu})</div>
<div onClick={()=>{handlemake("datsun")}} className="unsel3ct3d">Datsun ({brand.datsun})</div>
<div onClick={()=>{handlemake("dodge")}} className="unsel3ct3d">Dodge ({brand.dodge})</div>
<div onClick={()=>{handlemake("ferrari")}} className="unsel3ct3d">Ferrari ({brand.ferrari})</div>
<div onClick={()=>{handlemake("fiat")}} className="unsel3ct3d">Fiat ({brand.fiat})</div>
<div onClick={()=>{handlemake("ford")}} className="unsel3ct3d">Ford ({brand.ford})</div>
<div onClick={()=>{handlemake("genesis")}} className="unsel3ct3d">Genesis ({brand.genesis})</div>
<div onClick={()=>{handlemake("geo")}} className="unsel3ct3d">Geo ({brand.geo})</div>
<div onClick={()=>{handlemake("gmc")}} className="unsel3ct3d">GMC ({brand.gmc})</div>
<div onClick={()=>{handlemake("honda")}} className="unsel3ct3d">Honda ({brand.honda})</div>
<div onClick={()=>{handlemake("hummer")}} className="unsel3ct3d">HUMMER ({brand.hummer})</div>
<div onClick={()=>{handlemake("isuzu")}} className="unsel3ct3d">Isuzu ({brand.isuzu})</div>
<div onClick={()=>{handlemake("jaguar")}} className="unsel3ct3d">Jaguar ({brand.jaguar})</div>
<div onClick={()=>{handlemake("jeep")}} className="unsel3ct3d">Jeep ({brand.jeep})</div>
<div onClick={()=>{handlemake("kia")}} className="unsel3ct3d">Kia ({brand.kia})</div>
<div onClick={()=>{handlemake("lamborghini")}} className="unsel3ct3d">Lamborghini ({brand.lamborghini})</div>
<div onClick={()=>{handlemake("land")}} className="unsel3ct3d">Land Rover ({brand.land})</div>
<div onClick={()=>{handlemake("lexus")}} className="unsel3ct3d">Lexus ({brand.lexus})</div>
<div onClick={()=>{handlemake("hyundai")}} className="unsel3ct3d">Hyundai ({brand.hyundai})</div>
<div onClick={()=>{handlemake("infiniti")}} className="unsel3ct3d">Infiniti ({brand.infiniti})</div>
<div onClick={()=>{handlemake("eagle")}} className="unsel3ct3d">Eagle ({brand.eagle})</div>
<div onClick={()=>{handlemake("Lincoln")}} className="unsel3ct3d">Lincoln ({brand.lincoln})</div>
<div onClick={()=>{handlemake("lotus")}} className="unsel3ct3d">Lotus ({brand.lotus})</div>
<div onClick={()=>{handlemake("maserati")}} className="unsel3ct3d">Maserati ({brand.maserati})</div>
<div onClick={()=>{handlemake("maybach")}} className="unsel3ct3d">Maybach ({brand.maybach})</div>
<div onClick={()=>{handlemake("mazda")}} className="unsel3ct3d">Mazda ({brand.mazda})</div>
<div onClick={()=>{handlemake("mcLaren")}} className="unsel3ct3d">McLaren ({brand.mcLaren})</div>
<div onClick={()=>{handlemake("mercedes")}} className="unsel3ct3d">Mercedes ({brand.mercedes})</div>
<div onClick={()=>{handlemake("mercury")}} className="unsel3ct3d">Mercury ({brand.mercury})</div>
<div onClick={()=>{handlemake("mg")}} className="unsel3ct3d">MG ({brand.mg})</div>
<div onClick={()=>{handlemake("mini")}} className="unsel3ct3d">MINI ({brand.mini})</div>
<div onClick={()=>{handlemake("mitsubishi")}} className="unsel3ct3d">Mitsubishi({brand.mitsubishi})</div>
<div onClick={()=>{handlemake("nissan")}} className="unsel3ct3d">Nissan ({brand.nissan})</div>
<div onClick={()=>{handlemake("oldsmobile")}} className="unsel3ct3d">Oldsmobile ({brand.oldsmobile})</div>
<div onClick={()=>{handlemake("opel")}} className="unsel3ct3d">Opel ({brand.opel})</div>
<div onClick={()=>{handlemake("peugeot")}} className="unsel3ct3d">Peugeot ({brand.peugeot})</div>
<div onClick={()=>{handlemake("plymouth")}} className="unsel3ct3d">Plymouth ({brand.plymouth})</div>
<div onClick={()=>{handlemake("polestar")}} className="unsel3ct3d">Polestar ({brand.polestar})</div>
<div onClick={()=>{handlemake("pontiac")}} className="unsel3ct3d">Pontiac ({brand.pontiac})</div>
<div onClick={()=>{handlemake("porsche")}} className="unsel3ct3d">Porsche ({brand.porsche})</div>
<div onClick={()=>{handlemake("ram")}} className="unsel3ct3d">Ram ({brand.ram})</div>
<div onClick={()=>{handlemake("renault")}} className="unsel3ct3d">Renault ({brand.renault})</div>
<div onClick={()=>{handlemake("saab")}} className="unsel3ct3d">Saab ({brand.saab})</div>
<div onClick={()=>{handlemake("saturn")}} className="unsel3ct3d">Saturn ({brand.saturn})</div>
<div onClick={()=>{handlemake("scion")}} className="unsel3ct3d">Scion ({brand.scion})</div>
<div onClick={()=>{handlemake("shelby")}} className="unsel3ct3d">Shelby ({brand.shelby})</div>
<div onClick={()=>{handlemake("subaru")}} className="unsel3ct3d">Subaru ({brand.subaru})</div>
<div onClick={()=>{handlemake("suzuki")}} className="unsel3ct3d">Suzuki ({brand.suzuki})</div>
<div onClick={()=>{handlemake("toyota")}} className="unsel3ct3d">Toyota ({brand.toyota})</div>
<div onClick={()=>{handlemake("tesla")}} className="unsel3ct3d">Tesla ({brand.tesla})</div>
<div onClick={()=>{handlemake("smart")}} className="unsel3ct3d">Smart ({brand.smart})</div>
<div onClick={()=>{handlemake("subaru")}} className="unsel3ct3d">Subaru ({brand.subaru})</div>
<div onClick={()=>{handlemake("triumph")}} className="unsel3ct3d">Triumph ({brand.triumph})</div>
<div onClick={()=>{handlemake("volvo")}} className="unsel3ct3d">Volvo ({brand.volvo})</div>
<div onClick={()=>{handlemake("volkswagen")}} className="unsel3ct3d">Volkswagen ({brand.volkswagen})</div>
<div className="view" onClick={()=>setViewed(prev=>!prev)} style={{textAlign:"center",padding:10,cursor:"pointer",color:"blue",fontWeight:"bold",display:`${viewed ? "block" : "none"}`}}>
    View Less
</div>
</div>
<div className="hr"></div>
</div>
<div className="title">Price:</div>
<input onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()} ref={priceInp1} onChange={(e)=>{setPrice1(e.target.value)}} style={{width:50,height:35,margin:"10px"}} type="NUMBER"/>
To
<input onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()} ref={priceInp2} onChange={(e)=>{setPrice2(e.target.value)}} style={{width:50,height:35,margin:"10px"}} type="NUMBER"/>
<button onClick={(e)=>{loadBasedOnPrice(e)}} style={{cursor:"pointer",minHeight:25,padding:5,color:"blue",borderRadius:10,border:"none"}}>Search</button>
<div className="hr"></div>
<div className="title">Year:</div>
<input onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()} ref={YearInp1} onChange={(e)=>{setY1(e.target.value)}} style={{width:50,height:35,margin:"10px"}} type="NUMBER"/>
To
<input onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()} ref={YearInp2} onChange={(e)=>{setY2(e.target.value)}} style={{width:50,height:35,margin:"10px"}} type="NUMBER"/>
<button onClick={(e)=>{loadBasedOnYear(e)}} style={{cursor:"pointer",minHeight:25,padding:5,color:"blue",borderRadius:10,border:"none"}}>Search</button>
<div className="title">
    Color
</div>
<div onClick={(e)=>{handlecolor(e.target.innerText.split(" ")[0])}} className="unsel3ct3d">
Red ({color.red})
</div>
<div onClick={(e)=>{handlecolor(e.target.innerText.split(" ")[0])}} className="unsel3ct3d">
Silver ({color.silver})
</div>
<div onClick={(e)=>{handlecolor(e.target.innerText.split(" ")[0])}} className="unsel3ct3d">
Black ({color.black})
</div>
<div className="view" onClick={()=>setColorViewed(prev=>!prev)} style={{textAlign:"center",padding:10,cursor:"pointer",color:"blue",fontWeight:"bold",display:`${!colorViewed ? "block" : "none"}`}}>
    View All Colors
</div>
<div className={`${!colorViewed && "secondSection"}`}>
<div onClick={(e)=>{handlecolor(e.target.innerText.split(" ")[0])}} className="unsel3ct3d">
Blue ({color.blue})
</div>
<div onClick={(e)=>{handlecolor(e.target.innerText.split(" ")[0])}} className="unsel3ct3d">
Brown ({color.brown})
</div>
<div onClick={(e)=>{handlecolor(e.target.innerText.split(" ")[0])}} className="unsel3ct3d">
Green ({color.green})
</div>
<div onClick={(e)=>{handlecolor(e.target.innerText.split(" ")[0])}} className="unsel3ct3d">
White ({color.white})
</div>
<div onClick={(e)=>{handlecolor(e.target.innerText.split(" ")[0])}} className="unsel3ct3d">
Orange ({color.orange})
</div>
<div onClick={(e)=>{handlecolor(e.target.innerText.split(" ")[0])}} className="unsel3ct3d">
Grey ({color.grey})
</div>
<div onClick={(e)=>{handlecolor(e.target.innerText.split(" ")[0])}} className="unsel3ct3d">
Gold ({color.gold})
</div>
<div onClick={(e)=>{handlecolor(e.target.innerText.split(" ")[0])}} className="unsel3ct3d">
Yellow ({color.yellow})
</div>
<div onClick={(e)=>{handlecolor(e.target.innerText.split(" ")[0])}} className="unsel3ct3d">
Tan ({color.tan})
</div>
<div onClick={(e)=>{handlecolor(e.target.innerText.split(" ")[0])}} className="unsel3ct3d">
Pink ({color.pink})
</div>
<div onClick={(e)=>{handlecolor(e.target.innerText.split(" ")[0])}} className="unsel3ct3d">
Purple ({color.purple})
</div>
<div className="view" onClick={()=>setColorViewed(prev=>!prev)} style={{textAlign:"center",padding:10,cursor:"pointer",color:"blue",fontWeight:"bold",display:`${colorViewed ? "block" : "none"}`}}>
    View Less
</div>
</div>
<div className="hr"></div>
<div className="title">
Transmission
</div>
<div onClick={()=>{handletransmission("automatic")}} className="unsel3ct3d">Automatic ({automatic})</div>
<div onClick={()=>{handletransmission("manual")}} className="unsel3ct3d">Manual ({manual})</div>
<div className="hr"></div>
<div className="title">
Fuel Type:
</div>
<div onClick={()=>{handlefuel("diesel")}} className="unsel3ct3d">Diesel ({diesel})</div>
<div onClick={()=>{handlefuel("gas")}} className="unsel3ct3d">Gasoline ({gasoline})</div>
<div onClick={()=>{handlefuel("hybrid")}} className="unsel3ct3d">Hybrid ({hybrid})</div>
<div onClick={()=>{handlefuel("electric")}} className="unsel3ct3d">Electric ({electric})</div>
</div>

            </div>
   <div className="col-lg-9 cardsForMobile">
    <div style={{display:filtered && "none"}}>
   {
oldestF? page>=1? tempArr.slice(0,page*10).map(ad=>
    {
        return  <AutoPost ad={ad} key={ad._id}/>
    }) : tempArr.map(ad=>
            {
                return  <AutoPost ad={ad} key={ad._id}/>
            })
            : lowestF? page>=1? tempArr.slice(0,page*10).map(ad=>
                {
                    return  <AutoPost ad={ad} key={ad._id}/>
                }) :  tempArr.map(ad=>
                {
                    return  <AutoPost ad={ad} key={ad._id}/>
                })
                : highestF? page>=1? tempArr.map(ad=>
                    {
                        return  <AutoPost ad={ad} key={ad._id}/>
                    }) : tempArr.slice(0,page*10).map(ad=>
                    {
                        return  <AutoPost ad={ad} key={ad._id}/>
                    })
                    : page>=1 ? ads.slice().sort((a, b) => b.createdAt > a.createdAt ? 1 : -1).slice(0,page*10).map(ad=>
                        {
                            return  <AutoPost ad={ad} key={ad._id}/>
                        }) : ads.slice().sort((a, b) => b.createdAt > a.createdAt ? 1 : -1).map(ad=>
                        {

                            return  <AutoPost ad={ad} key={ad._id}/>
                        })
   } 
    </div>
   { !filtered &&
    (loading? <h5 style={{textAlign:"center"}}><img className="loadingGif" width={50} src={LoadingGif}/></h5>
    :ads.length===0 ? <h5  style={{textAlign:"center"}}>No Results.</h5>
    : ads.length<10 ? <h5  style={{textAlign:"center",cursor:"pointer"}}>You viewed all results</h5>
    :    <h5 onClick={incPage} className={`${page!==1010101010101010 && "loadMore"}`} style={{textAlign:"center",cursor:`${page!==1010101010101010 ? "pointer" : ""}`}}>{page===1010101010101010 ? "You viewed all results" : "Load More..."}</h5>
   )}
    </div>
    </div>
    </div>
    </div>
<Footer/>
</>
)}
export default AutosBaesOnCondition
