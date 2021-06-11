import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';

const initialState = {
    todoList: [
        {id: uuidv4(), task: '15min of YOGA' , done: false},
        {id: uuidv4(), task: 'finish the Redux Checkpoint' , done: false},
        {id: uuidv4(), task: 'Start the API course' , done: false},
        {id: uuidv4(), task: 'Watch your TV show' , done: true},
    ]

}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload)
        },
        setCheck: (state,action) => {
            const index = state.todoList.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state.todoList[index].done=action.payload.done;
        },

        deleteTodo: (state, action) => {
          return {todoList: state.todoList.filter(todo => todo.id !== action.payload.id)};
		    },

        updateTodo: (state, action) => {
        return {todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              task: action.payload.task,
            };
          }
          return todo;
        })};
        },
    }
});

export const { addTodo, setCheck , deleteTodo, updateTodo } = todoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer