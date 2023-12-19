const {
  getTasksService,
  createTaskService,
  deleteTaskService,
  updateTextTaskService,
  updateCheckboxTaskService,
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
    console.log(id);
    const deletedTask = await deleteTaskService(id);

    res.status(200).json(deletedTask);
  } catch (error) {
    res.status(400).send("Ошибка при удалении задачи");
  }
}

const deleteAllTasks = async (req, res) => {
  try {
    const response = await deleteAllTasksService();

    res.status(200).json(response);
  } catch (error) {
    res.status(400).send("Ошибка при удалении всех задач");
  }
}

const updateTaskText = async (req, res) => {
  try {
    const { id, text } = req.body;
    const updatedTask = await updateTextTaskService(id, text);

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).send("Ошибка при обновлении текста задачи");
  }
}

const updateTaskCheckbox = async (req, res) => {
  try {
    const { id, isCheck } = req.body;
    const updatedTask = await updateCheckboxTaskService(id, isCheck);

    res.status(200).json(updatedTask);
  } catch (error) {
    console.log(error);
    res.status(400).send("Ошибка при обновлении чекбокса задачи");
  }  
}

module.exports = { 
  getAllTasks,
  createOneTask, 
  deleteTaskById, 
  updateTaskText,
  updateTaskCheckbox, 
  deleteAllTasks
}