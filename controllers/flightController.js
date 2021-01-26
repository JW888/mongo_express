import asyncHandler from 'express-async-handler'
import Flight from '../models/flightModel.js'


// @desc    Create new flight
// @route   POST /crud
// @access  Private

const addFlights = asyncHandler(async (req, res) => {
    console.log(req.body)

    const flight = new Crud(req.body)
    
    const createdCrud = await crud.save()

    res.status(201).json(createdCrud)
})


// @desc Fetch all cruds
// @route GET /flight
// @access Public
const getFlights = asyncHandler(async (req, res) => {
    const flights = await Flight.find({})
    res.json(flights)
})


export { addFlights, getFlights }