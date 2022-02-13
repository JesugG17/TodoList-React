import React from 'react'
import { handleSubmit } from '../helpers/handleSubmit'
import { useForm } from '..//hooks/useForm';

export const TodoAdd = ({ dispatch }) => {

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });
    
    return (
        <>
            <h4>Agregar TODO</h4>
                <hr />

                <form onSubmit={ ( event ) => handleSubmit( event, description, dispatch, reset ) }>

                    <input
                        type='text'
                        name='description'
                        placeholder='Aprender...'
                        autoComplete='off'
                        className='form-control'
                        value={ description }
                        onChange={ handleInputChange }
                    >
                    </input>

                    <button
                        type='submit'
                        className='btn btn-outline-primary mt-1 btn-block button'
                    >
                        Agregar
                    </button>

                </form>
        
        
        </>
    )
}
