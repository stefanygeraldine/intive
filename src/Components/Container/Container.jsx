import React from 'react';
import './Container.scss';
import Form from '../Form/Form';
import Saludo from '../Saludo/Saludo';
import List from '../List/List';

const Container = () => {
    return (
        <div className="container">
            <div className="row center-xs">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <h1>Ejercicio Intive</h1>
                    <h2>Nombre: Stefany Carballo</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <Form />
                    <Saludo />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                   <List />
                </div>
            </div>
        </div>
    );
}

export default Container;
