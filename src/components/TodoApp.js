import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
// import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
// import { handleSubmit } from '../../helpers/handleSubmit';

import './styles.css';


const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );
    

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [ todos ]);


    return (
        <div>
            <h1>TodoApp ( { todos.length } )</h1>
            <hr />

           <div className='row'>
               <div className='col-7'>
                    <ul className='list-group list-group-flush'>
                        <TodoList todo={ {
                            todos: todos,
                            dispatch: dispatch,
                        }} />
                    </ul>
               </div>

               <div className='col-5'>
                    <TodoAdd 
                        dispatch={ dispatch }
                    />
               </div>

           </div>

        </div>
    )
}
