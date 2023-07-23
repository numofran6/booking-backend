import Region from "../models/Region.js";
import { catchAsync } from "../utils/helpers.js";

export const createRegion = catchAsync(async (req, res, next) => {
  const newPlace = await Region.create({
    name: req.body.name,
    type: req.body.type,
    region: req.body.region,
    address: req.body.address,
    distance: req.body.distance,
    cheapestPrice: req.body.cheapestPrice,
    desc: req.body.desc,
    title: req.body.title,
    image: req.body.image,
    rating: req.body.rating,
    instructors: req.body.instructors,
    featured: req.body.featured
  })

  res.status(200).json(newPlace)
})



export const updateRegion = catchAsync(async (req, res, next) => {
  const updatedPlace = await Region.findByIdAndUpdate(req.params.id, req.body, { new: true })

  res.status(200).json(updatedPlace)
})



export const deleteRegion = catchAsync(async (req, res, next) => {
  await Region.findByIdAndDelete(req.params.id)

  res.status(200).json({
    status: 'Region Deleted'
  })
})



export const getOneRegion = catchAsync(async (req, res, next) => {
  const place = await Region.findById(req.params.id)

  res.status(200).json(place)
})



export const getAllRegions = catchAsync(async (req, res, next) => {
  const { min, max, ...otherQueries } = req.query

  const allPlaces = await Region.find({ ...otherQueries, cheapestPrice: { $gt: min | 1, $lt: max || 9999 } }).limit(req.query.limit)

  res.status(200).json(allPlaces)
})



export const countByDestination = catchAsync(async (req, res, next) => {
  const destinations = req.query.destinations.split(',');

  const destinationsList = await Promise.all(destinations.map(destination => {
    return Region.countDocuments({ destination })
  }))

  res.status(200).json(destinationsList)
})



export const countByType = catchAsync(async (req, res, next) => {
  const parks = await Region.countDocuments({ type: 'parks' })
  const beaches = await Region.countDocuments({ type: 'beaches' })

  res.status(200).json([{ type: 'Parks', count: parks }, { type: 'Beaches', count: beaches }])
})