const { ObjectID } = require('mongodb');
const db = require('./db');

const collection = db.db('cop').collection('todoItems');

const getTodos = async (req, res) => {
  const result = await collection.find({});

  const todoItems = await result.toArray();

  res.send(todoItems);
};

const getTodo = async (req, res) => {
  const { id } = req.params;
  const query = { _id: new ObjectID(id) };

  const todoItem = await collection.findOne(query);

  res.send(todoItem);
};

const createTodo = async (req, res) => {
  const todoItem = req.body;

  const result = await collection.insertOne(todoItem);

  res.send(result.ops[0]);
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const filter = { _id: new ObjectID(id) };

  const updateQuery = {
    $set: {
      description: req.body.description,
      completed: req.body.completed,
    },
  };

  await collection.updateOne(filter, updateQuery);

  res.send();
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const filter = { _id: new ObjectID(id) };

  await collection.deleteOne(filter);

  res.send();
};

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
