import React, { useState, useEffect }from 'react';
// import { Route  } from 'react-router-dom';
import Header from './layout/Header';
import Search from './Search';
import Todos from './Todos';
// import axios from 'axios';
import { connect  } from 'react-redux';
import  * as actions from '../todoActions/actions';
// import About from './pages/About';


export function MainTodo(props) {

  useEffect(() => {
    props.fetchTodos();
  }, [])

   const markComplete = (id) => {
    props.markTodoComplete(id);
  }
  const deleteTask = (id) => {
    // confirmAlert({
    //   title: 'Delete Confirmation',
    //   message: 'Are you sure you want to delete.',
    //   buttons: [
    //     {
    //       label: 'Yes',
    //       onClick: () => axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => this.setState({todos : [...this.state.todos.filter(todo => todo.id !== id)] }))
    //     },
    //     {
    //       label: 'No',
    //       onClick: () => alert('Click No')
    //     }
    //   ]
    // });
    props.deleteTodos(id);
  }
 const filterTodo = (value) => {
    // if(value.toLowerCase() !== '') {
    //   if(oldTodos.length !== 0) {
    //     setTodos([...oldTodos.filter(todo => 
    //         todo.title.toLowerCase().includes(value,0)
    //       )]);
    //   }
    //   else {
    //     setOldTodos(todos);
    //     setTodos([...todos.filter(todo => 
    //         todo.title.toLowerCase().includes(value,0)
    //       )]);
    //   }
    // }
    // else {
    //   setTodos(oldTodos);
    // }
    props.filterTodos(value);
  }
  const AddTodo = (title) => {
    const newItem = {
      title,
      completed: false
    }
    props.addTodos(newItem);
  }
    return (
      <React.Fragment>
        <Header AddTodo={AddTodo}/>
          <React.Fragment>
          <Search filterTodo={filterTodo}/>
          <Todos todos={props.todos} markComplete={markComplete} deleteTask={deleteTask} />
          </React.Fragment>
      </React.Fragment>
    );
  }

  const mapStateToProps = state => ({
    todos: state.todo.items,
});

export default connect(mapStateToProps,  actions )(MainTodo);
