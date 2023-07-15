import { AppError } from "./AppError.js";
import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_tokey;

  if (!token) {
    return next(new AppError('Not authenticated', 401))
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(new AppError('Invalid token', 403))

    req.user = user
    next()
  })
}

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next()
    } else {
      return next(new AppError('Invalid token', 403));
    }
  })
}

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next()
    } else {
      return next(new AppError('Invalid token', 403));
    }
  })
}