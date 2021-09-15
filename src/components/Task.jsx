import React from 'react';
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
            <button className="remove-task-button" onClick={()=>handlerRemoveTaskClick(task.id)}>X</button>
        </div>
    </div>;
}
 
export default Task;