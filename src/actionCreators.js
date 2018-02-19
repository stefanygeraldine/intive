import store from './store';
const VARS_FORM = { name: '', country: '', age: '' }
const ERROR_VARS_FORM = { nameError: '', countryError: '', ageError: '' }
var ERRORS = {
    ...ERROR_VARS_FORM
};
const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

//******************************************************************************
//******************FUNCIONES AUXILIARES****************************************
//******************************************************************************
let validateFunction = (inputValue) => {
    let isError = false;
    ERRORS = {
        ...ERROR_VARS_FORM
    };

    if (inputValue.name === '') {
        isError = true;
        ERRORS.nameError = "Ingresa tu nombre";
    }
    if (inputValue.country === '' || inputValue.country.length === null) {
        isError = true;
        ERRORS.countryError = "Selecciona un país";
    }
    if (inputValue.age === '') {
        isError = true;
        ERRORS.ageError = "Selecciona tu fecha de nacimiento";
    }

    return isError;
}

let messageFunction = (date) => {

    let hoy = new Date();
    let birthday = new Date(`${date.age.split('-')[0]}/ ${date.age.split('-')[1]} / ${date.age.split('-')[2]}`);
    let day = birthday.getDate();
    let month = MONTHS[birthday.getMonth()];
    let age = hoy.getFullYear() - birthday.getFullYear();
    let message = `Hola ${date.name} de ${date.country}. El día ${day} de ${month} tendrás ${age} años`;

    return message;
}

//******************************************************************************
//******************ACTIONS*****************************************************
//******************************************************************************

const getCountries = () => {
    return async dispatch => {
        let res = await fetch('https://restcountries.eu/rest/v2/all');
        let countries = await res.json();
        dispatch({
            type: 'GET_COUNTRIES',
            countries: countries
        })
    }
}

const loadMessage = () => {
    const MESSAGE = "Bienvenido, por favor introdue tus datos";
    return {
        type: 'GENERAR_SALUDO',
        message: MESSAGE
    };
}

const listMessage = (item) => {
    let message = messageFunction(item);
    store.dispatch({
        type: 'GENERAR_SALUDO',
        message: message
    });

}

const initializateValidation = () => {
    const VALIDATION = {
        change: ONCHANGE,
        click: ONCLICK,
        ...VARS_FORM,
        ...ERROR_VARS_FORM
    };
    return {
        type: 'UPDATE_VALIDATION',
        validation: VALIDATION
    };
}


const ONCHANGE = (event, validation) => {
    console.log(event.target)
    let item_name = event.target.name;
    let item_value = event.target.value;
    let item = {
        [item_name]: item_value
    };

    let validateNewValue = {...validation, ...item };

    store.dispatch({
        type: 'UPDATE_VALIDATION',
        validation: validateNewValue
    });
}
const ONCLICK = (itemValue) => {
    let item = {
        'country': itemValue
    };

    let validateNewValue = {...store.getState().validation, ...item };

    store.dispatch({
        type: 'UPDATE_VALIDATION',
        validation: validateNewValue
    });
}


const updateMessage = (validation) => {
    return dispatch => {

        if (!validateFunction(validation)) {

            let message = messageFunction(validation);
            dispatch({
                type: 'GENERAR_SALUDO',
                message: message
            })

            let item = [{
                'name': validation.name,
                'country': validation.country,
                'birthday': `${validation.age.split('-')[2]}/ ${validation.age.split('-')[1]} / ${validation.age.split('-')[0]}`,
                'age': validation.age,
            }];

            dispatch({
                    type: 'UPDATE_PEOPLE',
                    people: item
                })
                //CLEAR LABELS
            let labelMessage = {
                change: ONCHANGE,
                click: ONCLICK,
                ...VARS_FORM,
                ...ERROR_VARS_FORM
            };

            dispatch({
                type: 'UPDATE_VALIDATION',
                validation: labelMessage
            })


        } else {

            const VALIDATION = {
                ...validation,
                ...ERRORS
            };

            dispatch({
                type: 'UPDATE_VALIDATION',
                validation: VALIDATION
            })
        }
    }
}

export { getCountries, loadMessage, initializateValidation, updateMessage, listMessage };