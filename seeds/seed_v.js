require("../lib/db")

const Vehicle = require("../models/vehicle.model")

Vehicle.insertMany([{
    license_no: "SSS9999L",
    make_model: "Honda Freed"
}, {
    license_no: "SSS8888L",
    make_model: "Mini Cooper"
}, {
    license_no: "SSS1111L",
    make_model: "Lambo"
}, {
    license_no: "SSS2222L",
    make_model: "Toyota Altis"
}, {
    license_no: "SSS4444L",
    make_model: "Volkswagen Beetle"
}, ]).then((suc) => {
    console.log("successfully added!")
}).catch((e) => {
    console.log(e)
})