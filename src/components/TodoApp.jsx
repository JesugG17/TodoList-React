import { useTodos } from '../hooks/useTodos';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

export const TodoApp = () => {

    const { todos, 
            handleNewTodo, 
            handleToggleTodo, 
            handleRemoveTodo,
            todosCount,
            pendingTodosCount } = useTodos();

    return ( 
        <>
            <h1>Todo App</h1>
            <h3>Total: { todosCount }, Pendientes:{ pendingTodosCount } </h3>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos } 
                        onRemoveTodo={ handleRemoveTodo }
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={ handleNewTodo }/>
                </div>
            </div>

        </>
    
    )
}
