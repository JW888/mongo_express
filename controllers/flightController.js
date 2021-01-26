import asyncHandler from 'express-async-handler'
import flights from '../data/flights.js'
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


export { addFlights, getFlights }