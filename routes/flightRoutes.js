import express from 'express'
const router = express.Router()
import { addFlights, deleteFlight, getFlights, updateFlight } from '../controllers/flightController.js'

router.route('/')
    .post(addFlights)
    .get(getFlights)
    
router.route('/:id')
    .delete(deleteFlight)
    .put(updateFlight)

export default router