const express=require("express")
const message=require("../models/message.js")
const router=express.Router()
router.post("/",async (req,res)=>
{
const newMessage= new message({conversationId:req.body.conversationId,sender:req.body.sender,text:req.body.message,read:req.body.read})
try 
{
    const savedMessage=await newMessage.save()
    res.status(200).json(savedMessage)
}
catch(e)
{
    res.status(500).json(e)
}
})
router.put(`/setRead/:conversationId`,async(req,res)=>
{
try
{
    const messages=await message.find({conversationId:req.params.conversationId})
    messages.forEach(async(msg)=>
    {
       await msg.update({$set:{read:true}},{new:true})
    })
res.status(200).json("success")
}
catch(e)
{
    throw e
}
})
router.delete("/deleteads", async(req,res)=>
{
 try
 {
const ads=await message.find()
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
router.get(`/doeshaveunread/:conId/:userId`,async(req,res)=>
{
    let result=false
    const messages=await message.find({conversationId:req.params.conId})
    messages.forEach(async(msg)=>
    {
        if(msg.read===false && msg.sender===req.params.userId)
        result=true 
    })
    res.status(200).json(result)
})
router.get("/:conversationId",async(req,res)=>
{
    try 
    {
const messages=await message.find({conversationId:req.params.conversationId})
res.status(200).json(messages)
    }
    catch(e)
    {
        res.status(500).json(e)
    }
})
module.exports = router;
