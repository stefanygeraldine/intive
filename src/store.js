import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state, action) => {
    if (action.type === 'GENERAR_SALUDO') {
        return {
            ...state,
            message: action.message
        }
    }
    if (action.type === 'UPDATE_VALIDATION') {
        return {
            ...state,
            validation: action.validation
        }
    }
    if (action.type === 'UPDATE_PEOPLE') {
        return {
            ...state,
            people: state.people.concat(action.people)
        }
    }
    if (action.type === 'GET_COUNTRIES') {
        return {
            ...state,
            countries: action.countries
        }
    }
    return state;
}

export default createStore(reducer, { message: '', validation: {}, people: [], countries: [] }, applyMiddleware(thunk));