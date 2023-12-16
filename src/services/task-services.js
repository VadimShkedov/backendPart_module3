const Task = require('../models/task')

const getTasks = async () => {
  const tasks = await Task.find();

  return tasks;
}

const createTask = async (text) => {
  const newTask = new Task({ text });
  const savedTask = await newTask.save()

  return savedTask;
}

const deleteTask = async (id) => {
  await Task.findByIdAndDelete(id)
}

const updateTask = async (id, isCheck) => {
  await Task.findByIdAndUpdate(id, { isCheck })
}

module.exports = {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
}