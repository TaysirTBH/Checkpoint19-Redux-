import React from 'react';
import TodoTask from './Task';

const ListTask = ({todoList}) => {
    return (
        <div className="app_todoContainer">
            {todoList && todoList.map(todo=><TodoTask key={todo.id} todo={todo}/> )}
        </div>
    )
}

export default ListTask;