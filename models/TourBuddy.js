import mongoose, { Schema } from 'mongoose'

const tourBuddySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'available',
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  }
}, { timestamps: true })


const TourBuddy = mongoose.model('tourbuddy', tourBuddySchema)

export default TourBuddy