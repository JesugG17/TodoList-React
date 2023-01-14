import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const useTodos = () => {
    
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    
    const handleNewTodo = ( todo ) => {
        const { description } = todo;
       
        if ( description.length <= 1 ) {
            return;
        }

        const action = {
            type: 'add todo',
            payload: todo
        };
        dispatch( action );
    }

    const handleRemoveTodo = ( id ) => {
        const action = {
            type: 'remove todo',
            payload: id
        };
        dispatch( action );
    }

    const handleToggleTodo = ( id ) => {
        const action = {
            type: 'toggle todo',
            payload: id
        };
        dispatch( action );
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);



    const pendingTodosCount = todos.filter( todo => !todo.done ).length;
    const todosCount = todos.length;

    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo
    }
}


