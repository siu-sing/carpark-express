require("../lib/db")

const Carpark = require("../models/carpark.model")

Carpark.insertMany([{
        name: "Carpark 1",
        location: "Pasir Ris",
        capacity: 10,
    }, {
        name: "Carpark 2",
        location: "Anson Rd",
        capacity: 5,
    },
    {
        name: "Carpark 3",
        location: "Jurong",
        capacity: 100,
    }, {
        name: "Carpark 4",
        location: "Tampines",
        capacity: 10,
    }, {
        name: "Carpark 5",
        location: "Rivervalley",
        capacity: 69,
    },
]).then((suc) => {
    console.log("successfully added!")
}).catch((e) => {
    console.log(e)
})