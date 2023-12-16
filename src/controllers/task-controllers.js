const { getTasks, createTask, deleteTask, updateTask } = require('../services/task-services')

const getAllTasks = async (req, res) => {
  try {
    const tasks = await getTasks()
    res.status(200).json(tasks)

  } catch (error) {
    res.status(400).send("Ошибка в получении задач")
  }
}

const createOneTask = async (req, res) => {
  try {
    const { text } = req.body
    const task = await createTask(text)
    res.status(200).send(task)

  } catch (error) {
    res.status(400).send("Ошибка при создании задач")
  }
}

const deleteOneTask = async (req, res) => {
  try {
    const { id } = req.body;
    await deleteTask(id);

    res.sendStatus(200);
    
  } catch (error) {
    res.status(400).send("Ошибка при удалении задачи")
  }
}

const updateOneTask = async (req, res) => {
  try {
    const { id, isCheck } = req.body;
    await updateTask(id, isCheck);

    res.sendStatus(200);

  } catch (error) {
    res.status(400).send("Ошибка при обновлении задачи")
  }
}

module.exports = { getAllTasks, createOneTask, deleteOneTask, updateOneTask }