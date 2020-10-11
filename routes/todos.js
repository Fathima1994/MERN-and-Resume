const express = require('express');
const router = express.Router();
const { getTodos, addTodo, deleteTodo, updateTodo } = require('../controllers/todosController');

router
    .route('/')
    .get(getTodos)
    .post(addTodo);

router
    .route('/:id')
    .delete(deleteTodo)
    .post(updateTodo);

module.exports = router;
