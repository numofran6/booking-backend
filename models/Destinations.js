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
  }
}, { timestamps: true })


const Destination = mongoose.model('destination', destinationsSchema)

export default Destination