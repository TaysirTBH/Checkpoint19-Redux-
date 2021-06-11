import ListTask from './components/ListTask';
import AddTask from './components/AddTask';
import {useSelector} from 'react-redux';
import {selectTodoList} from './features/todoSlice';
import React,{ useState } from 'react';
import './App.css';


function App() {
  const todoList = useSelector(selectTodoList)
  
  const [filter, setFilter] = useState('All');

  const filterTodo = (listTodo, filter) => {
    switch (filter) {
      case 'All':
        return listTodo;
      case true:
        return listTodo.filter((elm) => elm.done);
      case false:
        return listTodo.filter((elm) => !elm.done);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> TODO APP </h1>
      </header>
      <div className="app_container">
        <div className="container-head">
          <div style={{"display": "flex", "flexDirection":"row"}}>
            <button className="btn-filter" style={{"background-color": "#702963"}}  onClick={() => setFilter("All")}>
                All
            </button> 
            <button className="btn-filter" style={{"background-color": "#097969"}} onClick={() => setFilter(true)}>
                <i className="fas fa-tasks" style={{"marginRight":5}}></i>
                Completed
            </button>
            <button className="btn-filter" style={{"background-color": "#AA4A44"}} onClick={() => setFilter(false)}>
                <i class="fas fa-list-ul" style={{"marginRight":5}}></i> 
                Uncomplet
            </button>
          </div> 

          <AddTask/>
        </div>
        <ListTask todoList={filterTodo(todoList, filter)}/>
      </div>
    </div>
  );
}

export default App;
