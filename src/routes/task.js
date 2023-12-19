const express = require('express');

const { 
  getAllTasks,
  createOneTask, 
  deleteTaskById, 
  updateTaskText,
  updateTaskCheckbox,
  deleteAllTasks
} = require('../controllers/task-controllers');
const { textValidation, checkboxValidation } = require('../middlewares/task-validation');

const router = express.Router();

router.get('/tasks', getAllTasks);
router.post('/tasks', textValidation, createOneTask);
router.delete('/tasks', deleteAllTasks);
router.delete('/tasks/:id', deleteTaskById);
router.patch('/tasks/text', textValidation, updateTaskText);
router.patch('/tasks/checkbox', checkboxValidation, updateTaskCheckbox);

module.exports = router;