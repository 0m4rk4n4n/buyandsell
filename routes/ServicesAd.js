const express=require("express")
const {addAd,getAds,deleteAd,getsinglead}=require("../controllers/ServicesAd.js")
const router=express.Router()
router.post("/add_ad",addAd)
router.get("/getads/:location",getAds)
router.get("/getsinglead/:id",getsinglead)
router.delete("/deletead/:id",deleteAd)
module.exports = router;
