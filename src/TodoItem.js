import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ todo, deleteTodo, completeTodo }) => {
    return (
        <div className={`todo ${todo.fall ? 'fall' : ''}`}>
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                {todo.text}
            </li>
            <button className="complete-btn" onClick={() => completeTodo(todo.text)}>
                <FontAwesomeIcon icon={faCheck} />
            </button>
            <button className="trash-btn" onClick={() => deleteTodo(todo.text)}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
};
export default TodoItem;