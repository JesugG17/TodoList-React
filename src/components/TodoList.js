import React from 'react'
import { TodoListItem } from './TodoListItem';


export const TodoList = ({ todo }) => {

    const { todos, dispatch } = todo;
    
    return (
        <ul className='list-group list-group-flush'>
            {
                //TodoListItem
                todos.map( (todo, i) => {
                    return <TodoListItem key={ todo.id } todos={{
                        todo: todo,
                        dispatch: dispatch,
                        index: i,
                    }}/>
                })
            }
        </ul>
    )
};
