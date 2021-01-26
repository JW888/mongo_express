import express from 'express'
const router = express.Router()
import { addFlights, deleteFlight, getFlights } from '../controllers/flightController.js'

router.route('/')
    .post(addFlights)
    .get(getFlights)
    .delete(deleteFlight)

export default router