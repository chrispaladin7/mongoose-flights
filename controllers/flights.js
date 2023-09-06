const Flights = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
};

async function create(req, res) {
    // res.body.departs = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
    
    try {
        await Flights.create(req.body);
        res.redirect('/flights');
    } catch (err) {
        console.log(err);
        res.render('flights/new', { errorMsg: err.message });
    }
}

function newFlight(req, res) {
    res.render('flights/new', { errorMsg: '' });
}

async function index(rep, res) {
    const flights = await Flights.find({});
    res.render('flights/index', { flights });
}

