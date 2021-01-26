import express from 'express'
const router = express.Router()
import { addFlights, getFlights } from '../controllers/flightController.js'

router.route('/').post(addFlights).get(getFlights)

export default router