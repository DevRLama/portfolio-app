const User = require('../model/User');
const express = require('express');
const router = express.Router();

//Route 1: Authenticate user using: POST "/api/auth/login". Login  require Auth
router.post('/login', async (req, res) => {
    //if there are errors, Bad request return
    let success = false;
   
    //If no error, get the data on the basis of user id.
    const { EmailId, Password } = req.body; // get the ERPID and password from the body of request.
    try {
        let user = await User.findOne({ EmailId: EmailId })
        if (!user) {
            success = false;
            return res.status(400).json({ success, error: "Please try to login with correct credentials" })
        }
        if(!(user.Password===Password)){
            success = false;
            return res.status(400).json({ success, error: "Please try to login with correct credentials" })
        }    
        success = true;
        let role=user.role
        res.json({ success, role })
       

    } catch (error) { //catch error when input passes validation but database constraint on key not done. 
        console.error(error.message)
        res.status(500).send('Internal server occured')
    }
})





module.exports = router;