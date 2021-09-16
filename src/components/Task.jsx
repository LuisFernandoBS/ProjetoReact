import React from 'react';
import {AiFillDelete} from 'react-icons/ai'
import {TiInfo} from 'react-icons/ti'
import './Task.css';

const Task = ({task,handlerTaskClick,handlerRemoveTaskClick}) => {
    return <div 
    className="task-container"
    style={task.completed ? {borderLeft: "6px solid chartreuse"}:{}}
    >
        <div className="task-title" onClick={()=>handlerTaskClick(task.id)}>
            {task.title}
        </div>
        <div className="button-container">
            <button className="info-task-button" >
                <TiInfo/>
            </button>
            <button className="remove-task-button" onClick={()=>handlerRemoveTaskClick(task.id)}>
                <AiFillDelete/>
            </button>
        </div>
    </div>;
}
 
export default Task;