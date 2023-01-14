import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {

  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  });
  
  const handleSubmit = ( event ) => {
    event.preventDefault();
    onNewTodo({
      id: new Date().getTime(),
      description,
      done: false
    });

    onResetForm();
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input 
        type="text" 
        placeholder='Tareas por hacer...'
        className='form-control'
        name="description"
        value={ description }
        onChange={ onInputChange }
      />
      <button 
        type='submit'
        className='btn btn-outline-primary mt-2'
        onClick={ handleSubmit }
      >
        Agregar
      </button>
    </form>
    )
}
  