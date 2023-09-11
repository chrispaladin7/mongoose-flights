const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');


//All route start with slash(/)
//GET /tickets/:id/new
router.get('/flights/:id/tickets/new', ticketsCtrl.new);

//POST /flight/:id/tickets
router.post('/flights/:id/tickets',ticketsCtrl.create)



module.exports=router;