import User from "../models/Users.js";
import { catchAsync } from "../utils/helpers.js";

export const updateUser = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })

  res.status(200).json(updatedUser)
})

export const deleteUser = catchAsync(async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id)

  res.status(200).json({
    status: 'User Deleted'
  })
})

export const getOneUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id)

  res.status(200).json(user)
})

export const getAllUsers = catchAsync(async (req, res, next) => {
  const allUsers = await User.find()

  res.status(200).json(allUsers)
})