const Flights = require('../models/flight');

module.exports = {
    index,

};

function index(res, rep) {
    // const flights = await Flights.find({});
    res.render('flights/index', { flights });
}

