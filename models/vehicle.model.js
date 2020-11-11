const mongoose = require('mongoose');
const {
    Schema
} = mongoose;


const vehicleSchema = new Schema({
    vehicle_type: {
        type: String,
        required: true,
        enum: ["2W","4W"],
        default: "4W"
    },
    license_no: {
        type: String,
    },
    make_model: String,
    color: String,
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);
module.exports = Vehicle;