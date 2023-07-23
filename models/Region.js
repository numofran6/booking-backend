import mongoose, { Schema } from 'mongoose'

const regionsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  distance: {
    type: String,
    required: true
  },
  cheapestPrice: {
    type: Number,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  destinations: {
    type: [String]
  },
  featured: {
    type: Boolean,
    default: false
  }
})

const Region = mongoose.model('places', regionsSchema)

export default Region