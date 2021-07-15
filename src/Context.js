import React, { useReducer } from 'react'
import reducer from './Reducer';
const initialState = {watchList:[]}
const MovieContext = React.createContext(initialState);
function MovieProvider(props) {
    const [state,dispatch] = useReducer(reducer,initialState)
    return (
        <MovieContext.Provider value={{ state, dispatch }}>
            {props.children}
        </MovieContext.Provider>
    );
}
export { MovieContext, MovieProvider };