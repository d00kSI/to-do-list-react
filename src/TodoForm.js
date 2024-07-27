import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

const TodoForm = ({ addTodo }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            addTodo(input);
            setInput('');
        } else {
            setInput('No input!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="todo-input" 
                placeholder="Task description" 
                value={input}
                onChange={(e) => setInput(e.target.value)} 
            />
            <button className="todo-button" type="submit">
                <FontAwesomeIcon icon={faSquarePlus} />
            </button>
        </form>
    );
};

export default TodoForm;