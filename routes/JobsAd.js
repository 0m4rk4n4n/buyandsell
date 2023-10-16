const express=require("express")
const {addAd,getAds,getLatestAds,getOldestAds,highestPriceFirst,lowestPriceFirst,fetchBasedOnType,deleteAd,getSingleAd}=require("../controllers/JobsAd.js")
const router=express.Router()
router.post("/add_ad",addAd)
router.get("/getads/:location",getAds)
router.get("/getsinglead/:id", getSingleAd);
router.get("/getlatestads",getLatestAds)
router.get("/getoldestads",getOldestAds)
router.get("/highestpricefirst",highestPriceFirst)
router.get("/lowestpricefirst",lowestPriceFirst)
router.get("/getrecordsbasedtype/:type/:location",fetchBasedOnType)
router.delete("/deletead/:id",deleteAd)
module.exports = router;
