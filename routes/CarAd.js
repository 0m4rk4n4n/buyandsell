const express=require("express")
const VerifyToken=require("../VerifyToken.js")
const { addAd,getAds,deleteAd,findnmbers,getLatestAds,getOldestAds,highestPriceFirst,lowestPriceFirst,ftechCounts,fetchBasedOnTransmission,fetchBasedOnFuelType,fetchBasedOnGivenKilometers,fetchBasedOnGivenPrice,getSingleAd,fetchBasedOnGivenYear,getNewCars,getUsedCars,fetchBasedOnColor,findcolors,findbasedoncondition,findnmbersbasedontransmission,findnmbersbasedonfuel,getbasedonmake,fetchbasedoncondition,getallrecords,fetchbasedonevents,getalladds,fetchbasedonvalues}=require("../controllers/CarAd.js")
const carAd=require("../models/carAd.js")
const router = express.Router();
router.post("/add_ad", VerifyToken, addAd);
router.get("/getads/:page", getAds);
router.get("/getsinglead/:id", getSingleAd);
router.get("/getallads/:location",getalladds)
router.get("/getlatestads", getLatestAds);
router.get("/getoldestads", getOldestAds);
router.get("/getusedcars", getUsedCars);
router.get("/getnewcars", getNewCars);
router.get("/highestpricefirst", highestPriceFirst);
router.get("/lowestpricefirst", lowestPriceFirst);
router.get("/getbrandcounts/:location", ftechCounts);
router.get("/getrecordsbasedoncolor/:color/:location", fetchBasedOnColor);
router.get(
  "/getrecordsbasedontransmission/:transmission/:location",
  fetchBasedOnTransmission
);
router.get("/getrecordsbasedonfueltype/:fueltype/:location", fetchBasedOnFuelType);
router.get("/getbasedonkilometersgiven/:k1/:k2", fetchBasedOnGivenKilometers);
router.get("/getbasedonpricegiven/:first/:second/:location", fetchBasedOnGivenPrice);
router.get("/getbasedonyeargiven/:first/:second/:location", fetchBasedOnGivenYear);
router.get("/fetchbasedonevents/:first/:second/:event", fetchbasedonevents);
router.get("/findnumbers/:q", findnmbers);
router.get("/getbasedonmake/:make/:location", getbasedonmake);
router.get("/getallrecords/", getallrecords);
router.get("/findnumbersbasedoncondition/:q/:location", findbasedoncondition);
router.get("/fetchbasedoncondition/:q/:location", fetchbasedoncondition);
router.get("/findnumbersbasedontransmission/:q/:location", findnmbersbasedontransmission);
router.get("/findnumbersbasedonfuel/:q/:location", findnmbersbasedonfuel);
router.get("/findcolors/:q/:location", findcolors);
router.get("/fetchbasedonvalues/:start", fetchbasedonvalues);
router.delete("/deleteAd/:id", VerifyToken, deleteAd);
router.delete("/deleteads", async(req,res)=>
{
 try
 {
const ads=await carAd.find()
ads.forEach(async(ad)=>
{
await ad.deleteOne()
})
 }
 catch(e)
 {
  res.json(
    "Error"
  )
 }
})
module.exports = router;
