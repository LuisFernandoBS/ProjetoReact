import React from "react";
import Task from "./Task";

const Tasks = ({tasks,handlerTaskClick,handlerRemoveTaskClick}) => {
    return (
        <>
            {tasks.map((task) => (
                <Task task={task} handlerTaskClick={handlerTaskClick} handlerRemoveTaskClick={handlerRemoveTaskClick}/>
            ))}
        </>
    );
};

export default Tasks;