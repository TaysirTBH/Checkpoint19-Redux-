import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {setCheck,deleteTodo,updateTodo} from '../features/todoSlice';

const TodoTask = ({todo}) => {
    const [editable, setEditable] = useState(false)
    const [task, setTask] = useState(todo.task)
    const dispatch = useDispatch();
    const handleCheck = () => {
        dispatch(setCheck({id: todo.id, done:!todo.done}));
    };

    const handleDelete = () => {
        dispatch(deleteTodo({id:todo.id}));
    }

    const handleEdit =() => {
        dispatch(updateTodo({...todo,task: task}))
        if(editable) {
            setTask(todo.task);   
        }
        setEditable(!editable);
    }
    
    return (
        <div className = "card-wrapper">
            <div className = "card-top" ></div>
            <div className = "task-holder">
                    <div>
                        {editable ?
                            <input type="text" className="edit-control"
                            value={task}
                            onChange={(e) => {setTask(e.target.value);}}/>
                            :<p style={{textDecoration: todo.done?'line-through' :'none' }}>{todo.task}</p>} 
                    </div>

                    <div  className="icon" style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                        <button className="btn-edit"
                            onClick={handleCheck}>
                            {todo.done?<i class="fas fa-check-circle" style = {{"color" : "#097969"}}></i>
                            :<i class="far fa-check-circle" style = {{"color" : "#98c498" , "opacity":"2px"}}></i>}
                        </button> {' '}
                        <button className="btn-edit"
                            onClick={()=>handleEdit()}>
                            {editable?<i className="fas fa-pen-square" style = {{"color" : "#EC5800"}}></i>
                            :<i className = "far fa-edit" style={{"color" : "#FF4433"}}></i>}
                        </button>  {' '}
                        <i className="fas fa-trash-alt" style = {{"color" : "#CC0000"}} onClick = {handleDelete}></i>
                    </div>
            </div>
        </div>
    )
}

export default TodoTask;


