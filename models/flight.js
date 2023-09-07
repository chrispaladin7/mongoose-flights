const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['JFK', 'ATL', 'DCA', 'TYR']
    },
    arrival: Date
}, {
    timestamps: true
});

const flightSchema = new Schema({
    airline: String,
    airport: {
        type: String,
        enum: ['JFK', 'ATL', 'DCA', 'TYR']
    },
    flightNo: Number,
    departs: {
        type: Date,
        default: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
        destination: [destinationSchema]
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('flights', flightSchema);