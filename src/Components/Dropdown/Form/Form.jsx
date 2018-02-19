import React from 'react';
import './Form.scss';
import Dropdown from '../Dropdown/Dropdown';
import { connect } from 'react-redux';
import { updateMessage } from '../../actionCreators';

const Form = ({ validation, updateMessage, countries }) => {
    return (
        <div className="row form">
            <div className="col-xs-12 form__flex">
                <div>
                    <label className="form__label--title">Nombre</label>
                </div>
                <div className="form__flex--colum">
                    <input className="form__input" name="name" value={validation.name} onChange={e => validation.change(e, validation)} />
                    <label className="form__label--error">{validation.nameError}</label>
                </div>
            </div>
            <div className="col-xs-12 form__flex">
                <div>
                    <label className="form__label--title">País</label>
                </div>
                <div className="form__flex--colum">
                <Dropdown />
                    <label className="form__label--error">{validation.countryError}</label>
                </div>
            </div>
            <div className="col-xs-12 form__flex">
                <div>
                    <label className="form__label--title">Edad</label>
                </div>
                <div className="form__flex--colum">
                    <input type="date" className="form__input" name="age" value={validation.age} onChange={e => validation.change(e, validation)} />
                    <label className="form__label--error">{validation.ageError}</label>
                </div>
            </div>
            <div className="col-xs-12 end-xs">
                <button className="form__button" onClick={() => updateMessage(validation)}>
                    Saludar
                    </button>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        validation: state.validation,
        countries: state.countries
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateMessage(message) {
            dispatch(updateMessage(message))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);


