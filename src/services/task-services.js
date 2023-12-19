const Task = require('../models/task');

const getTasksService = async () => {
  const tasks = await Task.find();

  return tasks;
}

const createTaskService = async (text) => {
  const newTask = new Task({ text });
  const savedTask = await newTask.save();

  return savedTask;
}

const deleteTaskService = async (id) => {
  const deletedTask = await Task.findByIdAndDelete(id);

  return deletedTask;
}

const deleteAllTasksService = async () => {
  const response = await Task.deleteMany()

  return response;
}

const updateTextTaskService = async (id, value) => {
  const updatedTask = await Task.findByIdAndUpdate(id, { text: value });

  return updatedTask; 
}

const updateCheckboxTaskService = async (id, value) => {
  const updatedTask = await Task.findByIdAndUpdate(id, { isCheck: value });

  return updatedTask; 
}

module.exports = {
  getTasksService,
  createTaskService,
  deleteTaskService,
  updateTextTaskService,
  updateCheckboxTaskService,
  deleteAllTasksService
}