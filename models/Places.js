import mongoose, { Schema } from 'mongoose'

const PlacesSchema = new Schema({
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
  photos: {
    type: [String],
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

const Places = mongoose.model('places', PlacesSchema)

export default Places