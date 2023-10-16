const express=require("express")
const {addAd,getAds,fetchBasedOnGivenPrice,deleteAd,getsinglead}=require("../controllers/PetsAd.js")
const router=express.Router()
router.post("/add_ad",addAd)
router.get("/getads/:location",getAds)
router.get("/getbasedonpricegiven/:first/:second/:location",fetchBasedOnGivenPrice)
router.delete("/deletead/:id",deleteAd)
router.get("/getsinglead/:id",getsinglead)
module.exports = router;
