# Carpark Management System
Wilson, a carpark mogul has approached you to develop a carpark management app to manage and track the live parking lot availability for each of his carparks. He also wants to be able to track the vehicle make and model, color, and license plate number of each vehicle in the carpark.

You are to use node, express, mongodb to develop the parking app, and ejs layouts to create your views.

## Specifications
1. As a user, I want to be able to create a new carpark and specify its location, and define its parking capacity.
2. As a user, I want to be able to indicate that a vehicle has entered and parked in the carpark, record its make, model and license plate number (e.g. Toyota Altis, Champagne Gold, SMC3699J)
3. As a user, I want to remove a car from a carpark.
4. As a user, I want to be able to view the current avaibility of a carpark. e.g. `carpark full` OR `153/200 lots available`.

## Hints

### Models
- Your carpark model could contain the following details
    - Name
    - Location
    - Max Capacity: 200
    - Current Vehicles:
        - [ref: Vehicle]
- Your vehicle model could contain the following fields
    - Vehicle type: 2W/4W
    - License plat no.
    - Make and model
    - Colour

### Routes (Suggested design)
GET `/carparks`: Show all carparks in the system, with current availability for each carpark
GET `/carparks/:id`: List all the current vehicles in carpark, includes a form to add a vehicle into the carpark
GET/POST `/carparks/new`: Form to create a new carpark
POST `/carparks/:id/add` Post route to add a car to the carpark

### Suggested way to start
- Create the basic CRUD functionality for carparks
- Focus on a single vehicle type
