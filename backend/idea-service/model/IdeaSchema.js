const mongoose  = require('mongoose');

const IdeaSchema = new mongoose.Schema({
  ideaId: { type: String, required: true },
  date: { type: Date },
  userId: { type: String },
  discription: { type: String },
  catogery: { type: String },
  images: [{ type: String }], // Max 5 images
  createdDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('idea', IdeaSchema);
