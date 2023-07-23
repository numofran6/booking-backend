import TourBuddy from "../models/TourBuddy.js";
import { catchAsync } from "../utils/helpers.js";

export const createTourBuddy = catchAsync(async (req, res, next) => {
  const newTourBuddy = await TourBuddy.create({
    name: req.body.name,
    status: req.body.status,
    region: req.body.region,
    img: req.body.img,
  })

  res.status(201).json(newTourBuddy)
})

export const updateTourBuddy = catchAsync(async (req, res, next) => {
  const updatedTourBuddy = await TourBuddy.findByIdAndUpdate(req.params.id, req.body, { new: true })

  res.status(200).json(updatedTourBuddy)
})



export const deleteTourBuddy = catchAsync(async (req, res, next) => {
  await TourBuddy.findByIdAndDelete(req.params.id)

  res.status(200).json({
    status: 'Destination Deleted'
  })
})



export const getOneTourBuddy = catchAsync(async (req, res, next) => {
  const tourBuddy = await TourBuddy.findById(req.params.id)

  res.status(200).json(tourBuddy)
})



export const getAllTourBuddies = catchAsync(async (req, res, next) => {
  const { region, ...otherQueries } = req.query

  const allTourBuddies = await TourBuddy.find({ ...otherQueries, region: { $in: new RegExp(region, 'i') } })

  res.status(200).json(allTourBuddies)
})