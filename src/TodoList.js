import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
    return (
        <ul className="todo-list">
            {todos.map((todo, index) => (
                <TodoItem 
                    key={index} 
                    todo={todo} 
                    deleteTodo={deleteTodo} 
                    completeTodo={completeTodo} 
                />
            ))}
        </ul>
    );
};

export default TodoList;