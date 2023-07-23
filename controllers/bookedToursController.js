import BookedTours from "../models/BookedTours.js"
import { catchAsync } from "../utils/helpers.js"

export const createBookedTour = catchAsync(async (req, res, next) => {
  const newBookedTour = await BookedTours.create({
    destination: req.body.destination,
    region: req.body.region,
    date: req.body.date,
    tourBuddy: req.body.tourBuddy,
  })

  res.status(201).json(newBookedTour)
})



export const updateBookedTour = catchAsync(async (req, res, next) => {
  const updatedBookedTour = await BookedTours.findByIdAndUpdate(req.params.id, req.body, { new: true })

  res.status(200).json(updatedBookedTour)
})



export const deleteBookedTour = catchAsync(async (req, res, next) => {
  await BookedTours.findByIdAndDelete(req.params.id)

  res.status(200).json({
    status: 'Destination Deleted'
  })
})



export const getOneBookedTour = catchAsync(async (req, res, next) => {
  const bookedTour = await BookedTours.findById(req.params.id)

  res.status(200).json(bookedTour)
})



export const getAllBookedTours = catchAsync(async (req, res, next) => {
  const allBookedTours = await BookedTours.find()

  res.status(200).json(allBookedTours)
})
