const express = require('express')

const { getAllTasks, createOneTask, deleteOneTask, updateOneTask } = require('../controllers/task-controllers')
const { textValidation } = require('../middlewares/task-validation')

const router = express.Router()

router.get('/tasks', getAllTasks)
router.post('/tasks', textValidation, createOneTask)
router.delete('/tasks', deleteOneTask)
router.patch('/tasks', updateOneTask)

module.exports = router