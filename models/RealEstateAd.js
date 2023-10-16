const mongoose=require("mongoose")
const RealEstateAdsSchema=new mongoose.Schema(
    {
        userId:
        {
            type:String,
            required:true
        }
        ,title:
        {
            type:String,
            required:true,
        },
        description:
        {
            type:String,
            required:true,
        },
        Img:
        {
            type:[String]
            ,default:[""]
        },
        type:
        {
type:String  // Ex: land, condo, land, etc...
        },
        price:
        {
            type:Number
        },
        pets:
        {
            type:Boolean
        },
        rental:
        {
            type:Boolean,
            default:false
        },
        bedrooms:
        {
            type:Number,
            default:1
        },
        bathrooms:
        {
            type:Number,
            default:1
        },
        size:
        {
            type:Number
        },
        adType:
        {
            type:String,
            default:"realestate"
        },
        location:
        {
            type:String
        }
    },{timestamps:true})
    module.exports=mongoose.model("RealEstateAds",RealEstateAdsSchema)
