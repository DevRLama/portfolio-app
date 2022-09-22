const mongoose = require('mongoose');

const recommSchema = mongoose.Schema({
    EmailId: { 
        type: String,
        require: true
    },
    RecommendBy: { 
        type: String,
        require:true
    },
    RecommenderComp: {
        type: String,
        require:true
    },
    RecommenderJobTitle: {
        type: String,
        require:true
    },
    ReferralDate:{
        type:String,
    },
    ReferralText:{
        type:String,
       
    }
})

module.exports = mongoose.model('Recommendation', recommSchema);