import Pokedex from './Pokedex'
import React from 'react'


import './Pokemon.scss';


const Pokemon = props => {
    return (
        <div className="pokemon">
            {
                props.data && props.data.failed ?
                <h3 className="pokemon__error-msg">
                     Failed search for {props.data.name}. Try again.
                </h3> :
                null
            }

            <Pokedex data={props.data} />
        </div>
    )
}

export default Pokemon;
