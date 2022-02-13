export const handleSubmit = ( event, description, dispatch, reset ) => {
    event.preventDefault();
    // console.log( dispatch )
    if ( description.trim().length <= 1 ) {
        alert('No deje el campo vacio');
        return;
    }


    const newTodo = {
        id: new Date().getTime(),
        desc: description,
        done: false
    };

    const action = {
        type: 'add',
        payload: newTodo
    };

    dispatch( action );
    reset();

}