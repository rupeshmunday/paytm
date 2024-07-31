const HandleErrors = require('./../libraries/error'); // Assuming the class is in middleware/MongooseErrorHandler.js

const handleError = (err, req, res, next) => {
  const errorHandler = new HandleErrors(err);
  const errorResponse = errorHandler.handleError();

  // Log error details for debugging
  console.log("Error Name:", err.name); // Log the error name
  console.log("Error Message:", err.message); // Log the error message
  console.log("Error Stack:", err.stack); // Log the error stack trace

  console.log(errorResponse);

  res.status(400).json(errorResponse);
};

module.exports = handleError;
