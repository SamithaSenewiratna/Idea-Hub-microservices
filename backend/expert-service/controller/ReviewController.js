const ReviewSchema = require('../model/ReviewSchema');

// Create review
const createReview = async (request, response) => {
  try {
    const {
      reviewId,
      expertId,
      message,
      userId,
      qty,
      displayName,
      ratings
    } = request.body;

    const review = new ReviewSchema({
      reviewId,
      expertId,
      message,
      createdDate: new Date(),
      userId,
      qty,
      displayName,
      ratings
    });

    await review.save();
    response.status(201).json({ message: 'Review created successfully', review });
  } catch (error) {
    response.status(500).json({ message: 'Failed to create review', error });
  }
};

// Update review
const updateReview = async (request, response) => {
  try {
    const reviewId = request.params.id;
    const updated = await ReviewSchema.findByIdAndUpdate(
      reviewId,
      request.body,
      { new: true }
    );

    if (!updated) {
      return response.status(404).json({ message: 'Review not found' });
    }

    response.json({ message: 'Review updated successfully', review: updated });
  } catch (error) {
    response.status(500).json({ message: 'Failed to update review', error });
  }
};

// Delete review
const deleteReview = async (request, response) => {
  try {
    const reviewId = request.params.id;
    const deleted = await ReviewSchema.findByIdAndDelete(reviewId);

    if (!deleted) {
      return response.status(404).json({ message: 'Review not found' });
    }

    response.json({ message: 'Review deleted successfully' });
  } catch (error) {
    response.status(500).json({ message: 'Failed to delete review', error });
  }
};

// Find review by ID
const findReviewById = async (request, response) => {
  try {
    const reviewId = request.params.id;
    const review = await ReviewSchema.findById(reviewId);

    if (!review) {
      return response.status(404).json({ message: 'Review not found' });
    }

    response.json(review);
  } catch (error) {
    response.status(500).json({ message: 'Failed to fetch review', error });
  }
};

// Find all reviews (optional: filter by expertId)
const findAllReviews = async (request, response) => {
  try {
    const { expertId } = request.query;
    const query = expertId ? { expertId } : {};
    const reviews = await ReviewSchema.find(query).sort({ createdDate: -1 });

    response.json(reviews);
  } catch (error) {
    response.status(500).json({ message: 'Failed to fetch reviews', error });
  }
};

module.exports = {
  createReview,
  updateReview,
  deleteReview,
  findReviewById,
  findAllReviews
};
