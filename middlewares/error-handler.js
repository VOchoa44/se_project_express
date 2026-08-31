const errorHandler = (err, req, res, next) => {
  console.log(err);
  const { statusCode = 500, message } = err;
  res.status(err.statusCode).send({
    message: statusCode === 500 ? "An error ocurred on the server" : message,
  });
};

module.exports = errorHandler;
