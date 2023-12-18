const express = require('express');

const { getAllTasks, createOneTask, deleteTaskById, updateTask, deleteAllTasks } = require('../controllers/task-controllers');
const { textValidation } = require('../middlewares/task-validation');

const router = express.Router();

router.get('/tasks', getAllTasks);
router.post('/tasks', textValidation, createOneTask);
router.delete('/tasks/all', deleteAllTasks)
router.delete('/tasks/one/:id', deleteTaskById);
router.patch('/tasks', textValidation, updateTask);

module.exports = router;