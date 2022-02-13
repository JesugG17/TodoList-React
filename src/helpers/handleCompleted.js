export const handleCompleted = ( todoId, dispatch ) => {
    // console.log( target )
    dispatch({
        type: 'toggle',
        payload: todoId
    })
   
};
