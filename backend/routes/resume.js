const Personal = require('../model/PersonalInfo');
const Recomm = require('../model/Recommendation');
const UserExp = require('../model/Experience');
const express = require('express');
const router = express.Router();

//Route 1: Authenticate user using: POST "/api/auth/login". Login  require Auth
router.get('/allInfo',async (req, res) => {
    //if there are errors, Bad request return
    
    try {
            // userId=req.user;
            // console.log(req.user)
            // const userRole=await User.findById(userId._id).select("-password")
            // console.log("Hello"+userRole)
            // const erp=userRole.ERPID
           
            const userPersonal=await Personal.findOne({EmailId:req.query.EmailId})
            const userRecomm=await Recomm.findOne({EmailId:req.query.EmailId})
            const userExp=await UserExp.findOne({EmailId:req.query.EmailId})
           // const work= await ReportTo.findOne({ERPID:req.header('erpID')})
           
            // const userRole=await User.find(userId).select("-password")
            res.send({respCode:1,userPersonal:userPersonal,userRecomm:userRecomm,userExp:userExp})
        }catch (error) { //catch error when input passes validation but database constraint on key not done. 
        console.error(error.message)
        res.status(500).send('Internal server occured')
    }
})

router.post('/updateInfo',async (req, res) => {
    //if there are errors, Bad request return
    
    try {
            // userId=req.user;
            // console.log(req.user)
            // const userRole=await User.findById(userId._id).select("-password")
            // console.log("Hello"+userRole)
            // const erp=userRole.ERPID
            const { EmailId, Name,MobileNo } = req.body;
            console.log(EmailId,Name,MobileNo)
            const userPersonal=await Personal.updateOne({EmailId:EmailId},{$set:[{Name:Name},{MobileNo:MobileNo}]})
           
            res.send({respCode:1})
        }catch (error) { //catch error when input passes validation but database constraint on key not done. 
        console.error(error.message)
        res.status(500).send('Internal server occured')
    }
})



module.exports = router;