const express = require('express');
const AppoimentCoontroller = require('../controller/AppoimentCoontroller');

const router = express.Router();

router.post('/create-appoiment',AppoimentCoontroller.createAppoiment);
router.put('/update-appoiment/:id',AppoimentCoontroller.updateAppoiment);
router.delete('/delete-appoiment/:id',AppoimentCoontroller.deleteAppoiment);
router.get('/findById-appoiment/:id',AppoimentCoontroller.findAppoimentById);
router.get('/findAll-appoiment',AppoimentCoontroller.findAllAppoiment);

module.exports = router;