const Ad = require("../models/RealEstateAd.js")
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
await Ad.findByIdAndDelete(req.params.id)
res.status(200).json("Ad has been deleted successfully")
    }
    catch(e)
    {
        res.json({e})
    }
}
 const getsinglead=async(req,res)=>
{
    try
    {
        const ad=await Ad.findById(req.params.id)
        res.status(200).json(ad)
  } catch (e) {
    res.json({ e });
    }
}
 const getallads=async(req,res)=>
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
    catch(error)
    {
        res.json({"Error":error})
    }
}
 const getAds=async(req,res,next)=>
{
    try 
    {
const ads=await Ad.find().skip((req.params.page*10)-10).limit(10)
res.status(200).json(ads)
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
}}
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
 const fetchBasedOnGivenPrice=async(req,res,next)=>
{
try 
{
    if(req.params.location==="Canada")
    {
        const latest_records=await Ad.find({ price : { $gte :  req.params.first, $lte : req.params.second}})
        res.status(200).json(latest_records)
    }
    else 
    {
        const latest_records=await Ad.find({ price : { $gte :  req.params.first, $lte : req.params.second,},location:req.params.location})
        res.status(200).json(latest_records)
    }
}
catch(e)
{
    res.json({e})
}
}
 const petFriendly=async(req,res)=>
{
    try 
    {
        if(req.params.location==="Canada")
        {
            const results=await Ad.find({pets:true})
            res.status(200).json(results)
        }
        else 
        {
            const results=await Ad.find({pets:true,location:req.params.location})
            res.status(200).json(results) 
        }
    }
    catch(e)
    {
res.json({e})
    }
}
 const notPetFriendly=async(req,res)=>
{
    try 
    {
        if(req.params.location==="Canada")
        {
            const results=await Ad.find({pets:false})
            res.status(200).json(results)
        }
        else 
        {
            const results=await Ad.find({pets:false,location:req.params.location})
            res.status(200).json(results)
        }
    }
    catch(e)
    {
res.json({e})
    }
}
 const getBasedOnType=async(req,res)=>
{
    try 
    {
        if(req.params.location==="Canada")
        {
            const ads=await Ad.find({type:req.params.type})
            res.status(200).json(ads)
        }
        else 
        {
            const ads=await Ad.find({type:req.params.type,location:req.params.location})
            res.status(200).json(ads)
        }
    }
    catch(e)
    {
        res.json({e})
    }
}

module.exports={addAd,
    deleteAd,
    getsinglead,
    getallads,
    getAds,
    getLatestAds,
    getOldestAds,
    highestPriceFirst,
    lowestPriceFirst,
    fetchBasedOnGivenPrice,
    petFriendly,
    notPetFriendly,
    getBasedOnType}