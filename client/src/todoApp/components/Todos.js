import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

function Todos(props) {
    return props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={ todo} markComplete={props.markComplete} deleteTask={props.deleteTask}/>
    ));
  }

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
}
export default Todos;
