import React from 'react';
import './App.css';
import TodoList from './todo/TodoList';
import Context from './context';

function App() {
  const [todos, setTodos] = React.useState(
    [
      {id:1, completed: true, title:'Bread'},
      {id:2, completed: false, title:'Milk'},
      {id:3, completed: false, title:'Water'}
    ]
  )
  
  function toggleTodo(id){
    setTodos(todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }))
  }

  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className="wrapper">
        <h1>React Tutorial</h1>
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <p>No todos</p>}
      </div>
      </Context.Provider>
  );
}

export default App;
