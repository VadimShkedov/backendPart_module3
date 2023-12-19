const { check } = require('express-validator');
const { validatorResult } = require('./validation-result');

const textValidation = [
  check('text')
    .isString()
    .trim()
    .notEmpty(),
  validatorResult
];

const checkboxValidation = [
  check('isCheck')
    .isBoolean()
    .notEmpty(),
  validatorResult
];

module.exports = { textValidation, checkboxValidation }