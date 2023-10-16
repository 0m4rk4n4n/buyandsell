
const Ad =require("../models/JobsAds.js")
 const addAd=async(req,res,next)=>
{
    try 
    {
const newAd=new Ad({...req.body})
const savedAd=await newAd.save()
res.status(200).json(savedAd)
    }
    catch(e)
    {
res.json({e})
    }
}
 const deleteAd=async(req,res,next)=>
{
    try 
    {
const ads=await Ad.findByIdAndDelete(req.params.id)
res.status(200).json("Ad has been deleted succesfully")
    }
    catch(e)
    {
res.json({e})
    }
}

 const getAds=async(req,res,next)=>
{
    try 
    {
        if(req.params.location==="Canada")
        {
            const ads=await Ad.find()
            res.status(200).json(ads)
        }
        else 
        {
            const ads=await Ad.find({location:req.params.location})
            res.status(200).json(ads)
        }
    }
    catch(e)
    {
res.json({e})
    }
}
 const getLatestAds=async(req,res,next)=>
{
    try 
    {
        const latest_records=await Ad.find().sort({$natural:-1}) 
        res.status(200).json(latest_records)
    }
     catch(e)
     {
        res.json({e})
     }
}
 const getOldestAds=async(req,res,next)=>
{
    try 
    {
        const latest_records=await Ad.find().sort({$natural:1}) 
        res.status(200).json(latest_records)
    }
     catch(e)
     {
        res.json({e})
     }
}
 const highestPriceFirst=async(req,res,next)=>
{
    try 
    {
        const latest_records=await Ad.find().sort({price:-1})
        res.status(200).json(latest_records)
    }
     catch(e)
     {
        res.json({e})
     }
}
 const lowestPriceFirst=async(req,res,next)=>
{
    try 
    {
        const latest_records=await Ad.find().sort({price:1})
        res.status(200).json(latest_records)
    }

catch(e)
{
    res.json({e})
}}
 const fetchBasedOnType=async(req,res,next)=>
{
    try 
    {
        if(req.params.location==="Canada")
        {
            const latest_records=await Ad.find({type:req.params.type})
            res.status(200).json(latest_records)
        }
        else 
        {
            const latest_records=await Ad.find({type:req.params.type,location:req.params.location})
            res.status(200).json(latest_records)
        }
    }

catch(e)
{
    res.json({e})
}}
 const getSingleAd = async (req, res, next) => {
    try {
      const ad = await Ad.findById(req.params.id);
      res.status(200).json(ad);
    } catch (e) {
      res.json({ e });
    }
  };

  module.exports=
  {
addAd,
deleteAd,
getAds,
getLatestAds,
getOldestAds,
highestPriceFirst,
lowestPriceFirst,
fetchBasedOnType,
getSingleAd
  }