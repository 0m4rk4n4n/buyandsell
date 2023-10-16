import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { axiosInstance } from "../config/Config.js"
import "./styles.css"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useRef } from "react"
import app from "../firebase/firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

const Post=()=>
{
    const [btnActivated,setBtnActivated]=useState(false)
    const [digits,setDigits]=useState(0)
    const [msg,setMsg]=useState(false)
    const navigate=useNavigate()
    const [empmsg,setEmpmsg]=useState(false)
    const [selection,setSelection]=useState(0)
    const [carSelected,setCarSelected]=useState(false)
    const [addMore,setAddMore]=useState(false)
    const [caryearSelected,setCaryearSelected]=useState(false)
    const [transmissionSelected,setTransmissionSelected]=useState(false)
    const [carConditionSelected,setCarConditionSelected]=useState(false)
    const [fuelTypeSelected,setFuelTypeSelected]=useState(false)
    const [carColorSelected,setCarColorSelected]=useState(false)
    const [nnew,setNnew]=useState(false)
    const [carModel,setCarModel]=useState("")
    const [carYear,setCarYear]=useState(0)
    const [carColor,setCarColor]=useState("")
    const [autoMsg,setAutoMsg]=useState(false)
    const [carTransmission,setCatTransmission]=useState("")
    const [carCondition,setCarCondition]=useState("")
    const [fuelType,setFuelType]=useState("")
    const [mileage,setMileage]=useState(0)
    const [carPrice,setCarPrice]=useState(0)
    const [mileageChanged,setMileageChanged]=useState(false)
    const [priceChanged,setPriceChanged]=useState(false)
    const [picChanged,setPicChanged]=useState(false)
    const {currentUser}=useSelector(state=>state.user)
    const [title,setTitle]=useState("")
    const [infoMissing,setInfoMissing]=useState(false)
    const [img1,setImg1]=useState(undefined)
    const [img2,setImg2]=useState(undefined)
    const [img3,setImg3]=useState(undefined)
    const [img4,setImg4]=useState(undefined)
    const [img5,setImg5]=useState(undefined)
    const [img6,setImg6]=useState(undefined)
    const [realestateinfomissing,setRealestateinfomissing]=useState(false)
    const [img1Perc,setImg1Perc]=useState(0)
    const [img2Perc,setImg2Perc]=useState(0)
    const [img3Perc,setImg3Perc]=useState(0)
    const [img4Perc,setImg4Perc]=useState(0)
    const [img5Perc,setImg5Perc]=useState(0)
    const [img6Perc,setImg6Perc]=useState(0)
    const [bedrooms,setBedrooms]=useState(0)
    const [bathrooms,setBathrooms]=useState(0)
    const [showNexttt,setShowNexttt]=useState(false)
    const [showNextt,setShowNextt]=useState(false)
    const [catVal,setCatVal]=useState(0)
    const [catrgorySelected,setCategorySelected]=useState(false)
    const [forSale,setForSale]=useState(0)
    const [showNextttt,setShowNextttt]=useState(false)
    const [shortServiceDesc,setShortServiceDesc]=useState(false)
    const [shortPetDesc,setShortPetDesc]=useState(false)
    const [ready,setReady]=useState(false)
    const [inputs,setInputs]=useState({})
    const [numOfFiles,setNumOfFiles]=useState(0)
    const [waitTime,setWaitTime]=useState(0)
    const [descNotLong,setDescnotLong]=useState(false)
    const [carDesc,setCarDesc]=useState("")
    const [realEstatePrice,setRealEstatePrice]=useState(0)
    const [jobDesc,setJobDesc]=useState("")
    const [petsAnswer,setPetsAnswer]=useState("")
    const [showPriceForRealEstate,setShowPriceForRealEstate]=useState(false)
    const [rentalType,setRentalType]=useState(0)
    const [saleType,setSaleType]=useState(0)
    const [showPetsSection,setShowPetsSection]=useState(false)
    const [rentalSelected,setRentalSelected]=useState(false)
    const [saleSelected,setSaleSelected]=useState(false)
    const [allUploaded,setAllUploaded]=useState(false)
    const [xcxc,setXcxc]=useState(false)
    const [reSet,setRESet]=useState(false)
    const [realEstateCategory,setRealEstateCategory]=useState("")
    const [propertyType,setPropertyType]=useState("")
    const [petsAllowed,setPetsAllowed]=useState("")
    const [realEstateDescription,setRealEstateDescription]=useState("")
    const [realEstateDesc,setRealEstateDesc]=useState("")
    const [RELoc,setRELoc]=useState("")
    const [sf,setSF]=useState(0)
    const [jobType,setJobType]=useState("")
    const [showPr1ce,setShowPr1ce]=useState(false)
    const [salary,setSalary]=useState("")
    const [urgMsg,setUrgMsg]=useState("")
    const [showUrgHirMsg,setShowurgHirMsg]=useState(false)
    const [notEnough,setNotEnough]=useState(false)
    const [showPicsSection,setShowPicsSection]=useState(false)
    const [jobTypeSelected,setJobTypeSelected]=useState(false)
    const [showJobD3sc,setShowJobD3sc]=useState(false)
    const [servicePrice,setServicePrice]=useState(0)
    const [showDescSect,setShowDescSect]=useState(false)
    const [serviceDesc,setServiceDesc]=useState("")
    const [showPicsforServ,setShowPicsforServ]=useState(false)
    const [adop,setAdop]=useState(0)
    const [showPetDesc,setShowPetDesc]=useState(false)
    const [petDesc,setPetDesc]=useState("")
    const [showPetImgSec,setShowPetImgSec]=useState(false)
    const [carDescEntered,setCarDescEntered]=useState(false)
    const [urgHirining,setUrgHiring]=useState(false)
    const [locSelected,setLocSelected]=useState(false)
    const [locSelectedForJobs,setLocSelectedForJobs]=useState(false)
    const [autoAdLoc,setAutoAdLoc]=useState("Canada")
    const [priceEntered,setPriceEntered]=useState(false)
    const [jobInfoMissing,setJobInfoMissing]=useState(false)
    const [adoptionFeeEntered,setAdoptionFeeEntered]=useState(false)
    const [serviceInfoMissing,setServiceInfoMissing]=useState(false)
    const [petsInfoMissing,setPetsInfoMissing]=useState(false)
    useEffect(()=>{window.scrollTo({ top: 0 });},[])
    useEffect(()=>
    {
        !currentUser && navigate("/login")  },[])
    const handleCarDesc=(e)=>
    {
        setCarDesc(e.target.value)
        setCarDescEntered(true)
    }
    const handlePetDesc=(e)=>
    {
        setPetDesc(e.target.value)
        setShowPetImgSec(true)
    }
    const handlePetAdopFee=(e)=>
    {
        e.target.value=Math.abs(e.target.value)
        setAdop(Math.abs(e.target.value))
        setShowPetDesc(true)
    }
    const handleServicePrice=(e)=>
    {
        e.target.value=Math.abs(e.target.value)
        setServicePrice(Math.abs(e.target.value))
        setPriceEntered(true)
    }
    const handleJobDesc=(e)=>
    {
        setShowPicsSection(true)
        setJobDesc(e.target.value)
    }
    const handleServiceDesc=(e)=>
    {
        setShowPicsforServ(true)
        setServiceDesc(e.target.value)
    }
    const handleAutoAdLocation=(e)=>
    {
        setAutoAdLoc(e.target.value)
        setLocSelectedForJobs(true)
        setShowDescSect(true)
        switch(e.target.value)
        {
            case "1":
                {
                    setAutoAdLoc("Alberta")
                    break;
                }
            case "2":
                {
                    setAutoAdLoc("British Colombia")
                     break;
                }
            case "3":
                {
                    setAutoAdLoc("Manitoba")
                     break;
                }
            case "4":
                {
                    setAutoAdLoc("New Brunswick")
                     break;
                }
            case "5":
                {
                    setAutoAdLoc("Newfoundland and Labrador")
                     break;
                }
            case "6":
                {
                    setAutoAdLoc("Northwest Territories")
                    break;
                }
            case "7":
                {
                    setAutoAdLoc("Nova Scotia")
                    break;
               }
            case "8":
                {
                    setAutoAdLoc("Nunavut")
                    break;
                }
            case "9":
                {
                    setAutoAdLoc("Ontario")
                    break;
                }
            case "10":
                {
                    setAutoAdLoc("Prince Edward Island")
                    break;
                }
            case "11":
                {
                    setAutoAdLoc("Quebec")
                    break;
                }
            case "12":
                {
                    setAutoAdLoc("Saskatchewan")
                    break;
                }
            case "13":
                {
                    setAutoAdLoc("Yukon")
                    break;
                }
                default:
                    {
                        setAutoAdLoc("")
                        break;
                    }
        }
        setLocSelected(true)
    }
    const handleJobType=(e)=>
    {
        switch(e.target.value)
        {
            case "1":
                {
                    setJobType("Full Time")
                    break;
                }
            case "2":
                {
                     setJobType("Part Time")
                     break;
                }
            case "3":
                {
                     setJobType("Remote")
                     break;
                }
            case "4":
                {
                     setJobType("Hybrid")
                     break;
                }
            case "5":
                {
                     setJobType("Temporary")
                     break;
                }
            case "6":
                {
                    setJobType("Contract")
                    break;
                }
        }
        setJobTypeSelected(true)
    }
    const handleRESub=()=>
    {

        const fun=async()=>
        {
           if(realEstateDesc==="" || title==="" || propertyType==="Category" || realEstatePrice=="" || petsAnswer==="Category" || bedrooms==="Bedrooms" || bathrooms==="Bathrooms" || carYear==="Year" || sf==="" || RELoc==="")
           {
               setRealestateinfomissing(true)
           }
           else if (realEstateDesc.length<100)
           {
               setAddMore(true)
           }
           else
           {
            try 
            {
                const res=await axiosInstance.post(`/real-estate/add_ad`,{userId:currentUser._id,title:title,description:realEstateDesc,Img:[inputs.imgUrl1,inputs.imgUrl2,inputs.imgUrl3,inputs.imgUrl4,inputs.imgUrl5,inputs.imgUrl6],type:propertyType,price:realEstatePrice,pets:petsAnswer==="1" ? "yes" : "no",rental:catVal==="2" ? true : false,bedrooms:bedrooms,bathrooms:bathrooms,size:sf,location:RELoc})
                res.status===200 && navigate(`/realestatead/${res.data._id}`)
            }
            catch(e)
            {
                e.response.status===401 && navigate("/session-expired")
                console.clear()
            }

           }
        }
        fun()
    }   
    const handlePetSub=async()=>
    {
        const fun=async()=>
        {
            if(petDesc.length<100)
            {
                setShortPetDesc(true)
            }
            else 
            {
                if(title==="" || adop===0 || autoAdLoc==="" || petDesc==="")
                {
                    setPetsInfoMissing(true)
                }
                else 
                {
    
                    try 
                    {
                        const res11= await axiosInstance.post(`/pets/add_ad`,{userId:currentUser._id,title:title,description:petDesc,Img:[inputs.imgUrl1,inputs.imgUrl2,inputs.imgUrl3,inputs.imgUrl4,inputs.imgUrl5,inputs.imgUrl6],price:adop,location:autoAdLoc})
                        res11.status===200 && navigate(`/petsad/${res11.data._id}`)
                    }
                    catch(e)
                    { 
                        e.response.status===401 && navigate("/session-expired")
                        throw e
                    }
                }
            }
            
        }
        fun()
    }
    const handleServSub=async()=>
    {
        const fun=async()=>
        {
            if(serviceDesc.length<100)
            {
                setShortServiceDesc(true)
            }
            else 
            {
                if(title==="" || jobType==="Category" || servicePrice===0 || autoAdLoc==="" || serviceDesc==="")
                {
                    setServiceInfoMissing(true)
                }
                else 
                {
                    
               try 
               {
               const res12= await axiosInstance.post(`/services/add_ad`,{userId:currentUser._id,title:title,description:serviceDesc,Img:[inputs.imgUrl1,inputs.imgUrl2,inputs.imgUrl3,inputs.imgUrl4,inputs.imgUrl5,inputs.imgUrl6],price:servicePrice,location:autoAdLoc})
               res12.status===200 && navigate(`/servicead/${res12.data._id}`)
               }
               catch(e)
               { 
                e.response.status===401 && navigate("/session-expired")
                console.clear()
               }
               }
            }
            
        }
        fun()
    }

  const handleUrgHirMsg=(e)=>
  {
    setUrgHiring(true)
    switch(e.target.value)
    {
        case "0":
            {
                setUrgMsg("")
                break;
            }
        case "1":
            {
                setUrgMsg("Yes")
                break;
            }
        case "2":
            {
                setUrgMsg("No")
                break;
            }
    }
    setShowJobD3sc(true)
  }
    const handleRELoc=(e)=>
    {
        switch(e.target.value)
        {
            case "1":
                {
                    setRELoc("Alberta")
                    break;
                }
            case "2":
                {
                    setRELoc("British Colombia")
                    break;
                }
            case "3":
                {
                    setRELoc("Manitoba")
                    break;
                }
            case "4":
                {
                     setRELoc("New Brunswick")
                     break;
                }
           case "5":
                {
                     setRELoc("Newfoundland and Labrador")
                     break;
                }

            case "6":
                {
                     setRELoc("Northwest Territories")
                     break;
                }
            case "7":
                {
                     setRELoc("Nova Scotia")
                     break;
                }
                
            case "8":
                {
                     setRELoc("Nunavut")
                     break;
                }
            case "9":
                {
                     setRELoc("Ontario")
                     break;
                }
            case "10":
                {
                     setRELoc("Prince Edward Island")
                     break;
                }
            case "11":
                {
                     setRELoc("Quebec")
                     break;
                }
            case "12": 
                {
                     setRELoc("Saskatchewan")
                     break;
                }
            case "13":
                {
                    setRELoc("Yukon")
                    break;
                }
                default:
                    {
                        setRELoc("")
                    }
    }}
    const handleRealEstateCategory=(e)=>
    {
       setCatVal(e.target.value)
       setCategorySelected(true)
       if(e.target.value===1)
       {  
        setXcxc(true)
        setSaleSelected(true)
       }
else
{
    setRentalSelected(true)
}
    }
    const handleJobSalary=(e)=>
    {
        switch(e.target.value)
        {
            case "1":
                {
                    setSalary(45000)
                    break;
                }
                
            case "2":
                {
                   setSalary(55000)
                   break;
                }
                
            case "3":
                {
                   setSalary(65000)
                   break;
                }
                        
            case "4":
                {
                   setSalary(75000)
                   break;
                }
                            
            case "5":
                {
                  setSalary(85000)
                  break;
                }
                                
            case "6":
                {
                  setSalary(95000)
                  break;
                }
            case "7":
                {
                  setSalary(100000)
                  break;
                }
                default:
                    {
                        setSalary(0)
                    }
        }
        setShowurgHirMsg(true)
    }
    const handleSaleType=(e)=>
    {
        setSaleType(e.target.value)
        setShowPetsSection(true)
        setShowPriceForRealEstate(true)
        switch(e.target.value)
        {
            case "1":
                setPropertyType("House for sale")
                break;
            case "2":
                setPropertyType("Condo for sale")
                break;
            case "3":
                setPropertyType("Land for sale")
                break;
            case "4":
                setPropertyType("Office for sale")
                break;
        }
        setShowNextt(true)
    }
    const handleRentalType=(e)=>
    {
        setRentalType(e.target.value)
        setShowPetsSection(true)
        switch(e.target.value)
        {
            case "1":
                setPropertyType("Long term rentals")
                break;
            case "2":
                setPropertyType("Short term rentals")
                break;
            case "3":
                setPropertyType("Room for Rent")
                break;
            case "4":
                setPropertyType("Office for Rent")
                break;
        }
        setShowNextt(true)
    }
    const handleRealEstateDesc=(e)=>
    {
        setRealEstateDesc(e.target.value)
    }
    const handlePetsQuestion=(e)=>
    {
        setPetsAnswer(e.target.value)
        setShowPriceForRealEstate(true)
    }
    const handleRealEstatePrice=(e)=>
    {
        e.target.value=Math.abs(e.target.value)
        setRealEstatePrice(Math.abs(e.target.value))
        setRESet(true)
    }
    const handleNumOfBedrooms=(e)=>
    {
        setBedrooms(e.target.value)
        setShowNexttt(true)
    }
    const handleNumOfBathrooms=(e)=>
    {
        setBathrooms(e.target.value)
        setShowNextttt(true)
    }
    useEffect(()=>
    {
    if(Math.trunc(waitTime/numOfFiles)===100)
    {
        setTimeout(() => {
            setAllUploaded(true)
        }, 400);
    }
    },[waitTime])
    const handleCarPrice=(e)=>
    {
        setPriceChanged(true)
        e.target.value=Math.abs(e.target.value)
        setCarPrice(Math.abs(e.target.value))
    }
    const handleMileage=(e)=>
    {
        e.target.value=Math.abs(e.target.value)
        setCarPrice(Math.abs(e.target.value))
        setMileageChanged(true)
        nnew ? setMileage(0) : setMileage(Math.abs(e.target.value))
    }
    const handleCarFuelType=(e)=>
    {
        setFuelTypeSelected(true)
        setFuelType(e.target.value)
    }
    const handleCarCondition=(e)=>
    {
        setCarConditionSelected(true)
        setCarCondition(e.target.value)
        if(e.target.value==="New")
        {
            setMileage(0)
            setNnew(true)
            setMileageChanged(true)
        }
    }
    const handleCarTransmission=(e)=>
    {
        setTransmissionSelected(true)
        setCatTransmission(e.target.value)
    }
    const handleCarColor=(e)=>{
        setCarColorSelected(true)
        setCarColor(e.target.value)
    }
    const handleCarYear=(e)=>
    {
        setCaryearSelected(true)
        setCarYear(e.target.value)

    }
    const handleCarSelected=(e)=>
    {
        setCarSelected(true)
        setCarModel(e.target.value)
        
    }
    const handlePic=(e)=>
    {
        if(e.target.files.length>6)
        window.alert("Maximum number of images exceeded. Please upload up to 6 images.")
        else 
        {
            if(e.target.files[0] && !e.target.files[1] && !e.target.files[2] && !e.target.files[3] && !e.target.files[4] && !e.target.files[5])
            setNumOfFiles(1)
            if(e.target.files[0] && e.target.files[1] && !e.target.files[2] && !e.target.files[3] && !e.target.files[4] && !e.target.files[5])
            setNumOfFiles(2)
            if(e.target.files[0] && e.target.files[1] && e.target.files[2] && !e.target.files[3] && !e.target.files[4] && !e.target.files[5])
            setNumOfFiles(3)
            if(e.target.files[0] && e.target.files[1] && e.target.files[2] && e.target.files[3] && !e.target.files[4] && !e.target.files[5])
            setNumOfFiles(4)
            if(e.target.files[0] && e.target.files[1] && e.target.files[2] && e.target.files[3] && e.target.files[4] && !e.target.files[5])
            setNumOfFiles(5)
            if(e.target.files[0] && e.target.files[1] && e.target.files[2] && e.target.files[3] && e.target.files[4] && e.target.files[5])
            setNumOfFiles(6)
            setImg1(e.target.files[0])
            setImg2(e.target.files[1])
            setImg3(e.target.files[2])
            setImg4(e.target.files[3])
            setImg5(e.target.files[4])
            setImg6(e.target.files[5])
            setReady(true)
        }

    }
    const handleTitle=(e)=>
    {
        setDigits(prev=>prev+1)
        setTitle(e.target.value)
    }
    const handleRESize=(e)=>
    {
        e.target.value=Math.abs(e.target.value)
        setSF(Math.abs(e.target.value))
        setShowPr1ce(true)
    }
    const handleJobSub=()=>
    {
        const fun=async()=>
        {
            if(title==="" || jobType==="Category" || salary===0 || urgMsg==="" || autoAdLoc==="" || jobDesc==="")
            {
                setJobInfoMissing(true)
            }
            else if(jobDesc.length<100)
            {
                setDescnotLong(true)
            }
            else 
            {
                try 
                {
                    const res= await axiosInstance.post(`/jobs/add_ad`,{userId:currentUser._id,title:title,description:jobDesc,Img:[inputs.imgUrl1,inputs.imgUrl2,inputs.imgUrl3,inputs.imgUrl4,inputs.imgUrl5,inputs.imgUrl6],type:jobType,salary:salary,urgent:urgMsg,location:autoAdLoc})
                    res.status===200 && navigate(`/jobad/${res.data._id}`)
                }
                catch(e)
                {
                    e.response.status===401 && navigate("/session-expired")
                    console.clear()
                }
            }

        }
        fun()
    }
    const handleCarSub=()=>
    {
        const fun=async()=>
        {
            if(carDesc==="" || title==="" || carPrice==="" || carColor=="Color" || carTransmission==="Transmission" || carCondition==="Condition" || carModel==="Car Model" || carYear==="Year" || mileage==="" || fuelType==="Fuel Type" || autoAdLoc==="")
            {
                setInfoMissing(true)
            }
            else 
            {
                if(carDesc.length<100)
                setAutoMsg(true)
                else 
                {
                    try 
                    {
                        const res=await axiosInstance.post(`/autos/add_ad`,{userId:currentUser._id,title:title,description:carDesc,price:carPrice,Img:[inputs.imgUrl1,inputs.imgUrl2,inputs.imgUrl3,inputs.imgUrl4,inputs.imgUrl5,inputs.imgUrl6],color:carColor,transmission:carTransmission,condition:carCondition,make:carModel,year:carYear,kilometers:mileage,fuelType:fuelType,location:autoAdLoc})
                        res.status===200 && navigate(`/ad/${res.data._id}`)
                    }
                    catch(e)
                    {
                        e.response.status===401 && navigate("/session-expired")
                        console.clear()
                    }
                }
            }
        }
        fun()
    }

    useEffect(()=>
    {
        img1 &&  uploadFile(img1,"imgUrl1",1)
        img2 &&  uploadFile(img2,"imgUrl2",2)
        img3 &&  uploadFile(img3,"imgUrl3",3)
        img4 &&  uploadFile(img4,"imgUrl4",4)
        img5 &&  uploadFile(img5,"imgUrl5",5)
        img6 &&  uploadFile(img6,"imgUrl6",6)
        img1===null || img2===null || img3===null || img4===null && setNotEnough(true)
    },[img1,img2,img3,img4,img5,img6])
    useEffect(()=>
    {
setWaitTime(img1Perc+img2Perc+img3Perc+img4Perc+img5Perc+img6Perc)
    
    },[img1Perc,img2Perc,img3Perc,img4Perc,img5Perc,img6Perc])
    const uploadFile=(file,urlType,num)=>
    {
      const storage=getStorage(app)
      const filename=new Date().getTime()+file.name
      const storageRef=ref(storage,filename)
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on('state_changed', 
        (snapshot) => {
          
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          num===1 ? setImg1Perc(Math.round(progress)) : num===2 ? setImg2Perc(Math.round(progress))
          : num===3 ? setImg3Perc(Math.round(progress)) : num===4 ? setImg4Perc(Math.round(progress))
          :num===5 ? setImg5Perc(Math.round(progress)) : setImg6Perc(Math.round(progress))
          switch (snapshot.state) {
            case 'paused':
      
              break;
            case 'running':
      
              break;
              default: break;
          }
        }, 
        (error) => {
      throw error
        }, 
        () => {
      
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setInputs((prev)=>
              {
                return ({...prev,[urlType]:downloadURL})
              })
          });
        }
      );

}

    const inp=useRef()
    useEffect(()=>
    {
        if(inp.current.value.length>20)
        setMsg(true)
        else
        setMsg(false)

    },[digits])
    useEffect(()=>
    {
        saleType==="3" &&
        setShowNextttt(true)
    },[saleType])
    const handleBtn=()=>
    {
        setEmpmsg(false)
        setMsg(false)
        if(inp.current.value.length>30)
        setMsg(true)
        else if(inp.current.value.length===0)
        {
            setEmpmsg(true)
        }
        else
        setBtnActivated(true)
    }
