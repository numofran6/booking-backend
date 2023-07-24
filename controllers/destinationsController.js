import Destination from "../models/Destinations.js";
import Region from "../models/Region.js";
import { catchAsync } from "../utils/helpers.js";

export const createDestination = catchAsync(async (req, res, next) => {
  const placeId = req.params.placeId;

  const newDestination = await Destination.create({
    title: req.body.title,
    desc: req.body.desc,
    price: req.body.price,
    maxPeople: req.body.maxPeople,
    featured: req.body.featured,
    rating: req.body.rating,
    region: req.body.region,
    activity: req.body.activity,
    images: req.body.images
  })

  await Region.findByIdAndUpdate(placeId, { $push: { destinations: newDestination._id } })

  res.status(201).json(newDestination)
})



export const updateDestination = catchAsync(async (req, res, next) => {
  const updatedDestination = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true })

  res.status(200).json(updatedDestination)
})



export const deleteDestination = catchAsync(async (req, res, next) => {
  const placeId = req.params.placeId;
  await Destination.findByIdAndDelete(req.params.id)


  await Region.findByIdAndUpdate(placeId, { $pull: { destinations: req.params.id } })

  res.status(200).json({
    status: 'Destination Deleted'
  })
})



export const getOneDestination = catchAsync(async (req, res, next) => {
  const destination = await Destination.findById(req.params.id)

  res.status(200).json(destination)
})

export const getAllDestinations = catchAsync(async (req, res, next) => {
  const { min, max, region, price, activity, ...otherQueries } = req.query;

  const regions = Array.isArray(region) ? region : [region].filter(Boolean);
  const activities = Array.isArray(activity) ? activity : [activity].filter(Boolean);

  let query = { ...otherQueries, maxPeople: { $gt: min | 1, $lt: max || 9999 } };

  if (regions.length > 0) {
    query.region = { $in: regions.map((r) => new RegExp(r, 'i')) };
  }

  if (activities.length > 0) {
    query.activity = { $in: activities.map((a) => new RegExp(a, 'i')) };
  }

  if (price) {
    const destinationPrice = price.split('-')
    const lowestPrice = destinationPrice[0]
    const highestPrice = ++destinationPrice[1]

    query.price = { $gt: lowestPrice, $lt: highestPrice }
  }

  const allDestinations = await Destination.find(query).limit(req.query.limit);

  res.status(200).json(allDestinations);
});
