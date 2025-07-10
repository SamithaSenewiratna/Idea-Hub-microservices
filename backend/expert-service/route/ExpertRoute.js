const express = require('express');
const ExpertController = require('../controller/ExpertController');

const router = express.Router();

router.post('/create-expert',ExpertController.createExpert);
router.put('/update-expert/:id',ExpertController.updateExpert);
router.delete('/delete-expert/:id',ExpertController.deleteExpert);
router.get('/findById-expert/:id',ExpertController.findExpertById);
router.get('/findAll-expert',ExpertController.findAllExperts);

module.exports = router;