const express=require("express")
const Conversation=require("../models/conversation.js")

const router=express.Router()
router.post("/",async (req,res)=>
{
    const newConversation=new Conversation({members:[req.body.senderId,req.body.receiverId]})
    try 
    {
        const savedConversation=await newConversation.save()
        res.status(200).json(savedConversation)
    }
    catch(e)
    {
        res.status(500).json(e)
    }
})
router.get("/conv/:id",async(req,res)=>
{
    try 
    {
        const conversation=await Conversation.findOne({_id:req.params.id})
        res.status(200).json(conversation)
    }
    catch(e)
    {
        res.status(500).json("error")
    }
})
router.get("/latest_conv/:user",async(req,res)=>
{
    let conversationId
    let otherUser
try 
{
    const record=await Conversation.find().sort({ updatedAt: -1 }).limit(1)
    conversationId=record[0]._id
    record[0].members.forEach(member=>
        {
            if(member!==req.params.user)
            otherUser=member
        })
    res.status(200).json({conversationId,otherUser})
}
catch(e)
{
    res.status(500).json(e)
}
})
router.get("/:userId",async(req,res)=>
{
    try 
    {
const conversation=await Conversation.find({members:{$in:[req.params.userId]}})
res.status(200).json(conversation)
    }
    catch(e)
    {
res.status(500).json(e)
    }
})
router.get("/searchforaconversation/:member1/:member2",async(req,res)=>
{
    let result=false
try 
{
    const conversations=await Conversation.find()
    conversations.forEach(conversation=>
        {
            if(conversation.members.includes(req.params.member1) && conversation.members.includes(req.params.member2) )
            result=true
        })
        res.status(200).json(result)
    }
catch(e)
{
throw e
}
})
router.get("/getaconversation/:member1/:member2",async(req,res)=>
{
    let conv
try 
{
    const conversations=await Conversation.find()
    conversations.forEach(conversation=>
        {
        if(conversation.members.includes(req.params.member1) && conversation.members.includes(req.params.member2))
        {
            conv=conversation
        }
        })
        res.status(200).json(conv)
    }
catch(e)
{
throw e
}
})
router.put("/update/:date/:currentConv",async(req,res)=>
{
    try
    {
        const conv=await Conversation.findById(req.params.currentConv)
        await conv.updateOne({$set:{updatedAt:req.params.date,new:true}})
        res.status(200).json("success")
    }
    catch(e)
    {
        res.status(500).json(e)
    }
})

module.exports = router;
