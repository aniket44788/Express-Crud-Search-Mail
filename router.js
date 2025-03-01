const express = require("express")
const schema = require("./Schema")
const Router = express.Router()

Router.get("/", async (req,res)=>{
    try {
        const finduser = await schema.find({})
        res.status(200).json({
            message : " data found scuccessfully.",
            data : finduser
        })
    } catch (error) {
        res.status(404).json({
            message : "data not found "
        })
    }
}).get("/find/:name" , async (req,res)=>{
    const { name } = req.params;
    try {
        const data = await schema.find({ name : name})
        if(data.length <= 0){
            return res.status(404).json({ message : "no data found"})
        } 
        return  res.status(200).json({ message:  " data found successfully." , data: data})
    } catch (error) {
        res.status(404).json({ message : error})
    }
})
module.exports = Router;