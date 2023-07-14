import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routes/userRoutes.js'
import authRoute from './routes/authRoutes.js'
import placesRoute from './routes/placesRoutes.js'
import destinationsRoute from './routes/destinationsRoutes.js'
import errorHandler from './controllers/errorController.js';

dotenv.config();
const app = express()

const DB = process.env.DB.replace('<password>', process.env.DB_PASSWORD)

const connectDB = async () => {
  try {
    await mongoose.connect(DB)
    console.log('DB Connected');
  } catch (error) {
    throw error
  }
}

// Middlewares
app.use(express.json())

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/places', placesRoute)
app.use('/api/destinations', destinationsRoute)

// Global Error Handler
app.use(errorHandler)

app.listen(8800, () => {
  connectDB()
  console.log('Server Connected');
})