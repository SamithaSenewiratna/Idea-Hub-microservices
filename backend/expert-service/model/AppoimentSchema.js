const mongoose  = require('mongoose');
const AppoimentSchema = new mongoose.Schema({
     
      appoimentId :{ type: String, required :true },
      date:{type:Date},
      reviewId:{type:String},
      discription:{type:String},
      
});

module.exports = mongoose.model('appoiment',AppoimentSchema);