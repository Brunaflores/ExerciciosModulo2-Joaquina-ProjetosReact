import React from 'react';
import propTypes from 'prop-types';

const apresentacao= ({nome,idade}) => {

    

    return (

        <div>
            <p>Sou a {nome}!</p>
            <p>Tenho {idade} anos.</p>

        </div>

    )

}

apresentacao.propTypes = {

    nome: propTypes.string.isRequired,
    idade: propTypes.number.isRequired
}
export default apresentacao;