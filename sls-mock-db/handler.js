'use strict';

const db = require('./datasource/db');

const getAll = async (event, context) => {
  const result = await db.getTodos();

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin" : "*"
    },
    body: JSON.stringify(result),
  };

  context.succeed(response);
};

const get = async (event, context) => {
  const { id } = event.pathParameters;
  const result = await db.getTodo(id);

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin" : "*"
    },
    body: JSON.stringify(result),
  };

  context.succeed(response);
};

const create = (event, context) => {
  const todo = JSON.parse(event.body);
  const result = await db.createTodo(todo);

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin" : "*"
    },
    body: JSON.stringify(result),
  };

  context.succeed(response);
};

const update = (event, context) => {
  const { id } = event.pathParameters;
  const todo = JSON.parse(event.body);
  const result = await db.createTodo(id, todo);

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin" : "*"
    },
    body: JSON.stringify(result),
  };

  context.succeed(response);
};

module.exports = {
  getAll,
  get,
  create,
  update,
};
