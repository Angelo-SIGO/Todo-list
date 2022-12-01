// Libs
import React from 'react';
// Components
import TaskCreator from './TaskCreator';


function Header({ title }) {
    return (
        <section className="list__header">
            <h1>{title}</h1>
        </section>
    )
}

export default Header;