import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';
import '../Styles/Task.css';

function Task({ id, title, completed, onClick, onDelete }) {

    const history = useHistory();

    function handleTaskDetails() {
        history.push(`/${title}`)
    }

    return (
        <div className="task__container" style={completed ? {borderLeft: '6px solid #1dddff'} : {}}> 
            <div className="task__title" onClick={() => onClick(id)}>{title}</div>
            <div className="task__menu">
                <button className="button--icon" onClick={handleTaskDetails}>
                    <CgInfo />
                </button>
                <button className="button--icon" onClick={() => onDelete(id)}>
                    <CgClose />
                </button>
            </div>
        </div>
    )
}

export default Task;