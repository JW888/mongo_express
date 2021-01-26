import mongoose from 'mongoose'

const flightSchema = mongoose.Schema({
    departureAirport: { type: String, required: true },
    arrivalAirport: { type: String, required: true },
    aircraft: { type: String, required: true },
    distance: { type: Number, required: true },
    intercontinental: { type: Boolean, required: true },
  }, {
    timestamps: true
})


const Flight = mongoose.model('Flight', flightSchema)

export default Flight