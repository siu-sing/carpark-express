const mongoose = require('mongoose');
const {
    Schema
} = mongoose;


const carparkSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    capacity: {type: Number, required: true},
    vehicles: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: "Vehicle"
        }
    ]
});

const Carpark = mongoose.model('Carpark', carparkSchema);

module.exports = Carpark;