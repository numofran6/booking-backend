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