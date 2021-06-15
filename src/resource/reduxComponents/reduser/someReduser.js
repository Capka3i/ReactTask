import {GENRE, MOVIES} from "../constActive";

const someInitialState = {
    movies: [], genre: []
}

export const someRedusers = (state = someInitialState, action) => {
    switch (action.type)
        {
        case MOVIES:
            return {
                ...state, movies: action.payload
            }
        case GENRE:
            return {
                ...state, genre: action.payload
            }
        default:
            return state

        }
}
