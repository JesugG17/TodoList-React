
/*
 Cuando no estamos seguros de implementar algo en el reducer
 es recomendable tirar un error, ya que si retornamos el state
 puede dar la impresion de que el reducer si esta funcionando
 cuando no es asi
*/
export const todoReducer = ( state = [], action = {} ) => {

    switch ( action.type ) {
        case 'add todo':
            return [ ...state, action.payload ];
        case 'remove todo':
            return state.filter( todo => todo.id !== action.payload );
        case 'toggle todo':
            return state.map( todo => {
                if (action.payload === todo.id) {
                    // todo.done = !todo.done
                    // return todo; MI FORMA
                    return { // FORMA DE FERNANDO
                        ...todo,
                        done: !todo.done
                    }
                } 
                return todo;
            });
        default:
            return state;
    };

}