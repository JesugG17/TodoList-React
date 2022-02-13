import React from 'react'
import { handleCompleted } from '../helpers/handleCompleted';
import { handleDelete} from '../helpers/handleDelete';


export const TodoListItem = ({ todos }) => {

    const { todo, dispatch, index } = todos;
    
    return (
        <li
           key={ todo.id }
           className='list-group-item'
        >
            <p 
               className={ `${ todo.done && 'completed' }` }
               onClick={ () => handleCompleted( todo.id, dispatch ) }
            >
               { index + 1}. { todo.desc }
            </p>
            <button 
               className='btn btn-danger'
               onClick={ () => { handleDelete( todo.id, dispatch ) } }
            >
               Borrar
            </button>
        </li>
    )
}