return(<>
<Navbar/>
<div style={{overflow:"hidden"}} className="postdiv">

<div className="container">
                <div className="row">
                <div className="col-lg-12">
                        <div className="PostAdd" style={{padding:20,textAlign:"center"}}>
                        <span style={{fontWeight:"bold",margin:5}}>Ad Title</span>
                        <br/>
                        <textarea className="PostAdd" onChange={(e)=>{handleTitle(e)}} ref={inp} style={{position:"relative",width:500,padding:5}}/>
                        </div>
                        {msg && <p className="PostAdd" style={{textAlign:"center",color:"crimson"}}>Title can't contain more than 20 characters</p>}
                        {empmsg && !msg && <p style={{textAlign:"center",color:"crimson",fontWeight:"bold"}}>Title can't be empty</p>}
                        <button className="PostAdd" onClick={handleBtn} style={{margin:"10px auto",display:"block",border:"none",padding:5,width:500,backgroundColor:"#373373",color:"#fff",cursor:"pointer"}}>Next</button>

{btnActivated &&  !msg &&                       <p style={{fontWeight:"bold",fontSize:20,textAlign:"center"}}>Select a Category</p>}
{btnActivated &&  !msg &&                       <div style={{textAlign:"center",padding:"10px 10px"}}> 
<div onClick={()=>{setSelection(1)}} className="gfdsd PostAdd postElements" style={{textAlign:"center",margin:"0px auto",height:40,display:"block",padding:10,width:500,cursor:"pointer",fontWeight:"bold",border:"1px solid lightgrey",backgroundColor:`${selection===1 ? "#2681db" : "inherit"}`}}>Cars</div>
                            <div onClick={()=>{setSelection(2)}} className="gfdsd PostAdd postElements" style={{textAlign:"center",margin:"0px auto",height:40,display:"block",padding:10,width:500,cursor:"pointer",fontWeight:"bold",border:"1px solid lightgrey",backgroundColor:`${selection===2 ? "#2681db" : "inherit"}`}}>Real Estate</div>
                            <div onClick={()=>{setSelection(3)}} className="gfdsd PostAdd postElements" style={{textAlign:"center",margin:"0px auto",height:40,display:"block",padding:10,width:500,cursor:"pointer",fontWeight:"bold",border:"1px solid lightgrey",backgroundColor:`${selection===3 ? "#2681db" : "inherit"}`}}>Jobs</div>
                            <div onClick={()=>{setSelection(4)}} className="gfdsd PostAdd postElements" style={{textAlign:"center",margin:"0px auto",height:40,display:"block",padding:10,width:500,cursor:"pointer",fontWeight:"bold",border:"1px solid lightgrey",backgroundColor:`${selection===4 ? "#2681db" : "inherit"}`}}>Services</div>
                            <div onClick={()=>{setSelection(5)}} className="gfdsd PostAdd postElements" style={{textAlign:"center",margin:"0px auto",height:40,display:"block",padding:10,width:500,cursor:"pointer",fontWeight:"bold",border:"1px solid lightgrey",backgroundColor:`${selection===5 ? "#2681db" : "inherit"}`}}>Pets</div>
                        </div>}
                        {
                            selection===1 ? <ghfdd>
                            <p style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Select Car Make:</p>
                            <div className="PostAdd" style={{textAlign:"center"}}>
                            <select className="PostAdd" onChange={(e)=>{handleCarSelected(e)}} style={{width:500,height:50,cursor:"pointer",padding:10,margin:"0px 0px 10px 0px"}}>
<option defaultChecked>Car Model</option>
<option value="Acura">Acura</option>
<option value="ALM">ALM</option>
<option value="AMC">AMC</option>
<option value="Aston">Aston</option>
<option value="Audi">Audi</option>
<option value="Austin">Austin</option>
<option value="Bentley">Bentley</option>
<option value="BMW">Bmw</option>
<option value="Bricklin">Bricklin</option>
<option value="Bugatti">Bugatti</option>
<option value="Buick">Buick</option>
<option value="Cadilac">Cadillac</option>
<option value="Chevrolet">Chevrolet</option>
<option value="Chrysler">Chrysler</option>
<option value="Daewoo">Daewoo</option>
<option value="Daihatsu">Daihatsu</option>
<option value="Datsun">Datsun</option>
<option value="Dodge">Dodge</option>
<option value="Eagle">Eagle</option>
<option value="Ferrari">Ferrari</option>
<option value="Fiat">Fiat</option>
<option value="Ford">Ford</option>
<option value="Genesis">Genesis</option>
<option value="Geo">Geo</option>
<option value="GMC">Gmc</option>
<option value="Honda">Honda</option>
<option value="Hummer">Hummer</option>
<option value="Hyundai">Hyundai</option>
<option value="Infiniti">Infiniti</option>
<option value="Isuzu">Isuzu</option>
<option value="Jaguar">Jaguar</option>
<option value="Jeep">Jeep</option>
<option value="Kia">Kia</option>
<option value="Lamborghini">Lamborghini</option>
<option value="Land">Land</option>
<option value="Lexus">Lexus</option>
<option value="Lincoln">Lincoln</option>
<option value="Lotus">Lotus</option>
<option value="Maserati">Maserati</option>
<option value="Maybach">Maybach</option>
<option value="Mazda">Mazda</option>
<option value="McLaren">McLaren</option>
<option value="Mercedes">Mercedes</option>
<option value="Mercury">Mercury</option>
<option value="MG">Mg</option>
<option value="Mini">Mini</option>
<option value="Mitsubishi">Mitsubishi</option>
<option value="Nissan">Nissan</option>
<option value="Oldsmobile">Oldsmobile</option>
<option value="Opel">Opel</option>
<option value="Peugeot">Peugeot</option>
<option value="Plymouth">Plymouth</option>
<option value="Polestar">Polestar</option>
<option value="Pontiac">Pontiac</option>
<option value="Porsche">Porsche</option>
<option value="Ram">Ram</option>
<option value="Renault">Renault</option>
<option value="Saab">Saab</option>
<option value="Saturn">Saturn</option>
<option value="Scion">Scion</option>
<option value="Shelby">Shelby</option>
<option value="Smart">Smart</option>
<option value="Subaru">Subaru</option>
<option value="Suzuki">Suzuki</option>
<option value="Tesla">Tesla</option>
<option value="Toyota">Toyota</option>
<option value="Triumph">Triumph</option>
<option value="Volkswagen">Volkswagen</option>
<option value="Volvo">Volvo</option>
                            </select>
                            {
                                carSelected && selection && <>
                                <br/>
                                <p className="PostAdd" style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Select Year:</p>
                                <select className="PostAdd" onChange={(e)=>{handleCarYear(e)}} style={{width:500,height:50,cursor:"pointer",padding:10,margin:"0px 0px 10px 0px"}}>
                                <option defaultChecked>Year</option>
                                <option value={2023}>2023</option>
                                <option value={2022}>2022</option>
                                <option value={2021}>2021</option>
                                <option value={2020}>2020</option>
                                <option value={2019}>2019</option>
                                <option value={2018}>2018</option>
                                <option value={2017}>2017</option>
                                <option value={2016}>2016</option>
                                <option value={2015}>2015</option>
                                <option value={2014}>2014</option>
                                <option value={2013}>2013</option>
                                <option value={2012}>2012</option>
                                <option value={2011}>2011</option>
                                <option value={2010}>2010</option>
                                <option value={2009}>2009</option>
                                <option value={2008}>2008</option>
                                <option value={2007}>2007</option>
                                <option value={2006}>2006</option>
                                <option value={2005}>2005</option>
                                <option value={2004}>2004</option>
                                <option value={2003}>2003</option>
                                <option value={2002}>2002</option>
                                <option value={2001}>2001</option>
                                <option value={2000}>2000</option>
                                <option value={1999}>1999</option>
                                <option value={1998}>1998</option>
                                <option value={1997}>1997</option>
                                <option value={1996}>1996</option>
                                <option value={1995}>1995</option>
                                <option value={1994}>1994</option>
                                <option value={1993}>1993</option>
                                <option value={1992}>1992</option>
                                <option value={1991}>1991</option>
                                <option value={1990}>1990</option>
                                <option value={1989}>1989</option>
                                <option value={1988}>1988</option>
                                <option value={1987}>1987</option>
                                <option value={1986}>1986</option>
                                <option value={1985}>1985</option>
                                <option value={1984}>1984</option>
                                <option value={1983}>1983</option>
                                <option value={1982}>1982</option>
                                <option value={1981}>1981</option>
                                <option value={1980}>1980</option>
                                <option value={1979}>1979</option>
                                <option value={1978}>1978</option>
                                <option value={1977}>1977</option>
                                <option value={1976}>1976</option>
                                <option value={1975}>1975</option>
                                <option value={1974}>1974</option>
                                <option value={1973}>1973</option>
                                <option value={1972}>1972</option>
                                <option value={1971}>1971</option>
                                <option value={1970}>1970</option>
                                <option value={1969}>1969</option>
                                <option value={1968}>1968</option>
                                <option value={1967}>1967</option>
                                <option value={1966}>1966</option>
                                <option value={1965}>1965</option>
                                <option value={1964}>1964</option>
                                <option value={1963}>1963</option>
                                <option value={1962}>1962</option>
                                <option value={1961}>1961</option>
                                <option value={1960}>1960</option>
                                </select>
                                </>
                                                            }

                                {
                                    carSelected && caryearSelected &&
                                    <>
                                                                        <br/>
                                    <p  className="PostAdd"style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Color:</p>
                                    <select className="PostAdd" onChange={(e)=>{handleCarColor(e)}} style={{width:500,height:50,cursor:"pointer",padding:10,margin:"0px 0px 10px 0px"}}>
                                        <option defaultChecked>Color</option>
                                        <option value={"Black"}>Black</option>
                                        <option value={"Blue"}>Blue</option>
                                        <option value={"Brown"}>Brown</option>
                                        <option value={"Gold"}>Gold</option>
                                        <option value={"Green"}>Green</option>
                                        <option value={"Grey"}>Grey</option>
                                        <option value={"Orange"}>Orange</option>
                                        <option value={"Pink"}>Pink</option>
                                        <option value={"Purple"}>Purple</option>
                                        <option value={"Red"}>Red</option>
                                        <option value={"Silver"}>Silver</option>
                                        <option value={"Tan"}>Tan</option>
                                        <option value={"White"}>White</option>
                                        <option value={"Yellow"}>Yellow</option>
                                    </select>
                                    </>
                                }

                                                            {
                                    carSelected && caryearSelected && carColorSelected &&
                                    <>
                                    <br/>
                                    <p className="PostAdd" style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Transmission:</p>
                                    <select className="PostAdd" onChange={(e)=>{handleCarTransmission(e)}} style={{width:500,height:50,cursor:"pointer",padding:10,margin:"0px 0px 10px 0px"}}>
                                        <option defaultChecked>Transmission</option>
                                        <option value={"Automatic"}>Automatic</option>
                                        <option value={"Manual"}>Manual</option>
                                    </select>
                                    </>
                                }
                                {
                                    carSelected && caryearSelected && selection && transmissionSelected && 
                                    <>
                                    <p className="PostAdd" style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Condition:</p>
                                        <select className="PostAdd" onChange={(e)=>{handleCarCondition(e)}} style={{width:500,height:50,cursor:"pointer",padding:10,margin:"0px 0px 10px 0px"}}>
                                        <option defaultChecked>Condition</option>
                                        <option value={"New"}>New</option>
                                        <option value={"Used"}>Used</option>
                                    </select>
                                    </>
                                }
                                                                {
                                    carSelected && caryearSelected && selection && transmissionSelected && carConditionSelected &&
                                    <>
                                    <p className="PostAdd" style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Fuel Type:</p>
                                        <select className="PostAdd" onChange={(e)=>{handleCarFuelType(e)}} style={{width:500,height:50,cursor:"pointer",padding:10,margin:"0px 0px 10px 0px"}}>
                                        <option defaultChecked>Fuel Type</option>
                                        <option value={"Gas"}>Gas</option>
                                        <option value={"Diesel"}>Diesel</option>
                                        <option value={"Hybrid"}>Hybrid</option>
                                        <option value={"Electric"}>Electric (EV)</option>
                                    </select>
                                    </>
                                }
                                   {
                                    carSelected && caryearSelected && selection && transmissionSelected && carConditionSelected && fuelTypeSelected && !nnew &&
                                    <>
                                    <p className="PostAdd" style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Mileage:</p>
                                        <input onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
 className="PostAdd" onChange={(e)=>{handleMileage(e)}} style={{width:500,padding:10,margin:10}} type="number"/>
                                    </>
                                }
                                                                   {
                                    carSelected && caryearSelected && selection && transmissionSelected && carConditionSelected && fuelTypeSelected && mileageChanged &&
                                    <>
                                    <p className="PostAdd" style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Price:</p>
                                        <input onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
 className="PostAdd" onChange={(e)=>{handleCarPrice(e)}} style={{width:500,padding:10,margin:10}} type="number"/>
                                    </>
                                }
                                    {
                                        carSelected && caryearSelected && selection && transmissionSelected && carConditionSelected && fuelTypeSelected && mileageChanged && priceChanged &&
                                       <>
                                       <br/>
                                       <p className="PostAdd" style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Description:</p>
                                    <textarea className="PostAdd" onChange={(e)=>{handleCarDesc(e)}} style={{width:"500px",margin:"5px auto",display:"block",padding:10,minHeight:100}}/>
                                       </>
                                    }                            
                                                                        {
                                        carSelected && caryearSelected && selection && transmissionSelected && carConditionSelected && fuelTypeSelected && mileageChanged && carDescEntered &&
                                       <>
                                       <br/>
                                       <p className="PostAdd" style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Ad Location:</p>
                                       <select className="PostAdd" onChange={(e)=>{handleAutoAdLocation(e)}} style={{width:500,height:50,cursor:"pointer",padding:10,margin:"0px 0px 10px 0px"}}>
                        <option defaultChecked>Category</option>
                        <option value={1}>Alberta</option>
                        <option value={2}>British Colombia</option>
                        <option value={3}>Manitoba</option>
                        <option value={4}>New Brunswick</option>
                        <option value={5}>Newfoundland and Labrador</option>
                        <option value={6}>Northwest Territories</option>
                        <option value={7}>Nova Scotia</option>
                        <option value={8}>Nunavut</option>
                        <option value={9}>Ontario</option>
                        <option value={10}>Prince Edward Island</option>
                        <option value={11}>Quebec</option>
                        <option value={12}>Saskatchewan</option>
                        <option value={13}>Yukon</option>
                        </select>
                                       </>
                                    }   
                               {
                                    carSelected && caryearSelected && selection && transmissionSelected && carConditionSelected && fuelTypeSelected && mileageChanged && priceChanged && locSelected &&
                                    <>
                                    <br/>
                                       <label className="PostAdd" htmlFor="file">
                                        <br/>
                                        <img className="PostAdd" style={{padding:10,cursor:"pointer"}} width={100} src="https://static.vecteezy.com/system/resources/previews/010/797/086/original/add-files-icon-with-outline-style-vector.jpg"/>
                                       <input onChange={(e)=>{handlePic(e)}} id="file" style={{width:500,padding:10,margin:10,display:"none"}} type="file" multiple accept="image/*" required />
                                       </label>
                                        <br/>
                                        <span className="PostAdd" style={{fontSize:20}}>Upload Up to 4 Pictures</span>
                                       {
                                        !isNaN(Math.trunc(waitTime/numOfFiles)) && <div>{Math.trunc(waitTime/numOfFiles)}%</div>
                                       } 
                                    </>
                                }
                                {infoMissing && <div style={{color:"crimson",fontWeight:"800",fontSize:15,margin:10}}>Please check missing fields</div>}
                                {autoMsg && <div style={{color:"crimson",fontWeight:"800",fontSize:15,margin:10}}>Description needs to contain at least 100 Characters</div>}
                                {
                                    carSelected && caryearSelected && selection && transmissionSelected && carConditionSelected && fuelTypeSelected && mileageChanged && priceChanged && ready && allUploaded && <><br/> <button className="PostAdd" style={{width:500,backgroundColor:"#3e4153",color:"#fff",borderRadius:10,margin:10,padding:10,cursor:"pointer"}} onClick={handleCarSub}>Post Ad</button></>
                                }
                            </div>
                            </ghfdd>
                            : selection===2?
                            <>
                            <p className="PostAdd" style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Select Category:</p>
                            <div className="PostAdd" style={{textAlign:"center"}}>
                            <select className="PostAdd" onChange={(e)=>{handleRealEstateCategory(e)}} style={{width:500,height:50,cursor:"pointer",padding:10,margin:"0px 0px 10px 0px"}}>
                            <option defaultChecked>Category</option>
                            <option value={1}>For Sale</option>
                            <option value={2}>For Rent</option>
                            </select>
                            </div>
                            {
                                catVal==="1" && <>
                                                            <p style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Select Property Type:</p>
                            <div className="PostAdd" style={{textAlign:"center"}}>
                            <select className="PostAdd" onChange={(e)=>{handleSaleType(e)}} style={{width:500,height:50,cursor:"pointer",padding:10,margin:"0px 0px 10px 0px"}}>
                            <option defaultChecked>Category</option>
                            <option value={1}>Houses for Sale</option>
                            <option value={2}>Condos for Sale</option>
                            <option value={3}>Land for Sale</option>
                            <option value={4}>Office Space for Sale</option>
                            </select>
                            </div>
                                </>
                            }
                                                        {
                                catVal==="2" && <div>
                                    <p style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Select Property Type:</p>
                            <div className="PostAdd" style={{textAlign:"center"}}>
                            <select className="PostAdd" onChange={(e)=>{handleRentalType(e)}} style={{width:500,height:50,cursor:"pointer",padding:10,margin:"0px 0px 10px 0px"}}>
                            <option defaultChecked>Category</option>
                            <option value={1}>Long Term Rentals</option>
                            <option value={2}>Short Term Rentals</option>
                            <option value={3}>Room Rentals</option>
                            <option value={4}>Office Rentals</option>
                            </select>
                            </div>
                                </div>
                            }
                            {
                                showNextt && saleType!=="3" &&
                                <div className="PostAdd" style={{textAlign:"center",margin:"0px auto",display:"block"}}>
                                                                        <p className="PostAdd" style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Bedrooms:</p>
                                                                        <select  className="PostAdd" onChange={(e)=>{handleNumOfBedrooms(e)}} style={{width:500,height:50,cursor:"pointer",padding:10,margin:"0px 0px 10px 0px"}}>
                            <option defaultChecked>Bedrooms</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            </select>
                                </div>
                            }
                                                        {
                                showNexttt && saleType!=="3" &&
                                <div style={{textAlign:"center",margin:"0px auto",display:"block"}}>
                                                                        <p className="PostAdd" style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Bathrooms:</p>
                                                                        <select className="PostAdd" onChange={(e)=>{handleNumOfBathrooms(e)}} style={{width:500,height:50,cursor:"pointer",padding:10,margin:"0px 0px 10px 0px"}}>
                            <option defaultChecked>Bathrooms</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            </select>
                                </div>
                            }
                            {
                                showPetsSection && catVal!=="1" && showNextt && showNextttt && <div>
                                <p className="PostAdd" style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Are pets allowed?</p>
                        <div style={{textAlign:"center"}}>
                        <select className="PostAdd" onChange={(e)=>{handlePetsQuestion(e)}} style={{width:500,height:50,cursor:"pointer",padding:10,margin:"0px 0px 10px 0px"}}>
                        <option defaultChecked>Category</option>
                        <option value={1}>Yes</option>
                        <option value={2}>No</option>
                        </select>
                        </div>
                            </div>
                            }
                            {
                                catVal==="1" && xcxc || showPriceForRealEstate && showNextttt &&  <div>
                                <p className="PostAdd" style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Location:</p>
                        <div style={{textAlign:"center"}}>
                        <select className="PostAdd" onChange={(e)=>{handleRELoc(e)}} style={{width:500,height:50,cursor:"pointer",padding:10,margin:"0px 0px 10px 0px"}}>
                        <option defaultChecked>Category</option>
                        <option value={1}>Alberta</option>
                        <option value={2}>British Colombia</option>
                        <option value={3}>Manitoba</option>
                        <option value={4}>New Brunswick</option>
                        <option value={5}>Newfoundland and Labrador</option>
                        <option value={6}>Northwest Territories</option>
                        <option value={7}>Nova Scotia</option>
                        <option value={8}>Nunavut</option>
                        <option value={9}>Ontario</option>
                        <option value={10}>Prince Edward Island</option>
                        <option value={11}>Quebec</option>
                        <option value={12}>Saskatchewan</option>
                        <option value={13}>Yukon</option>
                        </select>
                        </div>
                            </div>
                            }
                            {
                                catVal==="1" && xcxc || showPriceForRealEstate && showNextttt && RELoc!=="" &&
                                <div className="PostAdd">
                                                                     <p style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Size in Square Feet:</p>
                                            <input onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
 className="PostAdd" onChange={(e)=>{handleRESize(e)}} style={{width:500,padding:10,margin:"10px auto",display:"block"}} type="number"/>   
                                </div>
                            }
                            { catVal==="1" && xcxc || showPriceForRealEstate && showNextttt && RELoc!=="" && showPr1ce &&
                            <div className="PostAdd">
                                                                 <p style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Price:</p>
                                        <input onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
 className="PostAdd" onChange={(e)=>{handleRealEstatePrice(e)}} style={{width:500,padding:10,margin:"10px auto",display:"block"}} type="number"/>   
                            </div>
                            }
                            {
                                catVal==="1" && xcxc || showPriceForRealEstate && reSet &&
                                <div className="PostAdd">
                                       <p style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Description:</p>
                                    <textarea className="PostAdd" onChange={(e)=>{handleRealEstateDesc(e)}} style={{width:"500px",margin:"5px auto",display:"block",padding:10,minHeight:100}}/>
                                </div>
                            }
                                                                                               {
                                    catVal==="1" && xcxc || showPriceForRealEstate && reSet && realEstateDesc!=="" &&
                                    <>
                                    <br/>
                                       <label className="PostAdd" style={{margin:"0px auto",display:"block"}} htmlFor="file">
                                        <br/>
                                        <img className="PostAdd" style={{padding:10,cursor:"pointer",display:"block",margin:"10px auto",textAlign:"center"}} width={100} src="https://static.vecteezy.com/system/resources/previews/010/797/086/original/add-files-icon-with-outline-style-vector.jpg"/>
                                       <input onChange={(e)=>{handlePic(e)}} id="file" style={{width:500,padding:10,margin:10,display:"none"}} type="file" multiple accept="image/*" required />
                                       </label>
                                        <br/>
                                        <span style={{fontSize:20,textAlign:"center",display:"block",margin:"0px auto"}}>Upload Up to 4 Pictures</span>
                                       {
                                        !isNaN(Math.trunc(waitTime/numOfFiles)) && <div style={{fontSize:20,textAlign:"center",display:"block",margin:"0px auto"}}>{Math.trunc(waitTime/numOfFiles)}%</div>
                                       } 
                                                              {realestateinfomissing && <div style={{color:"crimson",fontWeight:"800",fontSize:15,margin:10,textAlign:"center"}}>Please check missing fields</div>}  
                                                              {addMore && <div style={{color:"crimson",fontWeight:"800",fontSize:15,margin:10,textAlign:"center"}}>Description needs to contain at least 100 Characters</div>}
                                                                                      {
                                     catVal==="1" && xcxc || showPriceForRealEstate && reSet && realEstateDesc!=="" && !isNaN(Math.trunc(waitTime/numOfFiles)) && allUploaded && <><br/> <button className="PostAdd" style={{width:500,backgroundColor:"#3e4153",color:"#fff",borderRadius:10,margin:10,padding:10,cursor:"pointer",display:"block",margin:"10px auto"}} onClick={handleRESub}>Post Ad</button></>
                                }
                                    </>
                                }
                           </>   
                            : selection===3?  <>
                            <p className="PostAdd" style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Select Job Type:</p>
                            <div className="PostAdd" style={{textAlign:"center"}}>
                            <select className="PostAdd" onChange={(e)=>{handleJobType(e)}} style={{width:500,height:50,cursor:"pointer",padding:10,margin:"0px 0px 10px 0px"}}>
                            <option defaultChecked>Category</option>
                            <option value={1}>Full Time</option>
                            <option value={2}>Part Time</option>
                            <option value={3}>Remote</option>
                            <option value={4}>Hybrid</option>
                            <option value={5}>Temporary</option>
                            <option value={6}>Contract</option>
                            </select>
                            </div>
                            {
                                jobTypeSelected && <>
                            <p className="PostAdd" style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Select Salary Range:</p>
                            <div className="PostAdd" style={{textAlign:"center"}}>
                            <select className="PostAdd" onChange={(e)=>{handleJobSalary(e)}} style={{width:500,height:50,cursor:"pointer",padding:10,margin:"0px 0px 10px 0px"}}>
                            <option defaultChecked>Category</option>
                            <option value={1}>40,000 - 50,000 / Year</option>
                            <option value={2}>50,000 - 60,000 / Year</option>
                            <option value={3}>60,000 - 70,000 / Year</option>
                            <option value={4}>70,000 - 80,000 / Year</option>
                            <option value={5}>80,000 - 90,000 / Year</option>
                            <option value={6}>90,000 - 100,000 / Year</option>
                            <option value={7}>{">"} 100,000 / Year</option>
                            </select>
                            </div>
                                </>
                            }
                            {
                                jobTypeSelected && showUrgHirMsg &&
                            <div>
                            <p className="PostAdd" style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Are you urgently hiring for this role?</p>
                            <select className="PostAdd" onChange={(e)=>{handleUrgHirMsg(e)}} style={{width:500,height:50,cursor:"pointer",padding:10,margin:"0px auto",display:"block"}}>
                            <option value={0} defaultChecked>Category</option>
                            <option value={1}>Yes</option>
                            <option value={2}>No</option>
                            </select>
                            </div>
                            }
                            {
                              jobTypeSelected && showUrgHirMsg && urgHirining &&  <div style={{textAlign:"center",margin:"0px auto",display:"block"}}>
                                                                           <br/>
                                       <p className="PostAdd" style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Ad Location:</p>
                                       <select className="PostAdd" onChange={(e)=>{handleAutoAdLocation(e)}} style={{width:500,height:50,cursor:"pointer",padding:10,margin:"0px 0px 10px 0px"}}>
                        <option defaultChecked>Category</option>
                        <option value={1}>Alberta</option>
                        <option value={2}>British Colombia</option>
                        <option value={3}>Manitoba</option>
                        <option value={4}>New Brunswick</option>
                        <option value={5}>Newfoundland and Labrador</option>
                        <option value={6}>Northwest Territories</option>
                        <option value={7}>Nova Scotia</option>
                        <option value={8}>Nunavut</option>
                        <option value={9}>Ontario</option>
                        <option value={10}>Prince Edward Island</option>
                        <option value={11}>Quebec</option>
                        <option value={12}>Saskatchewan</option>
                        <option value={13}>Yukon</option>
                        </select>
                                </div>
                            }
                            {
                                jobTypeSelected && showJobD3sc && urgHirining && locSelectedForJobs &&
                                <div className="PostAdd">
                                       <p className="PostAdd" style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Description:</p>
                                       <textarea className="PostAdd" onChange={(e)=>{handleJobDesc(e)}} style={{width:"500px",margin:"5px auto",display:"block",padding:10,minHeight:100}}/>
                                </div>
                            }
                            {
                                showPicsSection && 
                                <> <label className="PostAdd" style={{margin:"0px auto",display:"block"}} htmlFor="file">
                                        <br/>
                                        <img className="PostAdd" style={{padding:10,cursor:"pointer",display:"block",margin:"10px auto",textAlign:"center"}} width={100} src="https://static.vecteezy.com/system/resources/previews/010/797/086/original/add-files-icon-with-outline-style-vector.jpg"/>
                                       <input onChange={(e)=>{handlePic(e)}} id="file" style={{width:500,padding:10,margin:10,display:"none"}} type="file" multiple accept="image/*" required />
                                       </label>
                                        <br/>
                                        <span style={{fontSize:20,textAlign:"center",display:"block",margin:"0px auto"}}>Upload Up to 4 Pictures</span></>
                            }
                                                
                            {
                                     !isNaN(Math.trunc(waitTime/numOfFiles)) && <div style={{fontSize:20,textAlign:"center",display:"block",margin:"0px auto"}}>{Math.trunc(waitTime/numOfFiles)}%</div>
                            }
                                                            {jobInfoMissing && <div style={{color:"crimson",fontWeight:"800",fontSize:15,margin:10,textAlign:"center"}}>Please check missing fields</div>}
                                                            {descNotLong && <div style={{color:"crimson",fontWeight:"800",fontSize:15,margin:10,textAlign:'center'}}>Description needs to contain at least 100 Characters</div>}
                            {
                                !isNaN(Math.trunc(waitTime/numOfFiles)) && allUploaded && <><br/> <button className="PostAdd" style={{width:500,backgroundColor:"#3e4153",color:"#fff",borderRadius:10,margin:10,padding:10,cursor:"pointer",display:"block",margin:"10px auto"}} onClick={handleJobSub}>Post Ad</button></>
                            }
                            </>
                            : selection===4 ? <><>
                            <p style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Enter the Fee for your service:</p>
                                <input onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
 className="PostAdd" onChange={(e)=>{handleServicePrice(e)}} style={{width:500,padding:10,margin:"10px auto",display:"block"}} type="number"/>
                            </>
                            {
                                priceEntered &&
                         <div className="PostAdd" style={{textAlign:"center",margin:"0px auto",display:"block"}}>
                         <br/>
<p className="PostAdd" style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Ad Location:</p>
<select className="PostAdd" onChange={(e)=>{handleAutoAdLocation(e)}} style={{width:500,height:50,cursor:"pointer",padding:10,margin:"0px 0px 10px 0px"}}>
<option defaultChecked>Category</option>
<option value={1}>Alberta</option>
<option value={2}>British Colombia</option>
<option value={3}>Manitoba</option>
<option value={4}>New Brunswick</option>
<option value={5}>Newfoundland and Labrador</option>
<option value={6}>Northwest Territories</option>
<option value={7}>Nova Scotia</option>
<option value={8}>Nunavut</option>
<option value={9}>Ontario</option>
<option value={10}>Prince Edward Island</option>
<option value={11}>Quebec</option>
<option value={12}>Saskatchewan</option>
<option value={13}>Yukon</option>
</select>
</div>
                            }
                            {
                                showDescSect && priceEntered &&
                                <div className="PostAdd">
                                <p className="PostAdd" style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Description:</p>
                                <textarea className="PostAdd" onChange={(e)=>{handleServiceDesc(e)}} style={{width:"500px",margin:"5px auto",display:"block",padding:10,minHeight:100}}/>
                         </div>
                            }
                            {
                                showPicsforServ && 
                                    <> <label className="PostAdd" style={{margin:"0px auto",display:"block"}} htmlFor="file">
                                            <br/>
                                            <img className="PostAdd" style={{padding:10,cursor:"pointer",display:"block",margin:"10px auto",textAlign:"center"}} width={100} src="https://static.vecteezy.com/system/resources/previews/010/797/086/original/add-files-icon-with-outline-style-vector.jpg"/>
                                           <input onChange={(e)=>{handlePic(e)}} id="file" style={{width:500,padding:10,margin:10,display:"none"}} type="file" multiple accept="image/*" required />
                                           </label>
                                            <br/>
                                            <span style={{fontSize:20,textAlign:"center",display:"block",margin:"0px auto"}}>Upload Up to 4 Pictures</span></>
                                }
                                                    
                                {
                                         !isNaN(Math.trunc(waitTime/numOfFiles)) && <div style={{fontSize:20,textAlign:"center",display:"block",margin:"0px auto"}}>{Math.trunc(waitTime/numOfFiles)}%</div>
                                }                                {shortServiceDesc && <div style={{color:"crimson",fontWeight:"800",fontSize:15,margin:10,textAlign:"center"}}>Description needs to contain at least 100 Characters</div>}
                                                                {serviceInfoMissing && <div style={{color:"crimson",fontWeight:"800",fontSize:15,margin:10,textAlign:"center"}}>Please check missing fields</div>}
                                {
                                    !isNaN(Math.trunc(waitTime/numOfFiles)) && allUploaded && <><br/> <button className="PostAdd" style={{width:500,backgroundColor:"#3e4153",color:"#fff",borderRadius:10,margin:10,padding:10,cursor:"pointer",display:"block",margin:"10px auto"}} onClick={handleServSub}>Post Ad</button></>
                                }
                            
                            </>
                            : selection===5 ? 
                            <div className="PostAdd">
<p style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Enter the adoption fee:</p>
                                <input onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
 className="PostAdd" onChange={(e)=>{handlePetAdopFee(e)}} style={{width:500,padding:10,margin:"10px auto",display:"block"}} type="number"/>
                                {
                                                      showPetDesc && <div style={{textAlign:"center",margin:"0px auto",display:"block"}}>
                                                             <br/>
                                    <p className="PostAdd" style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Ad Location:</p>
                                    <select className="PostAdd" onChange={(e)=>{handleAutoAdLocation(e)}} style={{width:500,height:50,cursor:"pointer",padding:10,margin:"0px 0px 10px 0px"}}>
                                    <option defaultChecked>Category</option>
                                    <option value={1}>Alberta</option>
                                    <option value={2}>British Colombia</option>
                                    <option value={3}>Manitoba</option>
                                    <option value={4}>New Brunswick</option>
                                    <option value={5}>Newfoundland and Labrador</option>
                                    <option value={6}>Northwest Territories</option>
                                    <option value={7}>Nova Scotia</option>
                                    <option value={8}>Nunavut</option>
                                    <option value={9}>Ontario</option>
                                    <option value={10}>Prince Edward Island</option>
                                    <option value={11}>Quebec</option>
                                    <option value={12}>Saskatchewan</option>
                                    <option value={13}>Yukon</option>
                                    </select>
                                    </div>
                                }
                                {
                                    showPetDesc && showDescSect && <div>
                                     <p className="PostAdd" style={{fontWeight:"bold",fontSize:15,textAlign:"center",margin:10}}>Description:</p>
                                     <textarea className="PostAdd" onChange={(e)=>{handlePetDesc(e)}} style={{width:"500px",margin:"5px auto",display:"block",padding:10,minHeight:100}}/>
                              </div>
                                }

                                                            {
                                showPetImgSec && 
                                    <> <label className="PostAdd" style={{margin:"0px auto",display:"block"}} htmlFor="file">
                                            <br/>
                                            <img className="PostAdd" style={{padding:10,cursor:"pointer",display:"block",margin:"10px auto",textAlign:"center"}} width={100} src="https://static.vecteezy.com/system/resources/previews/010/797/086/original/add-files-icon-with-outline-style-vector.jpg"/>
                                           <input onChange={(e)=>{handlePic(e)}} id="file" style={{width:500,padding:10,margin:10,display:"none"}} type="file" multiple accept="image/*" required />
                                           </label>
                                            <br/>
                                            <span className="PostAdd" style={{fontSize:20,textAlign:"center",display:"block",margin:"0px auto"}}>Upload Up to 4 Pictures</span></>
                                }
                                                                              {
                                         !isNaN(Math.trunc(waitTime/numOfFiles)) && <div style={{fontSize:20,textAlign:"center",display:"block",margin:"0px auto"}}>{Math.trunc(waitTime/numOfFiles)}%</div>
                                }{shortPetDesc && <div style={{color:"crimson",fontWeight:"800",fontSize:15,margin:10,textAlign:"center",textAlign:"center"}}>Description needs to contain at least 100 Characters</div>}
                                                                                                {petsInfoMissing && <div style={{color:"crimson",fontWeight:"800",fontSize:15,margin:10,textAlign:"center"}}>Please check missing fields</div>}
                                {
                                    !isNaN(Math.trunc(waitTime/numOfFiles)) && allUploaded && <><br/> <button className="PostAdd" style={{width:500,backgroundColor:"#3e4153",color:"#fff",borderRadius:10,margin:10,padding:10,cursor:"pointer",display:"block",margin:"10px auto"}} onClick={handlePetSub}>Post Ad</button></>
                                } 
                            </div>
                            
                            : <div style={{display:"none",height:0}}>

                            </div>
                        }
                       
                        </div>
                        <div className="col-2"></div>
                        </div>
                        </div>
                        
</div>
<Footer/>
</>)
}
export default Post
