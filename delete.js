const express = require("express")
const schema = require("./Schema")
const deleteRouter = express.Router()

deleteRouter.delete( "/:id" , async (req,res)=>{
    const {id} = req.params;
    try{
        const data = await schema.findByIdAndDelete({_id:id})
        res.status(200).json({
            message : "User Deleted Successfully."
        })
    }catch(error){
        console.log(error)
        res.status(404).json({
            message: "User not Deleted"
        })
    }
})
module.exports = deleteRouter;