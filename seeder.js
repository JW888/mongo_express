import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import flights from './data/flights.js'
import connectDB from './config/db.js'
import Flight from './models/flightModel.js'

dotenv.config()
connectDB()

const importData = async () => {
    try {
        await Flight.deleteMany()

        const createdFlight = await Flight.insertMany(flights)

        console.log('Data Imported!'.green.inverse)
        process.exit()

    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Flight.deleteMany()

        console.log('Data Destroyed!'.red.inverse)
        process.exit()

    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}