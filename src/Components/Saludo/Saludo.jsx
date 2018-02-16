import React from 'react';
import './Saludo.scss';
import { connect } from 'react-redux';

const Saludo = ({message}) => {

        return (
            <h3>{message}</h3>
        );
}

const mapStateToProps = state => {
    return {
        message: state.message
    };
};

export default connect(mapStateToProps)(Saludo);


