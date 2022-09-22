const mongoose = require('mongoose');

const expSchema = mongoose.Schema({
    EmailId: { 
        type: String,
        require: true
    },
    CompName: { 
        type: String,
        require:true
    },
    JobTitle: {
        type: String
    },
    JobDuration: {
        type: String,
        require:true
    },
    ProjectsDone:{
        type:String
    },
    Achievements:{
        type:String
    }
})

module.exports = mongoose.model('Experience', expSchema);