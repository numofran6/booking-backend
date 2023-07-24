import mongoose, { Schema } from 'mongoose'

const destinationsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  maxPeople: {
    type: Number,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Number,
    default: 5
  },
  activity: {
    type: String,
    required: true,
  },
  images: {
    type: [String]
  }
}, { timestamps: true })


const Destination = mongoose.model('destination', destinationsSchema)

export default Destination