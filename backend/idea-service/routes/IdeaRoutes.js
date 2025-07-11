const express = require('express');
const IdeaController = require('../controller/IdeaController');

const router = express.Router();

router.post('/create-idea',IdeaController.createIdea);
router.put('/update-idea/:id',IdeaController.updateIdea);
router.delete('/delete-idea/:id',IdeaController.deleteIdea);
router.get('/findById-idea/:id',IdeaController.findIdeaById);
router.get('/findAll-idea',IdeaController.findAllIdeas);

module.exports = router;