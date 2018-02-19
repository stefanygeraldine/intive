import React from 'react';
import './Form.scss';
import { connect } from 'react-redux';
import { updateMessage } from '../../actionCreators';

const VARS_FORM = { name: '', country: '', age: '' }
const ERROR_VARS_FORM = { nameError: '', countryError: '', ageError: '' }



export class Form extends React.Component {
    constructor() {
        super();
        this.change = this.change.bind(this);
        this.validate = this.validate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        ...VARS_FORM,
        ...ERROR_VARS_FORM
    };

    change (e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    validate = () => {

        let isError = false;
        const ERRORS = {
            ...ERROR_VARS_FORM
        };

        if (this.state.name === '') {
            isError = true;
            ERRORS.nameError = "Ingresa tu nombre";
        }
        if (this.state.country === '' || this.state.country.length === null) {
            isError = true;
            ERRORS.countryError = "Selecciona un país";
        }
        if (this.state.age === '') {
            isError = true;
            ERRORS.ageError = "Selecciona tu fecha de nacimiento";
        }

        this.setState({
            ...this.state,
            ...ERRORS
        });

        return isError;
    };

    onSubmit (e){
        e.preventDefault();
        const err = this.validate();
        if (!err) {
            // clear form
            this.setState({
                ...VARS_FORM,
                ...ERROR_VARS_FORM
            });
            this.change(e);
        }
    };

    render() {
        console.log(updateMessage);
        return (
           
            <div className="row form">
                <div className="col-xs-12 form__flex">
                    <label>Nombre</label>
                    <input className="form__input" name="name" value={this.state.name} onChange={e => this.change(e)} />
                    <label>{this.state.nameError}</label>
                </div>
                <div className="col-xs-12 form__flex">
                    <label>País</label>
                    <select className="form__select" name="country" value={this.state.country} onChange={e => this.change(e)}>
                        <option>País</option>
                        <option>País1</option>
                        <option>País2</option>
                    </select>
                    <label>{this.state.countryError}</label>
                </div>
                <div className="col-xs-12 form__flex">
                    <label>Edad</label>
                    <input type="date" className="form__input" name="age" value={this.state.age} onChange={e => this.change(e)} />
                    <label>{this.state.ageError}</label>
                </div>
                <div className="col-xs-12 end-xs">
                    <button className="form__button" onClick={(e)=> updateMessage(e)}>
                        Saludar
                    </button>
                </div>
            </div>
        );
    }
}





