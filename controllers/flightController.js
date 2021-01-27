import asyncHandler from 'express-async-handler'
import Flight from '../models/flightModel.js'
import ErrorResponse from '../utils/errorHandler.js'


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
// @route GET /flights
// @access Public
const getFlights = asyncHandler(async (req, res) => {
    const flights = await Flight.find({})
    res.json(flights)
})


// @desc      Delete course
// @route     DELETE /flights/:id
// @access    Private
const deleteFlight =  asyncHandler(async (req, res, next) =>{

    const flight = await Flight.findById(req.params.id);
    console.log(flight)

    if (!flight) {
      return next(
        new ErrorResponse(`No flight with the id of ${req.params.id}`, 404)
      );
    }

    await flight.deleteOne();

    res.status(200).json({
      success: true,
      data: {}
    });

})


// @desc      Update course
// @route     PUT /flights/:id
// @access    Private
const updateFlight = asyncHandler(async (req, res, next) => {
  let flight = await Flight.findById(req.params.id);

  if (!flight) {
    return next(
      new ErrorResponse(`No flight with the id of ${req.params.id}`, 404)
    );
  }

  // // Make sure user is course owner
  // if (course.user.toString() !== req.user.id && req.user.role !== 'admin') {
  //   return next(
  //     new ErrorResponse(
  //       `User ${req.user.id} is not authorized to update course ${course._id}`,
  //       401
  //     )
  //   );
  // }

  flight = await Flight.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false
  });

  flight.save();

  res.status(200).json({
    success: true,
    data: flight
  });
});


export { addFlights, getFlights, deleteFlight, updateFlight }