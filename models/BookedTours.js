import mongoose, { Schema } from 'mongoose'

const bookedToursSchema = new Schema({
  destination: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  tourBuddy: {
    type: String,
    required: true,
  }
}, { timestamps: true })


const BookedTours = mongoose.model('bookedTour', bookedToursSchema)

export default BookedTours