import Navbar from "../components/Navbar"
import { useEffect, useState, useRef, memo} from "react"
import "./styles.css"
import Footer from "../components/Footer"
import AutoPost from "../components/AutoPost"
import { axiosInstance } from "../config/Config.js"
import LoadingGif from "../Gif/loading.gif"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import TuneIcon from '@mui/icons-material/Tune';
const AutosBasedOnCondition=()=>
{
    const [filter,setFilter]=useState(true)
    const [viewed,setViewed]=useState(false)
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
    const [displayVal,setDisplayVal]=useState("Autos")
    const [neww,setNeww]=useState(0)
    const [used,setUsed]=useState(0)
    const [acura,setAcura]=useState(0)
    const [amc,setAmc]=useState(0)
    const [aston,setAston]=useState(0)
    const [audi,setAudi]=useState(0)
    const [austin,setAustin]=useState(0)
    const [bentley,setBentley]=useState(0)
    const [bmw,setBmw]=useState(0)
    const [bricklin,setBricklin]=useState(0)
    const [bugatti,setBugatti]=useState(0)
    const [buick,setBuick]=useState(0)
    const [cadillac,setCadillac]=useState(0)
    const [chevrolet,setChevrolet]=useState(0)
    const [chrysler,setChrysler]=useState(0)
    const [daewoo,setDaewoo]=useState(0)
    const [daihatsu,setDaihatsu]=useState(0)
    const [datsun,setDatsun]=useState(0)
    const [dodge,setDodge]=useState(0)
    const [ferrari,setFerrari]=useState(0)
    const [fiat,setFiat]=useState(0)
    const [ford,setFord]=useState(0)
    const [genesis,setGenesis]=useState(0)
    const [geo,setGeo]=useState(0)
    const [gmc,setGmc]=useState(0)
    const [honda,setHonda]=useState(0)
    const [hummer,setHummer]=useState(0)
    const [isuzu,setIsuzu]=useState(0)
    const [jaguar,setJaguar]=useState(0)
    const [jeep,setJeep]=useState(0)
    const [kia,setKia]=useState(0)
    const [lamborghini,setLamborghini]=useState(0)
    const [landrover,setLandrover]=useState(0)
    const [lexus,setLexus]=useState(0)
    const [hyundai,setHyundai]=useState(0)
    const [infiniti,setInfiniti]=useState(0)
    const [eagle,setEagle]=useState(0)
    const [lincoln,setLincoln]=useState(0)
    const [lotus,setLotus]=useState(0)
    const [maserati,setMaserati]=useState(0)
    const [maybach,setMaybach]=useState(0)
    const [mazda,setMazda]=useState(0)
    const [mcLaren,setMcLaren]=useState(0)
    const [mercedes,setMercedes]=useState(0)
    const [mercury,setMercury]=useState(0)
    const [mg,setMg]=useState(0)
    const [mini,setMini]=useState(0)
    const [mitsubishi,setMitsubishi]=useState(0)
    const [nissan,setNissan]=useState(0)
    const [oldsmobile,setOldsmobile]=useState(0)
    const [diesel,setDiesel]=useState(0)
    const [gasoline,setGasoline]=useState(0)
    const [hybrid,setHybrid]=useState(0)
    const [electric,setElectric]=useState(0)
    const [opel,setOpel]=useState(0)
    const [peugeot,setPeugeot]=useState(0)
    const [plymouth,setPlymouth]=useState(0)
    const [polestar,setPolestar]=useState(0)
    const [pontiac,setPontiac]=useState(0)
    const [porsche,setPorsche]=useState(0)
    const [ram,setRam]=useState(0)
    const [renault,setRenault]=useState(0)
    const [saab,setSaab]=useState(0)
    const [saturn,setSaturn]=useState(0)
    const [scion,setScion]=useState(0)
    const [shelby,setShelby]=useState(0)
    const [toyota,setToyota]=useState(0)
    const [subaru,setSubaru]=useState(0)
    const [suzuki,setSuzuki]=useState(0)
    const [tesla,setTesla]=useState(0)
    const [smart,setSmart]=useState(0)
    const [triumph,setTriumph]=useState(0)
    const [alm,setAlm]=useState(0)
    const [volvo,setVolvo]=useState(0)
    const [volkswagen,setVolkswagen]=useState(0)
    const [Red,setRed]=useState(0)
    const [Yellow,setYellow]=useState(0)
    const [Tan,setTan]=useState(0)
    const [Pink,setPink]=useState(0)
    const [Purple,setPurple]=useState(0)
    const [Silver,setSilver]=useState(0)
    const [Black,setBlack]=useState(0)
    const [Blue,setBlue]=useState(0)
    const [Brown,setBrown]=useState(0)
    const [Green,setGreen]=useState(0)
    const [White,setWhite]=useState(0)
    const [Orange,setOrange]=useState(0)
    const [Grey,setGrey]=useState(0)
    const [Gold,setGold]=useState(0)
    const [automatic,setAutomatic]=useState(0)
    const [manual,setManual]=useState(0)
    useEffect(()=>
    {
        const fun=async()=>
        {
       if(path.id==="New&Cars")
       {
                const data=await axiosInstance.get(`/autos/getallads/${location}`)
        setAltArr(data.data.filter(ad=>{return ad.condition==="New" && ad.location===location!=="Canada" && ad.location}))
       }
       if(path.id==="Used&Cars")
       {
                const data=await axiosInstance.get(`/autos/getallads/${location}`)
                setAltArr(data.data.filter(ad=>{return ad.condition==="Used" && ad.location===location!=="Canada" && ad.location}))
       }
       if(path.id==="Electric&Cars")
       {
                const data=await axiosInstance.get(`/autos/getallads/${location}`)
                setAltArr(data.data.filter(ad=>{return ad.fuelType==="Electric" && ad.location===location!=="Canada" && ad.location}))
       }}
       fun()
    },[])
    useEffect(()=>
    {        
        setChevrolet(ads.filter(ad=>{return ad.make==="Chevrolet" && ad.location===location!=="Canada" && ad.location}).length)
        setAston(ads.filter(ad=>{return ad.make==="Aston" && ad.location===location!=="Canada" && ad.location}).length)
        setChrysler(ads.filter(ad=>{return ad.make==="Chrysler" && ad.location===location!=="Canada" && ad.location}).length)
        setDaewoo(ads.filter(ad=>{return ad.make==="Daewoo" && ad.location===location!=="Canada" && ad.location}).length)
        setDaihatsu(ads.filter(ad=>{return ad.make==="Daihatsu" && ad.location===location!=="Canada" && ad.location}).length)
        setDatsun(ads.filter(ad=>{return ad.make==="Datsun" && ad.location===location!=="Canada" && ad.location}).length)
        setEagle(ads.filter(ad=>{return ad.make==="Eagle" && ad.location===location!=="Canada" && ad.location}).length)
        setFerrari(ads.filter(ad=>{return ad.make==="Ferrari" && ad.location===location!=="Canada" && ad.location}).length)
        setFiat(ads.filter(ad=>{return ad.make==="Fiat" && ad.location===location!=="Canada" && ad.location}).length)
        setFord(ads.filter(ad=>{return ad.make==="Ford" && ad.location===location!=="Canada" && ad.location}).length)   
        setAudi(ads.filter(ad=>{return ad.make==="Audi" && ad.location===location!=="Canada" && ad.location}).length)
        setAustin(ads.filter(ad=>{return ad.make==="Austin" && ad.location===location!=="Canada" && ad.location}).length)
        setBentley(ads.filter(ad=>{return ad.make==="Bentley" && ad.location===location!=="Canada" && ad.location}).length)
        setBmw(ads.filter(ad=>{return ad.make==="BMW" && ad.location===location!=="Canada" && ad.location}).length)
        setBricklin(ads.filter(ad=>{return ad.make==="Bricklin" && ad.location===location!=="Canada" && ad.location}).length)
        setBugatti(ads.filter(ad=>{return ad.make==="Bugatti" && ad.location===location!=="Canada" && ad.location}).length)
        setBuick(ads.filter(ad=>{return ad.make==="Buick" && ad.location===location!=="Canada" && ad.location}).length)
        setCadillac(ads.filter(ad=>{return ad.make==="Cadilac" && ad.location===location!=="Canada" && ad.location}).length)
        setGenesis(ads.filter(ad=>{return ad.make==="Genesis" && ad.location===location!=="Canada" && ad.location}).length)
        setGeo(ads.filter(ad=>{return ad.make==="Geo" && ad.location===location!=="Canada" && ad.location}).length)
        setGmc(ads.filter(ad=>{return ad.make==="GMC" && ad.location===location!=="Canada" && ad.location}).length)
        setHonda(ads.filter(ad=>{return ad.make==="Honda" && ad.location===location!=="Canada" && ad.location}).length)
        setHummer(ads.filter(ad=>{return ad.make==="Hummer" && ad.location===location!=="Canada" && ad.location}).length)
        setHyundai(ads.filter(ad=>{return ad.make==="Hyundai" && ad.location===location!=="Canada" && ad.location}).length)
        setInfiniti(ads.filter(ad=>{return ad.make==="Infiniti" && ad.location===location!=="Canada" && ad.location}).length)
        setIsuzu(ads.filter(ad=>{return ad.make==="Isuzu" && ad.location===location!=="Canada" && ad.location}).length)
        setJaguar(ads.filter(ad=>{return ad.make==="Jaguar" && ad.location===location!=="Canada" && ad.location}).length)
        setJeep(ads.filter(ad=>{return ad.make==="Jeep" && ad.location===location!=="Canada" && ad.location}).length)
        setKia(ads.filter(ad=>{return ad.make==="Kia" && ad.location===location!=="Canada" && ad.location}).length)
        setLamborghini(ads.filter(ad=>{return ad.make==="Lamborghini" && ad.location===location!=="Canada" && ad.location}).length)
        setLandrover(ads.filter(ad=>{return ad.make==="Land" && ad.location===location!=="Canada" && ad.location}).length)
        setLexus(ads.filter(ad=>{return ad.make==="Lexus" && ad.location===location!=="Canada" && ad.location}).length)
        setLincoln(ads.filter(ad=>{return ad.make==="Lincoln" && ad.location===location!=="Canada" && ad.location}).length)
        setLotus(ads.filter(ad=>{return ad.make==="Lotus" && ad.location===location!=="Canada" && ad.location}).length)
        setMaserati(ads.filter(ad=>{return ad.make==="Maserati" && ad.location===location!=="Canada" && ad.location}).length)
        setMaybach(ads.filter(ad=>{return ad.make==="Maybach" && ad.location===location!=="Canada" && ad.location}).length)
        setMazda(ads.filter(ad=>{return ad.make==="Mazda" && ad.location===location!=="Canada" && ad.location}).length)
        setMcLaren(ads.filter(ad=>{return ad.make==="McLaren" && ad.location===location!=="Canada" && ad.location}).length)
        setMercedes(ads.filter(ad=>{return ad.make==="Mercedes" && ad.location===location!=="Canada" && ad.location}).length)
        setMercury(ads.filter(ad=>{return ad.make==="Mercury" && ad.location===location!=="Canada" && ad.location}).length)
        setMg(ads.filter(ad=>{return ad.make==="MG" && ad.location===location!=="Canada" && ad.location}).length)
        setMini(ads.filter(ad=>{return ad.make==="Mini" && ad.location===location!=="Canada" && ad.location}).length)
        setMitsubishi(ads.filter(ad=>{return ad.make==="Mitsubishi" && ad.location===location!=="Canada" && ad.location}).length)
        setNissan(ads.filter(ad=>{return ad.make==="Nissan" && ad.location===location!=="Canada" && ad.location}).length)
        setOldsmobile(ads.filter(ad=>{return ad.make==="Oldsmobile" && ad.location===location!=="Canada" && ad.location}).length)
        setOpel(ads.filter(ad=>{return ad.make==="Opel" && ad.location===location!=="Canada" && ad.location}).length)
        setPeugeot(ads.filter(ad=>{return ad.make==="Peugeot" && ad.location===location!=="Canada" && ad.location}).length)
        setPlymouth(ads.filter(ad=>{return ad.make==="Plymouth" && ad.location===location!=="Canada" && ad.location}).length)
        setPolestar(ads.filter(ad=>{return ad.make==="Polestar" && ad.location===location!=="Canada" && ad.location}).length)
        setPontiac(ads.filter(ad=>{return ad.make==="Pontiac" && ad.location===location!=="Canada" && ad.location}).length)
        setPorsche(ads.filter(ad=>{return ad.make==="Porsche" && ad.location===location!=="Canada" && ad.location}).length)
        setRam(ads.filter(ad=>{return ad.make==="Ram" && ad.location===location!=="Canada" && ad.location}).length)
        setRenault(ads.filter(ad=>{return ad.make==="Renault" && ad.location===location!=="Canada" && ad.location}).length)
        setAcura(ads.filter(ad=>{return ad.make==="Acura" && ad.location===location!=="Canada" && ad.location}).length)
        setAlm(ads.filter(ad=>{return ad.make==="ALM" && ad.location===location!=="Canada" && ad.location}).length)
        setAmc(ads.filter(ad=>{return ad.make==="AMC" && ad.location===location!=="Canada" && ad.location}).length)
        setVolvo(ads.filter(ad=>{return ad.make==="Volvo" && ad.location===location!=="Canada" && ad.location}).length)
        setVolkswagen(ads.filter(ad=>{return ad.make==="Volkswagen" && ad.location===location!=="Canada" && ad.location}).length)
        setTriumph(ads.filter(ad=>{return ad.make==="Triumph" && ad.location===location!=="Canada" && ad.location}).length)
        setToyota(ads.filter(ad=>{return ad.make==="Toyota" && ad.location===location!=="Canada" && ad.location}).length)
        setTesla(ads.filter(ad=>{return ad.make==="Tesla" && ad.location===location!=="Canada" && ad.location}).length)
        setSuzuki(ads.filter(ad=>{return ad.make==="Suzuki" && ad.location===location!=="Canada" && ad.location}).length)
        setSubaru(ads.filter(ad=>{return ad.make==="Subaru" && ad.location===location!=="Canada" && ad.location}).length)
        setSmart(ads.filter(ad=>{return ad.make==="Smart" && ad.location===location!=="Canada" && ad.location}).length)
        setShelby(ads.filter(ad=>{return ad.make==="Shelby" && ad.location===location!=="Canada" && ad.location}).length)
        setScion(ads.filter(ad=>{return ad.make==="Scion" && ad.location===location!=="Canada" && ad.location}).length)
        setSaturn(ads.filter(ad=>{return ad.make==="Saturn" && ad.location===location!=="Canada" && ad.location}).length)
        setSaab(ads.filter(ad=>{return ad.make==="Saab" && ad.location===location!=="Canada" && ad.location}).length)
        setRed(ads.filter(ad=>{return ad.color==="Red" && ad.location===location!=="Canada" && ad.location}).length)
        setYellow(ads.filter(ad=>{return ad.color==="Yellow" && ad.location===location!=="Canada" && ad.location}).length)
        setTan(ads.filter(ad=>{return ad.color==="Tan" && ad.location===location!=="Canada" && ad.location}).length)
        setPink(ads.filter(ad=>{return ad.color==="Pink" && ad.location===location!=="Canada" && ad.location}).length)
        setPurple(ads.filter(ad=>{return ad.color==="Purple" && ad.location===location!=="Canada" && ad.location}).length)
        setSilver(ads.filter(ad=>{return ad.color==="Silver" && ad.location===location!=="Canada" && ad.location}).length)
        setBlack(ads.filter(ad=>{return ad.color==="Black" && ad.location===location!=="Canada" && ad.location}).length)
        setBlue(ads.filter(ad=>{return ad.color==="Blue" && ad.location===location!=="Canada" && ad.location}).length)
        setBrown(ads.filter(ad=>{return ad.color==="Brown" && ad.location===location!=="Canada" && ad.location}).length)
        setGreen(ads.filter(ad=>{return ad.color==="Green" && ad.location===location!=="Canada" && ad.location}).length)
        setWhite(ads.filter(ad=>{return ad.color==="White" && ad.location===location!=="Canada" && ad.location}).length)
        setOrange(ads.filter(ad=>{return ad.color==="Orange" && ad.location===location!=="Canada" && ad.location}).length)
        setGrey(ads.filter(ad=>{return ad.color==="Grey" && ad.location===location!=="Canada" && ad.location}).length)
        setGold(ads.filter(ad=>{return ad.color==="Gold" && ad.location===location!=="Canada" && ad.location}).length)
        setAutomatic(ads.filter(ad=>{return ad.transmission==="Automatic" && ad.location===location!=="Canada" && ad.location}).length)
        setManual(ads.filter(ad=>{return ad.transmission==="Manual" && ad.location===location!=="Canada" && ad.location}).length)
        setDiesel(ads.filter(ad=>{return ad.fuelType==="Diesel" && ad.location===location!=="Canada" && ad.location}).length)
        setGasoline(ads.filter(ad=>{return ad.fuelType==="Gas" && ad.location===location!=="Canada" && ad.location}).length)
        setHybrid(ads.filter(ad=>{return ad.fuelType==="Hybrid" && ad.location===location!=="Canada" && ad.location}).length)
        setElectric(ads.filter(ad=>{return ad.fuelType==="Electric" && ad.location===location!=="Canada" && ad.location}).length)
    },[ads])
    useEffect(()=>
    {
        setNeww(ads.filter(ad=>{return ad.condition==="New" && ad.location===location!=="Canada" && ad.location}).length)
        setUsed(ads.filter(ad=>{return ad.condition==="Used" && ad.location===location!=="Canada" && ad.location}).length)
    },[ads])
    const handleSearch=(e,val)=>
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
            if(val===1)
            {
                try 
                {
                    const res=await axiosInstance.get(`/autos/getbasedonpricegiven/${val1}/${val2}/${location}`)
                    setAltArr(res.data)
                }
                catch(e)
                {
                    console.clear()
                }
            }
            if(val===2)
            {
                try 
                {
                    const res=await axiosInstance.get(`/autos/getbasedonyeargiven/${val1}/${val2}/${location}`)
                    setAltArr(res.data)
                }
                catch(e)
                {
                    console.clear()
                }
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
            case "Any":
            {
                setDisplayVal(`Cars`)
                setAltArr(ads)
                break;
            }
            case "Used":
            {

                setDisplayVal(`Used Cars`)
                setAltArr(ads.filter(ad=>{return ad.condition==="Used" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "New":
            {
                setDisplayVal(`New Cars`)
                setAltArr(ads.filter(ad=>{return ad.condition==="New" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Acura":
            {
                setDisplayVal("Acura Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Acura" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "AMC":
            {
                setDisplayVal("AMC Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="AMC" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Aston Martin":
            {
                setDisplayVal("Aston Martin Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Aston" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Bentley":
            {
                setDisplayVal("Bentley Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Bentley" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "BMW":
            {
                setDisplayVal("BMW Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="BMW" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Bricklin":
            {
                setDisplayVal("Bricklin Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Bricklin" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Bugatti":
            {
                setDisplayVal("Bugatti Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Bugatti" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Buick":
            {
                setDisplayVal("Buick Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Buick" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Cadillac":
            {
                setDisplayVal("Cadillac Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Cadillac" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Chevrolet":
            {
                setDisplayVal("Chevrolet Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Chevrolet" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Chrysler":
            {
                setDisplayVal("Chrysler Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Chrysler" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Daewoo":
            {
                setDisplayVal("Daewoo Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Daewoo" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Daihatsu":
            {
                setDisplayVal("Daihatsu Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Daihatsu" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Datsun":
            {
                setDisplayVal("Datsun Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Datsun" && ad.location===location!=="Canada" && ad.location}))
                break;
            }

            case "Dodge":
            {
                setDisplayVal("Dodge Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Dodge" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Ferrari":
            {
                setDisplayVal("Ferrari Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Ferrari" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Fiat":
            {
                setDisplayVal("Fiat Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Fiat" && ad.location===location!=="Canada" && ad.location}))
                break;
            }

            case "Ford":
            {
                setDisplayVal("Ford Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Ford" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Genesis":
            {
                setDisplayVal("Genesis Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Genesis" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Geo":
            {
                setDisplayVal("Geo Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Geo" && ad.location===location!=="Canada" && ad.location}))
                break;
            }

            case "GMC":
            {
                setDisplayVal("GMC Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="GMC" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Honda":
            {
                setDisplayVal("Honda Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Honda" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Hummer":
            {
                setDisplayVal("Hummer Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Hummer" && ad.location===location!=="Canada" && ad.location}))
                break;
            }

            case "Isuzu":
            {
                setDisplayVal("Isuzu Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Isuzu" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Jaguar":
            {
                setDisplayVal("Jaguar Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Jaguar" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Jeep":
            {
                setDisplayVal("Jeep Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Jeep" && ad.location===location!=="Canada" && ad.location}))
                break;
            }

            case "Kia":
            {
                setDisplayVal("Kia Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Kia" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Lamborghini":
            {
                setDisplayVal("Lamborghini Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Lamborghini" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Land Rover":
            {
                setDisplayVal("Land Rover Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Land" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Lexus":
            {
                setDisplayVal("Lexus Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Lexus" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Hyundai":
            {
                setDisplayVal("Hyundai Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Hyundai" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Infiniti":
            {
                setDisplayVal("Infiniti Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Infiniti" && ad.location===location!=="Canada" && ad.location}))
                break;
            }

            case "Eagle":
            {
                setDisplayVal("Eagle Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Eagle" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Lincolin":
            {
                setDisplayVal("Lincolin Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Lincolin" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Lotus":
            {
                setDisplayVal("Lotus Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Lotus" && ad.location===location!=="Canada" && ad.location}))
                break;
            }

            case "Maserati":
            {
                setDisplayVal("Maserati Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Maserati" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Maybach":
            {
                setDisplayVal("Maybach Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Maybach" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Mazda":
            {
                setDisplayVal("Mazda Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Mazda" && ad.location===location!=="Canada" && ad.location}))
                break;
            }

            case "McLaren":
            {
                setDisplayVal("McLaren Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="McLaren" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Mercedes":
            {
                setDisplayVal("Mercedes Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Mercedes" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Mercury":
            {
                setDisplayVal("Mercury Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Mercury" && ad.location===location!=="Canada" && ad.location}))
                break;
            }

            case "MG":
            {
                setDisplayVal("MG Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="MG" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Mini":
            {
                setDisplayVal("MINI Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Mini" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Mitsubishi":
            {
                setDisplayVal("Mitsubishi Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Mitsubishi" && ad.location===location!=="Canada" && ad.location}))
                break;
            }

            case "Nissan":
            {
                setDisplayVal("Nissan Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Nissan" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Oldsmobile":
            {
                setDisplayVal("Oldsmobile Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Oldsmobile" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Opel":
            {
                setDisplayVal("Opel Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Opel" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Peugeot":
            {
                setDisplayVal("Peugeot Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Peugeot" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Plymouth":
            {
                setDisplayVal("Plymouth Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Plymouth" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Polestar":
            {
                setDisplayVal("Polestar Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Polestar" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Pontiac":
            {
                setDisplayVal("Pontiac Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Pontiac" && ad.location===location!=="Canada" && ad.location}))
                break;
            }

            case "Porsche":
            {
                setDisplayVal("Porsche Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Porsche" && ad.location===location!=="Canada" && ad.location}))
                break;
            }


            case "Ram":
            {
                setDisplayVal("Ram Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Ram" && ad.location===location!=="Canada" && ad.location}))
                break;
            }


            case "Renault":
            {
                setDisplayVal("Renault Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Renault" && ad.location===location!=="Canada" && ad.location}))
                break;
            }


            case "Saab":
            {
                setDisplayVal("Saab Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Saab" && ad.location===location!=="Canada" && ad.location}))
                break;
            }


            case "Saturn":
            {
                setDisplayVal("Saturn Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Saturn" && ad.location===location!=="Canada" && ad.location}))
                break;
            }


            case "Scion":
            {
                setDisplayVal("Scion Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Scion" && ad.location===location!=="Canada" && ad.location}))
                break;
            }


            case "Shelby":
            {
                setDisplayVal("Shelby Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Shelby" && ad.location===location!=="Canada" && ad.location}))
                break;
            }


            case "Subaru":
            {
                setDisplayVal("Subaru Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Subaru" && ad.location===location!=="Canada" && ad.location}))
                break;
            }


            case "Suzuki":
            {
                setDisplayVal("Suzuki Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Suzuki" && ad.location===location!=="Canada" && ad.location}))
                break;
            }


            case "Toyota":
            {
                setDisplayVal("Toyota Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Toyota" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Tesla":
            {
                setDisplayVal("Tesla Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Tesla" && ad.location===location!=="Canada" && ad.location}))
                break;
            }


            case "Smart":
            {
                setDisplayVal("Smart Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Smart" && ad.location===location!=="Canada" && ad.location}))
                break;
            }


            case "Subaru":
            {
                setDisplayVal("Subaru Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Subaru" && ad.location===location!=="Canada" && ad.location}))
                break;
            }


            case "Triumph":
            {
                setDisplayVal("Triumph Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Triumph" && ad.location===location!=="Canada" && ad.location}))
                break;
            }


            case "Volvo":
            {
                setDisplayVal("Volvo Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Volvo" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Volkswagen":
            {
                setDisplayVal("Volkswagen Cars")
                setAltArr(ads.filter(ad=>{return ad.make==="Volkswagen" && ad.location===location!=="Canada" && ad.location}))
                break;
            }

            case "Red":
            {
                setDisplayVal("Red Cars")
                setAltArr(ads.filter(ad=>{return ad.color==="Red" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Silver":
            {
                setDisplayVal("Silver Cars")
                setAltArr(ads.filter(ad=>{return ad.color==="Silver" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Black":
            {
                setDisplayVal("Black Cars")
                setAltArr(ads.filter(ad=>{return ad.color==="Black" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Blue":
            {
                setDisplayVal("Blue Cars")
                setAltArr(ads.filter(ad=>{return ad.color==="Blue" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Brown":
            {
                setDisplayVal("Brown Cars")
                setAltArr(ads.filter(ad=>{return ad.color==="Brown" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Green":
            {
                setDisplayVal("Green Cars")
                setAltArr(ads.filter(ad=>{return ad.color==="Green" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "White":
            {
                setDisplayVal("White Cars")
                setAltArr(ads.filter(ad=>{return ad.color==="White" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Orange":
            {
                setDisplayVal("Orange Cars")
                setAltArr(ads.filter(ad=>{return ad.color==="Orange" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Grey":
            {
                setDisplayVal("Grey Cars")
                setAltArr(ads.filter(ad=>{return ad.color==="Grey" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Gold":
            {
                setDisplayVal("Gold Cars")
                setAltArr(ads.filter(ad=>{return ad.color==="Gold" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Yellow":
            {
                setDisplayVal("Yellow Cars")
                setAltArr(ads.filter(ad=>{return ad.color==="Yellow" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Tan":
            {
                setDisplayVal("Tan Cars")
                setAltArr(ads.filter(ad=>{return ad.color==="Tan" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Pink":
            {
                setDisplayVal("Pink Cars")
                setAltArr(ads.filter(ad=>{return ad.color==="Pink" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Purple":
            {
                setDisplayVal("Purple Cars")
                setAltArr(ads.filter(ad=>{return ad.color==="Purple" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Automatic":
            {
                setDisplayVal("Automatic Cars")
                setAltArr(ads.filter(ad=>{return ad.transmission==="Automatic" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Manual":
            {
                setDisplayVal("Manual Cars")
                setAltArr(ads.filter(ad=>{return ad.transmission==="Manual" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Diesel":
            {
                setDisplayVal("Diesel Cars")
                setAltArr(ads.filter(ad=>{return ad.fuelType==="Diesel" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Gasoline":
            {
                setDisplayVal("Gas Cars")
                setAltArr(ads.filter(ad=>{return ad.fuelType==="Gas" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Hybrid":
            {
                setDisplayVal("Hybrid Cars")
                setAltArr(ads.filter(ad=>{return ad.fuelType==="Hybrid" && ad.location===location!=="Canada" && ad.location}))
                break;
            }
            case "Electric":
            {
                setDisplayVal("Electric Cars")
                setAltArr(ads.filter(ad=>{return ad.fuelType==="Electric" && ad.location===location!=="Canada" && ad.location}))
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
                    navigate(`/autosbasedoncondition/Any`)
                    break;
                }
                case 2:
                {
                    navigate(`/autosbasedoncondition/New`)
                    break;
                }
                case 3:
                {
                    navigate(`/autosbasedoncondition/Used`)
                    break;
                }
                case 5:
                {
                    navigate(`/autosbasedoncondition/Acura`)
                    break;
                }
                case 6:
                {
                    navigate(`/autosbasedoncondition/AMC`)
                    break;
                }
                case 7:
                {
                    navigate(`/autosbasedoncondition/Aston Martin`)
                    break;
                }
                case 8:
                {
                    navigate(`/autosbasedoncondition/Bentley`)
                     break;
                }
                case 9:
                {
                    navigate(`/autosbasedoncondition/BMW`)
                    break;
                }
                case 10:
                {
                    navigate(`/autosbasedoncondition/Bricklin`)
                    break;
                }
                case 11:
                {
                    navigate(`/autosbasedoncondition/Bugatti`)
                    break;
                }
                case 12:
                {
                    navigate(`/autosbasedoncondition/Buick`)
                    break;
                }
                case 13:
                {
                    navigate(`/autosbasedoncondition/Cadillac`)
                    break;
                }
                case 14:
                {
                    navigate(`/autosbasedoncondition/Chevrolet`)
                    break;
                }
                case 15:
                {
                    navigate(`/autosbasedoncondition/Chrysler`)
                    break;
                }
                case 16:
                {
                    navigate(`/autosbasedoncondition/Daewoo`)
                    break;
                }
                case 17:
                {
                    navigate(`/autosbasedoncondition/Daihatsu`)
                    break;
                }
                case 18:
                {
                    navigate(`/autosbasedoncondition/Datsun`)
                    break;
                }
                case 19:
                {
                    navigate(`/autosbasedoncondition/Dodge`)
                    break;
                }
                case 20:
                {
                    navigate(`/autosbasedoncondition/Ferrari`)
                    break;
                }
                case 21:
                {
                    navigate(`/autosbasedoncondition/Fiat`)
                    break;
                }
                case 22:
                {
                    navigate(`/autosbasedoncondition/Ford`)
                    break;
                }
                case 23:
                {
                    navigate(`/autosbasedoncondition/Genesis`)
                    break;
                }
                case 24:
                {
                    navigate(`/autosbasedoncondition/Geo`)
                    break;
                }
                case 25:
                {
                    navigate(`/autosbasedoncondition/GMC`)
                    break;
                }
                case 26:
                {
                    navigate(`/autosbasedoncondition/Honda`)
                    break;
                }
                case 27:
                {
                    navigate(`/autosbasedoncondition/Hummer`)
                    break;
                }
                case 28:
                {
                    navigate(`/autosbasedoncondition/Isuzu`)
                    break;
                }
                case 29:
                {
                    navigate(`/autosbasedoncondition/Jaguar`)
                    break;
                }
                case 30:
                {
                    navigate(`/autosbasedoncondition/Jeep`)
                    break;
                }
                case 31:
                {
                    navigate(`/autosbasedoncondition/Kia`)
                    break;
                }
                case 32:
                {
                    navigate(`/autosbasedoncondition/Lamborghini`)
                    break;
                }
                case 33:
                {
                    navigate(`/autosbasedoncondition/Land Rover`)
                    break;
                }
                case 34:
                {
                    navigate(`/autosbasedoncondition/Lexus`)
                    break;
                }
                case 35:
                {
                    navigate(`/autosbasedoncondition/Hyundai`)
                    break;
                }
                case 36:
                {
                    navigate(`/autosbasedoncondition/Infiniti`)
                    break;
                }
                case 37:
                {
                    navigate(`/autosbasedoncondition/Eagle`)
                    break;
                }
                case 38:
                {
                    navigate(`/autosbasedoncondition/Lincolin`)
                    break;
                }
                case 39:
                {
                    navigate(`/autosbasedoncondition/Lotus`)
                    break;
                }
                case 40:
                {
                    navigate(`/autosbasedoncondition/Maserati`)
                    break;
                }
                case 41:
                {
                    navigate(`/autosbasedoncondition/Maybach`)
                    break;
                }
                case 42:
                {
                    navigate(`/autosbasedoncondition/Mazda`)
                    break;
                }
                case 43:
                {
                    navigate(`/autosbasedoncondition/McLaren`)
                    break;
                }
                case 44:
                {
                    navigate(`/autosbasedoncondition/Mercedes`)
                    break;
                }
                case 45:
                {
                    navigate(`/autosbasedoncondition/Mercury`)
                    break;
                }
                case 46:
                {
                    navigate(`/autosbasedoncondition/MG`)
                    break;
                }
                case 47:
                {
                    navigate(`/autosbasedoncondition/Mini`)
                    break;
                }
                case 48:
                {
                    navigate(`/autosbasedoncondition/Mitsubishi`)
                    break;
                }
                case 49:
                {
                    navigate(`/autosbasedoncondition/Nissan`)
                    break;
                }
                case 50:
                {
                    navigate(`/autosbasedoncondition/Oldsmobile`)
                    break;
                }
                case 51:
                {
                    navigate(`/autosbasedoncondition/Opel`)
                    break;
                }
                case 52:
                {
                    navigate(`/autosbasedoncondition/Peugeot`)
                    break;
                }
                case 53:
                {
                    navigate(`/autosbasedoncondition/Plymouth`)
                    break;
                }
                case 54:
                {
                    navigate(`/autosbasedoncondition/Polestar`)
                    break;
                }
                case 55:
                {
                    navigate(`/autosbasedoncondition/Pontiac`)
                    break;
                }
                case 56:
                {
                    navigate(`/autosbasedoncondition/Porsche`)
                    break;
                }
                case 57:
                {
                    navigate(`/autosbasedoncondition/Ram`)
                    break;
                }
                case 58:
                {
                    navigate(`/autosbasedoncondition/Renault`)
                    break;
                }
                case 59:
                {
                    navigate(`/autosbasedoncondition/Saab`)
                    break;
                }
                case 60:
                {
                    navigate(`/autosbasedoncondition/Saturn`)
                    break;
                }
                case 61:
                {
                    navigate(`/autosbasedoncondition/Scion`)
                    break;
                }
                case 62:
                {
                    navigate(`/autosbasedoncondition/Shelby`)
                    break;
                }
                case 63:
                {
                    navigate(`/autosbasedoncondition/Subaru`)
                    break;
                }
                case 64:
                {
                    navigate(`/autosbasedoncondition/Suzuki`)
                    break;
                }
                case 65:
                {
                    navigate(`/autosbasedoncondition/Toyota`)
                    break;
                }
                case 66:
                {
                    navigate(`/autosbasedoncondition/Tesla`)
                    break;
                }
                case 67:
                {
                    navigate(`/autosbasedoncondition/Smart`)
                    break;
                }
                case 68:
                {
                    navigate(`/autosbasedoncondition/Subaru`)
                    break;
                }
                case 69:
                {
                    navigate(`/autosbasedoncondition/Triumph`)
                    break;
                }
                case 70:
                {
                    navigate(`/autosbasedoncondition/Volvo`)
                    break;
                }
                case 71:
                {
                    navigate(`/autosbasedoncondition/Volkswagen`)
                    break;
                }
                case 72:
                {
                    navigate(`/autosbasedoncondition/Red`)
                    break;
                }
                case 73:
                {
                    navigate(`/autosbasedoncondition/Silver`)
                    break;
                }
                case 74:
                {
                    navigate(`/autosbasedoncondition/Black`)
                    break;
                }
                case 75:
                {
                    navigate(`/autosbasedoncondition/Blue`)
                    break;
                }
                case 76:
                {
                    navigate(`/autosbasedoncondition/Brown`)
                    break;
                }
                case 77:
                {
                    navigate(`/autosbasedoncondition/Green`)
                    break;
                }
                case 78:
                {
                    navigate(`/autosbasedoncondition/White`)
                    break;
                }
                case 79:
                {
                    navigate(`/autosbasedoncondition/Orange`)
                    break;
                }
                case 80:
                {
                    navigate(`/autosbasedoncondition/Grey`)
                    break;
                }
                case 81:
                {
                    navigate(`/autosbasedoncondition/Gold`)
                    break;
                }
                case 82:
                {
                    navigate(`/autosbasedoncondition/Yellow`)
                    break;
                }
                case 83:
                {
                    navigate(`/autosbasedoncondition/Tan`)
                    break;
                }
                case 84:
                {
                    navigate(`/autosbasedoncondition/Pink`)
                    break;
                }
                case 85:
                {
                    navigate(`/autosbasedoncondition/Purple`)
                    break;
                }
                case 86:
                {
                    navigate(`/autosbasedoncondition/Automatic`)
                    break;
                }
                case 87:
                {
                    navigate(`/autosbasedoncondition/Manual`)
                    break;
                }
                case 88:
                {
                    navigate(`/autosbasedoncondition/Diesel`)
                    break;
                }
                case 89:
                {
                    navigate(`/autosbasedoncondition/Gasoline`)
                    break;
                }
                case 90:
                {
                    navigate(`/autosbasedoncondition/Hybrid`)
                    break;
                }
                case 91:
                {
                    navigate(`/autosbasedoncondition/Electric`)
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
            const data=await axiosInstance.get(`/autos/getallads/${location}`)
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
<div className="title">Autos:</div>
<div onClick={()=>{handleNavigation(1)}} className="unsel3ct3d">Any ({neww+used})</div>
<div onClick={()=>{handleNavigation(2)}} className="unsel3ct3d">New ({neww})</div>
<div onClick={()=>{handleNavigation(3)}} className="unsel3ct3d">Used ({used})</div>
<div className="hr"></div>
<div className="title">Car Make:</div>
<div onClick={()=>{handleNavigation(5)}} className="unsel3ct3d">Acura ({acura})</div>
<div onClick={()=>{handleNavigation(6)}} className="unsel3ct3d">AMC ({amc})</div>
<div onClick={()=>{handleNavigation(7)}} className="unsel3ct3d">Aston Martin ({aston})</div>
<div onClick={()=>{handleNavigation(8)}} className="unsel3ct3d">Bentley ({bentley})</div>
<div onClick={()=>{handleNavigation(9)}} className="unsel3ct3d">BMW ({bmw})</div>
<div onClick={()=>{handleNavigation(10)}} className="unsel3ct3d">Bricklin ({bricklin})</div>
<div onClick={()=>{handleNavigation(11)}} className="unsel3ct3d">Bugatti ({bugatti})</div>
<div onClick={()=>{handleNavigation(12)}} className="unsel3ct3d">Buick ({buick})</div>
<div onClick={()=>{handleNavigation(13)}} className="unsel3ct3d">Cadillac ({cadillac})</div>
<div onClick={()=>{handleNavigation(14)}} className="unsel3ct3d">Chevrolet ({chevrolet})</div>
<div  className="view" onClick={()=>setViewed(prev=>!prev)} style={{textAlign:"center",padding:10,cursor:"pointer",color:"blue",fontWeight:"bold",display:`${!viewed ? "block" : "none"}`}}>
    View All Makes
</div>
<div className={`${!viewed && "secondSection"}`}>

<div onClick={()=>{handleNavigation(15)}} className="unsel3ct3d">Chrysler ({chrysler})</div>
<div onClick={()=>{handleNavigation(16)}} className="unsel3ct3d">Daewoo ({daewoo})</div>
<div onClick={()=>{handleNavigation(17)}} className="unsel3ct3d">Daihatsu  ({daihatsu})</div>
<div onClick={()=>{handleNavigation(18)}} className="unsel3ct3d">Datsun  ({datsun})</div>
<div onClick={()=>{handleNavigation(19)}} className="unsel3ct3d">Dodge  ({dodge})</div>
<div onClick={()=>{handleNavigation(20)}} className="unsel3ct3d">Ferrari  ({ferrari})</div>
<div onClick={()=>{handleNavigation(21)}} className="unsel3ct3d">Fiat  ({fiat})</div>
<div onClick={()=>{handleNavigation(22)}} className="unsel3ct3d">Ford  ({ford})</div>
<div onClick={()=>{handleNavigation(23)}} className="unsel3ct3d">Genesis  ({genesis})</div>
<div onClick={()=>{handleNavigation(24)}} className="unsel3ct3d">Geo  ({geo})</div>
<div onClick={()=>{handleNavigation(25)}} className="unsel3ct3d">GMC  ({gmc})</div>
<div onClick={()=>{handleNavigation(26)}} className="unsel3ct3d">Honda ({honda})</div>
<div onClick={()=>{handleNavigation(27)}} className="unsel3ct3d">HUMMER ({hummer})</div>
<div onClick={()=>{handleNavigation(28)}} className="unsel3ct3d">Isuzu  ({isuzu})</div>
<div onClick={()=>{handleNavigation(29)}} className="unsel3ct3d">Jaguar  ({jaguar})</div>
<div onClick={()=>{handleNavigation(30)}} className="unsel3ct3d">Jeep  ({jeep})</div>
<div onClick={()=>{handleNavigation(31)}} className="unsel3ct3d">Kia  ({kia})</div>
<div onClick={()=>{handleNavigation(32)}} className="unsel3ct3d">Lamborghini  ({lamborghini})</div>
<div onClick={()=>{handleNavigation(33)}} className="unsel3ct3d">Land Rover  ({landrover})</div>
<div onClick={()=>{handleNavigation(34)}} className="unsel3ct3d">Lexus  ({lexus})</div>
<div onClick={()=>{handleNavigation(35)}} className="unsel3ct3d">Hyundai ({hyundai})</div>
<div onClick={()=>{handleNavigation(36)}} className="unsel3ct3d">Infiniti  ({infiniti})</div>
<div onClick={()=>{handleNavigation(37)}} className="unsel3ct3d">Eagle  ({eagle})</div>
<div onClick={()=>{handleNavigation(38)}} className="unsel3ct3d">Lincoln  ({lincoln})</div>
<div onClick={()=>{handleNavigation(39)}} className="unsel3ct3d">Lotus  ({lotus})</div>
<div onClick={()=>{handleNavigation(40)}} className="unsel3ct3d">Maserati  ({maserati})</div>
<div onClick={()=>{handleNavigation(41)}} className="unsel3ct3d">Maybach  ({maybach})</div>
<div onClick={()=>{handleNavigation(42)}} className="unsel3ct3d">Mazda  ({mazda})</div>
<div onClick={()=>{handleNavigation(43)}} className="unsel3ct3d">McLaren  ({mcLaren})</div>
<div onClick={()=>{handleNavigation(44)}} className="unsel3ct3d">Mercedes ({mercedes})</div>
<div onClick={()=>{handleNavigation(45)}} className="unsel3ct3d">Mercury  ({mercury})</div>
<div onClick={()=>{handleNavigation(46)}} className="unsel3ct3d">MG  ({mg})</div>
<div onClick={()=>{handleNavigation(47)}} className="unsel3ct3d">MINI  ({mini})</div>
<div onClick={()=>{handleNavigation(48)}} className="unsel3ct3d">Mitsubishi ({mitsubishi})</div>
<div onClick={()=>{handleNavigation(49)}} className="unsel3ct3d">Nissan  ({nissan})</div>
<div onClick={()=>{handleNavigation(50)}} className="unsel3ct3d">Oldsmobile  ({oldsmobile})</div>
<div onClick={()=>{handleNavigation(51)}} className="unsel3ct3d">Opel  ({opel})</div>
<div onClick={()=>{handleNavigation(52)}} className="unsel3ct3d">Peugeot  ({peugeot})</div>
<div onClick={()=>{handleNavigation(53)}} className="unsel3ct3d">Plymouth  ({plymouth})</div>
<div onClick={()=>{handleNavigation(54)}} className="unsel3ct3d">Polestar ({polestar})</div>
<div onClick={()=>{handleNavigation(55)}} className="unsel3ct3d">Pontiac   ({pontiac})</div>
<div onClick={()=>{handleNavigation(56)}} className="unsel3ct3d">Porsche   ({porsche})</div>
<div onClick={()=>{handleNavigation(57)}} className="unsel3ct3d">Ram  ({ram})</div>
<div onClick={()=>{handleNavigation(58)}} className="unsel3ct3d">Renault   ({renault})</div>
<div onClick={()=>{handleNavigation(59)}} className="unsel3ct3d">Saab   ({saab})</div>
<div onClick={()=>{handleNavigation(60)}} className="unsel3ct3d">Saturn   ({saturn})</div>
<div onClick={()=>{handleNavigation(61)}} className="unsel3ct3d">Scion  ({scion})</div>
<div onClick={()=>{handleNavigation(62)}} className="unsel3ct3d">Shelby   ({shelby})</div>
<div onClick={()=>{handleNavigation(63)}} className="unsel3ct3d">Subaru   ({subaru})</div>
<div onClick={()=>{handleNavigation(64)}} className="unsel3ct3d">Suzuki   ({suzuki})</div>
<div onClick={()=>{handleNavigation(65)}} className="unsel3ct3d">Toyota   ({toyota})</div>
<div onClick={()=>{handleNavigation(66)}} className="unsel3ct3d">Tesla   ({tesla})</div>
<div onClick={()=>{handleNavigation(67)}} className="unsel3ct3d">Smart  ({smart})</div>
<div onClick={()=>{handleNavigation(68)}} className="unsel3ct3d">Subaru   ({subaru})</div>
<div onClick={()=>{handleNavigation(69)}} className="unsel3ct3d">Triumph   ({triumph})</div>
<div onClick={()=>{handleNavigation(70)}} className="unsel3ct3d">Volvo   ({volvo})</div>
<div onClick={()=>{handleNavigation(71)}} className="unsel3ct3d">Volkswagen  ({volkswagen})</div>
<div className="view" onClick={()=>setViewed(prev=>!prev)} style={{textAlign:"center",padding:10,cursor:"pointer",color:"blue",fontWeight:"bold",display:`${viewed ? "block" : "none"}`}}>
    View Less
</div>
</div>
<div className="hr"></div>
<div className="title">Car Make:</div>

<div onClick={()=>{handleNavigation(72)}} className="unsel3ct3d">Red  ({Red})</div>
<div onClick={()=>{handleNavigation(73)}} className="unsel3ct3d">Silver   ({Silver})</div>
<div onClick={()=>{handleNavigation(74)}} className="unsel3ct3d">Black   ({Black})</div>
<div onClick={()=>{handleNavigation(75)}} className="unsel3ct3d">Blue   ({Blue})</div>
<div onClick={()=>{handleNavigation(76)}} className="unsel3ct3d">Brown   ({Brown})</div>
<div onClick={()=>{handleNavigation(77)}} className="unsel3ct3d">Green   ({Green})</div>
<div onClick={()=>{handleNavigation(78)}} className="unsel3ct3d">White  ({White})</div>
<div onClick={()=>{handleNavigation(79)}} className="unsel3ct3d">Orange   ({Orange})</div>
<div onClick={()=>{handleNavigation(80)}} className="unsel3ct3d">Grey   ({Grey})</div>
<div onClick={()=>{handleNavigation(81)}} className="unsel3ct3d">Gold   ({Gold})</div>
<div onClick={()=>{handleNavigation(82)}} className="unsel3ct3d">Yellow  ({Yellow})</div>
<div onClick={()=>{handleNavigation(83)}} className="unsel3ct3d">Tan  ({Tan})</div>
<div onClick={()=>{handleNavigation(84)}} className="unsel3ct3d">Pink  ({Pink})</div>
<div onClick={()=>{handleNavigation(85)}} className="unsel3ct3d">Purple  ({Purple})</div>
<div className="hr"></div>
</div>
<div className="title">Price:</div>
<form style={{display:"flex",justifyContent:"center",gap:20,padding:15,alignItems:"center"}}>
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
    <button onClick={(e)=>{handleSearch(e,1)}} style={{backgroundColor:"green",marginTop:20,border:"none",color:"#fff",borderRadius:10,padding:4,cursor:"pointer",fontSize:14}}>Search</button>
    </div>
</form>
<div className="hr"></div>
<div className="title">Year:</div>
<form style={{display:"flex",justifyContent:"center",gap:20,padding:15,alignItems:"center"}}>
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
    <button onClick={(e)=>{handleSearch(e,2)}} style={{backgroundColor:"green",marginTop:20,border:"none",color:"#fff",borderRadius:10,padding:4,cursor:"pointer",fontSize:14}}>Search</button>
    </div>
</form>
<div className="hr"></div>
<div className="title">
Transmission:
</div>
<div onClick={()=>{handleNavigation(86)}} className="unsel3ct3d">Automatic ({automatic})</div>
<div onClick={()=>{handleNavigation(87)}} className="unsel3ct3d">Manual ({manual})</div>
<div className="hr"></div>
<div className="title">
Fuel Type:
</div>
<div onClick={()=>{handleNavigation(88)}} className="unsel3ct3d">Diesel ({diesel})</div>
<div onClick={()=>{handleNavigation(89)}} className="unsel3ct3d">Gasoline ({gasoline})</div>
<div onClick={()=>{handleNavigation(90)}} className="unsel3ct3d">Hybrid ({hybrid})</div>
<div onClick={()=>{handleNavigation(91)}} className="unsel3ct3d">Electric ({electric})</div>
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
                    : page>=1 && altArr===null ? ads.slice().sort((a, b) => b.createdAt > a.createdAt ? 1 : -1).slice(0,page*10).map(ad=>
                        {
                            return  <AutoPost ad={ad} key={ad._id}/>
                        }) : altArr===null? ads.slice().sort((a, b) => b.createdAt > a.createdAt ? 1 : -1).map(ad=>
                        {

                            return  <AutoPost ad={ad} key={ad._id}/>
                        }) : altArr.slice().sort((a, b) => b.createdAt > a.createdAt ? 1 : -1).map(ad=>
                            {
    
                                return  <AutoPost ad={ad} key={ad._id}/>
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
export default memo(AutosBasedOnCondition)
