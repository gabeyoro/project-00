const { validationResult } = require("express-validator");

const handleValidationErrors = (req, _res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errors = {};
    validationErrors
      .array()
      .forEach((error) => {
        console.log(error);
        errors[error.param] = error.msg;
      });

    const err = Error("Validation error");
    err.errors = errors;
    err.status = 400;
    err.title = "Validation error";
    next(err);
  }
  next();
};

module.exports = {
  handleValidationErrors,
};
