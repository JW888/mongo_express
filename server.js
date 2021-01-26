import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import crudRoutes from './routes/crudRoutes.js'
import flightRoutes from './routes/flightRoutes.js'

dotenv.config()
connectDB()

const app = express()

app.use(express.json())

app.use('/crud', crudRoutes)
app.use('/flights', flightRoutes)

app.get('/', (req, res) => {
    res.send('Express is running....')
})

const PORT = process.env.PORT || 5000


app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))
