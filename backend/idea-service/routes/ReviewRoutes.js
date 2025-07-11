const express = require('express');
const ReviewController = require('../controller/ReviewController');

const router = express.Router();

router.post('/create-review',ReviewController.createReview);
router.put('/update-review/:id',ReviewController.updateReview);
router.delete('/delete-review/:id',ReviewController.deleteReview);
router.get('/findAll-review',ReviewController.findAllReview);

module.exports = router;