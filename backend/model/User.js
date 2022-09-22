const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    EmailId: {
        type: String,
        require: true,
        unique:true
    },
    Name: {
        type: String,
        require: true
    },
    Password:{
        type:String,
        require:true
    },
    role: {
        type: String,
        require: true
    }

})

module.exports = mongoose.model('User', userSchema);