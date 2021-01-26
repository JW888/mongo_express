import asyncHandler from 'express-async-handler'
import Flight from '../models/flightModel.js'


// @desc    Create new flight
// @route   POST /flights
// @access  Private

const addFlights = asyncHandler(async (req, res) => {
    console.log(req.body)

    const flight = new Flight(req.body)
    
    const createdFlight = await flight.save()

    res.status(201).json(createdFlight)
})


// @desc Fetch all flights
// @route GET /flight
// @access Public
const getFlights = asyncHandler(async (req, res) => {
    const flights = await Flight.find({})
    res.json(flights)
})

const deleteFlight =  asyncHandler(async (req, res) =>{

    // const flight = await Flight.find(req.body)
    // res.json(flight[0])
    // Flight.findByIdAndDelete("600fd7b83675d634532d1660")
    // console.log(`Flight ${flight[0]._id} deleted.`)

    Flight.findByIdAndDelete(req.body._id, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.status(200).json({
            msg: data
          })
        }
      })

})


export { addFlights, getFlights, deleteFlight }