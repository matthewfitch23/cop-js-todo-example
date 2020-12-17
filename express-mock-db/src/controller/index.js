const db = require('../datasource/db');

const getTodos = async (req, res) => {
  const todoItems = await db.getTodos();

  res.send(todoItems);
};

const getTodo = async (req, res) => {
  const { id } = req.params;
  const todoItem = await db.getTodo(id);

  res.send(todoItem);
};

const createTodo = async (req, res) => {
  const todoItem = req.body;

  const id = await db.createTodo(todoItem);

  res.send(`${id}`);
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const todoItem = req.body;

  await db.createTodo(id, todoItem);

  res.send();
};

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
};
