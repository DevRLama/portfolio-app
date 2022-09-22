const mongoose = require('mongoose');

const personalSchema = mongoose.Schema({
    EmailId: { 
        type: String,
        require: true,
        unique:true
    },
    Name: { 
        type: String,
        require:true
    },
    MobileNo: {
        type: String,
        require:true
    },
    Designation: {
        type: String,
        require:true
    },
    Resume:{
        type:String,
    }
})

module.exports = mongoose.model('PersonalInfo', personalSchema);