import Places from "../models/Places.js";
import { catchAsync } from "../utils/helpers.js";

export const createPlace = catchAsync(async (req, res, next) => {
  const newPlace = await Places.create({
    name: req.body.name,
    type: req.body.type,
    region: req.body.region,
    address: req.body.address,
    distance: req.body.distance,
    cheapestPrice: req.body.cheapestPrice,
    desc: req.body.desc,
    title: req.body.title,
    photos: req.body.photos,
    rating: req.body.rating,
    instructors: req.body.instructors,
    featured: req.body.featured
  })

  res.status(200).json(newPlace)
})



export const updatePlace = catchAsync(async (req, res, next) => {
  const updatedPlace = await Places.findByIdAndUpdate(req.params.id, req.body, { new: true })

  res.status(200).json(updatedPlace)
})



export const deletePlace = catchAsync(async (req, res, next) => {
  await Places.findByIdAndDelete(req.params.id)

  res.status(200).json({
    status: 'Place Deleted'
  })
})



export const getOnePlace = catchAsync(async (req, res, next) => {
  const place = await Places.findById(req.params.id)

  res.status(200).json(place)
})



export const getAllPlaces = catchAsync(async (req, res, next) => {
  const { min, max, ...otherQueries } = req.query

  const allPlaces = await Places.find({ ...otherQueries, cheapestPrice: { $gt: min | 1, $lt: max || 9999 } }).limit(req.query.limit)

  res.status(200).json(allPlaces)
})



export const countByDestination = catchAsync(async (req, res, next) => {
  const destinations = req.query.destinations.split(',');

  const destinationsList = await Promise.all(destinations.map(destination => {
    return Places.countDocuments({ destination })
  }))

  res.status(200).json(destinationsList)
})



export const countByType = catchAsync(async (req, res, next) => {
  const parks = await Places.countDocuments({ type: 'parks' })
  const beaches = await Places.countDocuments({ type: 'beaches' })

  res.status(200).json([{ type: 'Parks', count: parks }, { type: 'Beaches', count: beaches }])
})