// Libs
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
// Components
import Button from './Button';
// Style
import '../Styles/TaskDetails.css';

function TaskDetails() {
    const params = useParams();
    const history = useHistory();

    function handleButtonClick() {
        history.goBack();
    }

    return (
        <>
            <section className="details__container">
                <h2 className='details__title'>{params.title}</h2>
                <p className='details__body'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, qui, 
                    fugit repudiandae velit ea magni ut, alias quaerat molestias ratione 
                    iure. Excepturi id consequatur illo delectus impedit error ullam! Quis!
                </p>
            </section>
            <Button onClick={handleButtonClick}>Voltar</Button>
        </>
    )
}

export default TaskDetails;