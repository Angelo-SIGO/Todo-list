// Libs
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import axios from 'axios';
// Components
import TaskList from './TaskList';
import Header from './Header';
// Style
import '../Styles/App.css';
import TaskDetails from './TaskDetails';
import TaskCreator from './TaskCreator';

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function fetchTasks() {
            const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
            setTasks(data);
        }

        fetchTasks();
    }, []);

    function handleTaskCreation(title) {
        const newTasks = 
        [
            ...tasks, 
            {
                id: uuid(),
                title: title,
                completed: false
            }
        ]

        setTasks(newTasks);
    }

    function handleTaskRemove(id) {
        const _tasks = tasks.filter(task => task.id !== id);
        setTasks(_tasks);
    }

    function handleTaskStatus(id) {
        const _tasks = tasks.map(task => {
            return task.id === id ? {...task, completed: !task.completed} : task;
        });

        setTasks(_tasks);
    }

    return (
        <Router>
            <div className="list__container">
                <Header title="Minhas tarefas" />
                <Route path='/' exact render={() => (
                    <>
                        <TaskCreator onAdd={handleTaskCreation} />
                        <TaskList tasks={tasks} onClick={handleTaskStatus} onDelete={handleTaskRemove} />
                    </>
                )}/>
                <Route path='/:title' exact component={TaskDetails} />
            </div>
        </Router>
    )
}

export default App;