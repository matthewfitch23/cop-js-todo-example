const data = require('./data');

const sleep = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

const getTodos = async () => {
  const result = data;

  await sleep(10);

  return result;
};

const getTodo = async (id) => {
  const result = data.find((x) => x.id === Number(id));

  await sleep(10);

  return result;
};

const createTodo = async () => {
  await sleep(20);

  return 1;
};

const updateTodo = async () => {
  await sleep(20);
};

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
};
