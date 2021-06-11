import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todoSlice'
import {v4 as uuidv4} from 'uuid';

const AddTask = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch();
    const addTask = () => {
        dispatch(
                    addTodo({
                        id:uuidv4(),
                        task: input,
                        done:false
                    })
                )
        setInput('');
    }
    return (
        <div className="add_input">
            <input
				type='text'
                className='todo-input'
				placeholder='Add todo...'
				value={input}
				onChange={e=>setInput(e.target.value)}
			></input>
            <button type='submit' onClick={addTask} className="add-btn">+</button>
            
        </div>
    )
}

export default AddTask;
