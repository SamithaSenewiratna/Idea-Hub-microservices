const mongoose  = require('mongoose');
const ExpertSchema = new mongoose.Schema({
     
      expertId :{ type: String, required :true },
      name :{ type: String },
      profileImage: { type: String }, 
      email:{type : String},
      NIC:{type:String},
      address:{type:String},
      discription:{type:String},
      createdDate:{type:Date}

});

module.exports = mongoose.model('expert',ExpertSchema);