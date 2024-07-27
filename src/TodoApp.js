import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(storedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo) => {
        setTodos([...todos, { text: todo, completed: false }]);
    };

    const deleteTodo = (text) => {
        setTodos(todos.map(todo => {
            if (todo.text === text){
                return {...todo, fall:true };                           // Set fall to true for the deleted todo
            }
            return todo;
        }));
        
        setTimeout(() => {
            setTodos(todos.filter(todo => todo.text !== text));         // Remove the todo after the fall transition
        }, 300);       
    };

    const completeTodo = (text) => {
        setTodos(todos.map(todo => 
            todo.text === text ? { ...todo, completed: true } : todo
        ));
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'uncompleted') return !todo.completed;
        return true;
    });

    return (
        <div className="content">
            <header>
                <h1>Damijan's Todo List</h1>
            </header>
            
            <div className='input-field'>
                <TodoForm addTodo={addTodo} />
                
                <div className='select'>
                    <select onChange={(e) => setFilter(e.target.value)} className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>    
                
                <button onClick={() => setTodos([])} className="empty-button">Delete All 
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>

            <TodoList 
                todos={filteredTodos} 
                deleteTodo={deleteTodo} 
                completeTodo={completeTodo} 
            />
        </div>
    );
};

export default TodoApp;