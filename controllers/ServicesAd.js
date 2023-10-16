const Ad = require("../models/servicesAds.js")
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
 const deleteAd=async(req,res,next)=>
{
    try 
    {
const ad=await Ad.findById(req.params.id)
await ad.deleteOne() && res.status(200).json("add has been deleted successfully")
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
module.exports={addAd,
    getAds,
    deleteAd,
    getsinglead}