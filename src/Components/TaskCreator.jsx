import React, { useState } from 'react';
import Button from './Button';
import '../Styles/TaskCreator.css';

function TaskCreator({ onAdd }) {
    const [inputValue, setInputValue] = useState('');

    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    function handleButtonClick() {
        onAdd(inputValue);
        setInputValue("");
    }

    return (
        <div className="task-creator--container">
            <input 
                className="task-creator--input"
                type="text" 
                value={inputValue}
                onChange={handleInputChange} />
            <Button onClick={handleButtonClick}>
                Adicionar
            </Button>
        </div>
    )
}

export default TaskCreator;