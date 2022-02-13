export const handleDelete = ( todoId, dispatch ) => {
    const action = {
        type: 'delete',
        payload: todoId
    }
    dispatch( action );
};