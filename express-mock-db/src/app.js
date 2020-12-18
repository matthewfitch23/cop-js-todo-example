const express = require('express');
const controller = require('./controller');

const app = express();
app.use(express.json());

app.get('/todo', controller.getTodos);
app.get('/todo/:id', controller.getTodo);
app.post('/todo', controller.createTodo);
app.put('/todo/:id', controller.updateTodo);

app.listen(3000, () => {
  console.log(`Todo app listening at http://localhost:3000`);
});
