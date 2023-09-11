const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
    create,
    new: newTicket
};

async function create(req, res) {
    const ticket = await Ticket.findById(req.params.id);
    ticket.destinations.push(req.body);
    try {
        await flight.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/flights/${flight._id}`);
}

// No leading slash for render
async function newTicket(req,res){
    const ticket = await Ticket.findById(req.params.id);
    res.render('ticket/new',{});
  }