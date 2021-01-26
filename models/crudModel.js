import mongoose from 'mongoose'

const crudSchema = mongoose.Schema({
    name: { type: String, required: true },
    comment: { type: String, required: true },
  }, {
    timestamps: true
  })


  const Crud = mongoose.model('Crud', crudSchema)

  export default Crud