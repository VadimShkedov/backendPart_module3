const { validationResult } = require('express-validator');

const validatorResult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json("Bad validation");
  }

  next();
}

module.exports = { validatorResult }