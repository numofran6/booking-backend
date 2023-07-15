import User from "../models/Users.js";
import { AppError } from "../utils/AppError.js";
import { catchAsync } from "../utils/helpers.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword
  })

  res.status(201).json({ status: 'User Created' })
})

export const login = catchAsync(async (req, res, next) => {
  const { email } = req.body

  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
    return next(new AppError('Invalid username or password', 400))
  }

  const { password, isAdmin, ...userInfo } = user._doc

  const token = jwt.sign({ id: userInfo._id, isAdmin }, process.env.JWT_SECRET, { expiresIn: `${process.env.JWT_EXPIRY}` })

  res
    .cookie('access_token', token, { httpOnly: true })
    .status(200)
    .json(userInfo)
})