import React from 'react';
import Task from './Task';

function TaskList({ tasks, onClick, onDelete }) {
    return (
        <>
            {tasks.map(task => 
                <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    completed={task.completed}
                    onClick={onClick}
                    onDelete={onDelete} /> 
            )}
        </>
    )
}

export default TaskList;