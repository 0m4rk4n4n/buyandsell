const {createError}=require("../error.js")
const User=require("../models/user.js")
const PetAd=require("../models/petsAds.js")
const RealEstateAd=require("../models/RealEstateAd.js")
const ServiceAd=require("../models/servicesAds.js")
const jobAd=require("../models/JobsAds.js")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const carAd=require("../models/carAd.js")
const fs=require("fs")
const {v4:uuid}=require("uuid")
const today = new Date();
 const RegisterUser = async (req, res, next) => {
  try {
    const email=await User.findOne({email:req.body.email})
    if (email)
    res.status(409).json("Email is already registered")
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    next(err);
  }
};
 const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User not found!"));
    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) return next(createError(401, "Wrong Credentials!"));
    const token = jwt.sign({ id: user._id }, process.env.JWT);
    const { password, ...others } = user._doc;
    res
      .cookie("access_token", token, { httpOnly: true, expiresIn: "1h" })
      .status(200)
      .json(others);
  } catch (err) {
    next(err);
  }
};
 const getUser=async(req,res)=>
{
  try 
  {
const user=await User.findById(req.params.id)
res.status(200).json(user)
  }
  catch(e)
  {
    res.json({"Error Message":e})
  }
}
 const getAllAdsForAUser=async(req,res)=>
{
try 
{
  let allAds=[]
  let tempArr=[]
  let thirdArr=[]
  let carads=await carAd.find({userId:req.params.id})
  let petads=await PetAd.find({userId:req.params.id})
  let realestateads=await RealEstateAd.find({userId:req.params.id})
  let serviceads=await ServiceAd.find({userId:req.params.id})
  let jobads=await jobAd.find({userId:req.params.id})
  tempArr.push(carads!==null && carads.length>0 && carads,petads!==null && petads.length>0 && petads,realestateads!==null && realestateads.length>0 && realestateads,serviceads!==null && serviceads.length>0 && serviceads,jobads!==null && jobads.length>0 && jobads)
  tempArr.forEach(ad=>
    {
      if(ad!==false && ad.length!==0)
      allAds.push(ad[0])
    })
  thirdArr=tempArr.filter((el)=>{return el!==false})
 thirdArr = [].concat.apply([], thirdArr);


  res.status(200).json(thirdArr)
}
catch(e)
{
  res.json({"Error Message":e})
}
}
 const getTitles=async(req,res)=>
{
try 
{
  if(req.params.location==="Canada")
  {
    let titles=[]
    let carads=await carAd.find()
    let petads=await PetAd.find()
    let realestateads=await RealEstateAd.find()
    let serviceads=await ServiceAd.find()
    let jobads=await jobAd.find()
    carads.forEach(ad=>
      {
        titles.push({"label":ad.title})
      })
      petads.forEach(ad=>
        {
  titles.push({"label":ad.title})
        })
        realestateads.forEach(ad=>
          {
            titles.push({"label":ad.title})
          })
          realestateads.forEach(ad=>
            {
              titles.push({"label":ad.title})
            })
            serviceads.forEach(ad=>
              {
                titles.push({"label":ad.title})
              })
              jobads.forEach(ad=>
                {
                  titles.push({"label":ad.title})
                })
    res.status(200).json(titles)
  }
  else 
  {
    let titles=[]
    let carads=await carAd.find({location:req.params.location})
    let petads=await PetAd.find({location:req.params.location})
    let realestateads=await RealEstateAd.find({location:req.params.location})
    let serviceads=await ServiceAd.find({location:req.params.location})
    let jobads=await jobAd.find({location:req.params.location})
    carads.forEach(ad=>
      {
        titles.push({"label":ad.title})
      })
      petads.forEach(ad=>
        {
  titles.push({"label":ad.title})
        })
        realestateads.forEach(ad=>
          {
            titles.push({"label":ad.title})
          })
          realestateads.forEach(ad=>
            {
              titles.push({"label":ad.title})
            })
            serviceads.forEach(ad=>
              {
                titles.push({"label":ad.title})
              })
              jobads.forEach(ad=>
                {
                  titles.push({"label":ad.title})
                })
    res.status(200).json(titles)
  }
}
catch(e)
{
  res.json(e)
}
}
 const Search = async (req,res)=>
{
  try 
  {
    if(req.params.location==="Canada")
    {
      let results=[]
      let filtered=[]
      const autoRecords=await carAd.find({title: { $regex: req.params.query, $options: "i" }})
      autoRecords!==null && autoRecords.length>0 && results.push(autoRecords)
      const jobRecords=await jobAd.find({title: { $regex: req.params.query, $options: "i" }})
      jobRecords!==null && jobRecords.length>0 && results.push(jobRecords)
      const serviceRecords=await ServiceAd.find({title: { $regex: req.params.query, $options: "i" }})
      serviceRecords!==null && serviceRecords.length>0 && results.push(serviceRecords)
      const petRecords=await PetAd.find({title: { $regex: req.params.query, $options: "i" }})
      petRecords!==null && petRecords.length>0 && results.push(petRecords)
      const RealEstateRecords=await RealEstateAd.find({title: { $regex: req.params.query, $options: "i" }})
      RealEstateRecords!==null && RealEstateRecords.length>0 && results.push(RealEstateRecords)
      results=[...autoRecords,...jobRecords,...serviceRecords,...petRecords,...RealEstateRecords]
      filtered=results.filter(result=>(result.length>0 && result!==null))
  res.status(200).json(results)
    }
    else 
    {
      let results=[]
      let filtered=[]
      const autoRecords=await carAd.find({title: { $regex: req.params.query, $options: "i" },location:req.params.location})
      autoRecords!==null && autoRecords.length>0 && results.push(autoRecords)
      const jobRecords=await jobAd.find({title: { $regex: req.params.query, $options: "i" },location:req.params.location})
      jobRecords!==null && jobRecords.length>0 && results.push(jobRecords)
      const serviceRecords=await ServiceAd.find({title: { $regex: req.params.query, $options: "i" },location:req.params.location})
      serviceRecords!==null && serviceRecords.length>0 && results.push(serviceRecords)
      const petRecords=await PetAd.find({title: { $regex: req.params.query, $options: "i" },location:req.params.location})
      petRecords!==null && petRecords.length>0 && results.push(petRecords)
      const RealEstateRecords=await RealEstateAd.find({title: { $regex: req.params.query, $options: "i" },location:req.params.location})
      RealEstateRecords!==null && RealEstateRecords.length>0 && results.push(RealEstateRecords)
      results=[...autoRecords,...jobRecords,...serviceRecords,...petRecords,...RealEstateRecords]
      filtered=results.filter(result=>(result.length>0 && result!==null))
  res.status(200).json(results)
    }
  }
  catch(e)
  {
    res.status(500).json({"Error":e})
  }
}

module.exports = {
  RegisterUser,
  loginUser,
  getUser,
  getAllAdsForAUser,
  getTitles,
  Search
};
