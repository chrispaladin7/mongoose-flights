const express = require('express');
const router = express.Router();
const destinationCtrl = require('../controllers/destinations');

// POST /movies/:id (show functionality) MUST be below new route
router.post('/flights/:id/destinations', destinationCtrl.create);

module.exports=router;