const express = require('express');
const { port } = require('./config');
const controller = require('./controller');

const app = express();
app.use(express.json());

app.get('/todo', controller.getTodos);
app.get('/todo/:id', controller.getTodo);
app.post('/todo', controller.createTodo);
app.put('/todo/:id', controller.updateTodo);
app.delete('/todo/:id', controller.deleteTodo);

app.listen(port, () => {
  console.log(`Todo app listening at http://localhost:${port}`);
});
