import { useEffect, useRef, useState } from "react";

export const useFetch = ( url ) => {

    const isMounted = useRef( true );
    const [ state, setState] = useState({})

    useEffect( () => {
        return () => {
            isMounted.current = false;
        }
    },[]);

    useEffect( () => {

        setState({ data: null, loading: true, error:null })
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
               
                    
                if ( isMounted.current ) {                       
                    setState({
                        loading: false,
                        error: null,
                        data: data,
                    });
                };

                
            })
    },[ url ]);
    // console.log( state );
    return state;
};
