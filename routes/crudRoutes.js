import express from 'express'
const router = express.Router()
import { addCrudItems, getCruds } from '../controllers/crudController.js'

router.route('/').post(addCrudItems).get(getCruds)

export default router