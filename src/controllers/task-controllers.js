const {
  getTasksService,
  createTaskService,
  deleteTaskService,
  updateTaskService,
  deleteAllTasksService
} = require('../services/task-services');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await getTasksService();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).send("Ошибка в получении задач");
  }
}

const createOneTask = async (req, res) => {
  try {
    const { text } = req.body;
    const task = await createTaskService(text);

    res.status(200).send(task);
  } catch (error) {
    res.status(400).send("Ошибка при создании задач");
  }
}

const deleteTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await deleteTaskService(id);

    res.status(200).json(deletedTask)
  } catch (error) {
    res.status(400).send("Ошибка при удалении задачи");
  }
}

const deleteAllTasks = async (req, res) => {
  try {
    const response = await deleteAllTasksService();

    res.status(200).json(response)
  } catch (error) {
    res.status(400).send("Ошибка при удалении всех задач")
  }
}

const updateTask = async (req, res) => {
  try {
    const { id, ...body } = req.body;
    const updatedTask = await updateTaskService(id, body);

    res.status(200).json(updatedTask);
  } catch (error) {
    console.log(error);
    res.status(400).send("Ошибка при обновлении задачи");
  }
}

module.exports = { 
  getAllTasks,
  createOneTask, 
  deleteTaskById, 
  updateTask, 
  deleteAllTasks 
}