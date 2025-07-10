const mongoose  = require('mongoose');
const ReviewSchema = new mongoose.Schema({
     
      reviewId:{type:String},
      expertId :{ type: String},
      message :{ type: String},
      createdDate:{type : Date},
      userId:{type : Number},
      qty:{type : Object},
      displayName:{type : String},

      ratings:{type : Number}

});

module.exports = mongoose.model('review',ReviewSchema);