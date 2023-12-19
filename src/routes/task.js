const express = require('express');

const { 
  getAllTasks,
  createOneTask, 
  deleteTaskById, 
  updateTaskText,
  updateTaskCheckbox,
  deleteAllTasks
} = require('../controllers/task-controllers');
const { textValidation } = require('../middlewares/task-validation');

const router = express.Router();

router.get('/tasks', getAllTasks);
router.post('/tasks', textValidation, createOneTask);
router.delete('/tasks/all', deleteAllTasks);
router.delete('/tasks/one/:id', deleteTaskById);
router.patch('/tasks/text', textValidation, updateTaskText);
router.patch('/tasks/checkbox', updateTaskCheckbox);

module.exports = router;