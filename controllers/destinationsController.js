import Destination from "../models/Destinations.js";
import Places from "../models/Region.js";
import { catchAsync } from "../utils/helpers.js";

export const createDestination = catchAsync(async (req, res, next) => {
  const placeId = req.params.placeId;

  const newDestination = await Destination.create({
    title: req.body.title,
    desc: req.body.desc,
    price: req.body.price,
    maxPeople: req.body.maxPeople
  })

  await Places.findByIdAndUpdate(placeId, { $push: { destinations: newDestination._id } })

  res.status(201).json(newDestination)
})



export const updateDestination = catchAsync(async (req, res, next) => {
  const updatedDestination = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true })

  res.status(200).json(updatedDestination)
})



export const deleteDestination = catchAsync(async (req, res, next) => {
  const placeId = req.params.placeId;
  await Destination.findByIdAndDelete(req.params.id)


  await Places.findByIdAndUpdate(placeId, { $pull: { destinations: req.params.id } })

  res.status(200).json({
    status: 'Destination Deleted'
  })
})



export const getOneDestination = catchAsync(async (req, res, next) => {
  const destination = await Destination.findById(req.params.id)

  res.status(200).json(destination)
})



export const getAllDestinations = catchAsync(async (req, res, next) => {
  const allDestinations = await Destination.find()

  res.status(200).json(allDestinations)
})