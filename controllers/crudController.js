import asyncHandler from 'express-async-handler'
import Crud from '../models/crudModel.js'


// @desc    Create new crud
// @route   POST /crud
// @access  Private

const addCrudItems = asyncHandler(async (req, res) => {
    console.log(req.body)
    
    const crud = new Crud({
        "name":req.body.name,
        "comment":req.body.comment
    })
    
    const createdCrud = await crud.save()

    res.status(201).json(createdCrud)
})


// @desc Fetch all cruds
// @route GET /cruds
// @access Public
const getCruds = asyncHandler(async (req, res) => {
    const cruds = await Crud.find({})
    res.json(cruds)
})


export { addCrudItems, getCruds }