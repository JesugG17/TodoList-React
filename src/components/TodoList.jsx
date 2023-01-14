import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [], onRemoveTodo, onToggleTodo }) => {

  // console.log( todos );
  return (
      <ul className="list-group">
        {
          todos.map( todo => {
            return <TodoItem
                      key={ todo.id }
                      todo={ todo }
                      onRemoveTodo={ id => onRemoveTodo(id) }
                      onToggleTodo={ onToggleTodo }
                    />
          })
        }
      </ul>
    )
  }
  