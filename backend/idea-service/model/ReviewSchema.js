const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  ideaId: { type: String, required: true }, // reference to ideaId in Idea
  userId: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String },
  createdDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('review', ReviewSchema);
