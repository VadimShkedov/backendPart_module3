const { check } = require('express-validator')
const { validatorResult } = require('./validation-result')

const textValidation = [
    check('text')
        .isString()
        .trim()
        .notEmpty(),
    validatorResult
]

module.exports = { textValidation }