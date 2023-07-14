const errorHandler = (err, req, res, next) => {
  res.send(err)
}

export default errorHandler