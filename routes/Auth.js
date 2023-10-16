const express=require("express")
const {RegisterUser, loginUser,getUser, getAllAdsForAUser,getTitles,Search}=require("../controllers/auth.js")
const router = express.Router();
router.post("/register", RegisterUser);
router.post("/login", loginUser);
router.get("/getuser/:id", getUser);
router.get("/gettitles/:location",getTitles)
router.get("/getalladsforauser/:id",getAllAdsForAUser)
router.get("/searchwithquery/:query/:location",Search)
module.exports = router;
