const router = require('express').Router()
const Carpark = require('../models/carpark.model');
const Vehicle = require('../models/vehicle.model');

//SHOW ALL
router.get("/", async (req, res) => {
    try {
        let carparks = await Carpark.find()
        res.render("carpark/index", {
            carparks
        })

    } catch (error) {
        console.log(error)
    }
});

//CREATE ONE
router.get("/new", (req,res)=> {
    res.render('carpark/new')
})

router.post("/new", async (req,res)=> {
    let carpark = new Carpark(req.body)
    try {
        await carpark.save();
        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
})

//EDIT ONE 
router.get("/edit/:id", async (req,res)=>{
    try {
        let carpark = await Carpark.findById(req.params.id)
        res.render("carpark/edit", {carpark})
    } catch (error) {
        console.log(error)
    }
})

router.put("/edit/:id", async (req,res)=>{
    try {
        await Carpark.findByIdAndUpdate(req.params.id,req.body)
        res.redirect("/")
    } catch (error) {
        console.log(error)
    }
})

//SHOW ONE
router.get("/:id", async (req, res) => {
    try {
        let carpark = await Carpark.findById(req.params.id).populate("vehicles")
        // console.log(carpark)
        res.render("carpark/show", {
            carpark
        })
    } catch (error) {
        console.log(error)
    }
})

//ADD VEHICLE
router.post("/:id", async (req, res) => {

    try {
        //CREATE AND ADD VEHICLE TO DATABASE
        let vehicle = new Vehicle(req.body);
        let savedVehicle = await vehicle.save();

        //FIND CARPARK AND PUSH INTO VEHICLE ARRAY
        let carpark = await Carpark.findById(req.params.id)
        
        carpark.vehicles.push(savedVehicle._id)
        await carpark.save();

        //REDIRECT BACK TO CURRENT PAGE
        res.redirect(`/carpark/${req.params.id}`)

    } catch (error) {
        console.log(error)
    }

})

//REMOVE VEHICLE
router.delete("/:c_id/vehicle/:v_id", async (req,res)=> {
    try {
        //FIND CARPARK
        //PULL FROM CARPARK
        let carpark = await Carpark.findByIdAndUpdate(req.params.c_id,{
            $pull:{
                vehicles: req.params.v_id
            }
        })    
        //REDIRECT BACK TO CURRENT PAGE
        res.redirect(`/carpark/${req.params.c_id}`)
    } catch (error) {
        console.log(error)
    }
})

//DELETE CARPARK
router.delete("/:id", async (req,res)=> {
    try {
        await Carpark.findByIdAndDelete(req.params.id)
        res.redirect("/")
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;