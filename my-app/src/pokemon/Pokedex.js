import React from 'react'


import './Pokedex.scss';


const Screen = props => {
    if (!props.data) return null
    
    const data = props.data

    const getAttribute = (key, name, unit, render) => {
        if (!data[key])
            return null 

        try {
            return (
                <div className="pokedex__screen-row">
                    <span className="pokedex__screen-key">{name}:</span>
                    <span className="pokedex__screen-value">
                        {
                            render && data[key] ?
                                render(data[key]) :
                                data[key]
                        } { unit ? unit : null }
                    </span>
                </div>
            )
        } catch (err) {
            return null
        }
        
    }

    return (
        <>
            <h3 className="pokedex__screen-header">
                {
                    data.name && !data.failed ?
                    data.name :
                    null
                }
            </h3>

            {getAttribute("id", "Number")}
            {getAttribute("height", "Height", "ft.")}
            {getAttribute("weight", "Weight", "lbs.")}
            {getAttribute("types", "Types", '', types => types.map(t => t.type.name).join(', '))}
            {getAttribute("abilities", "Abilities",  '', ability => ability.map(a => a.ability.name).join(', '))}
        </>
    )
}
const Pokedex = props => {
    const data = props.data

    const getPokeImage = () =>  data && data.sprites ?
                                <img className="pokedex__image" src={data.sprites.front_default} alt="pokemon" /> :
                                <div className="pokedex__image" />

    return (
        <div className="pokedex">
            <div className="pokedex__container pokedex__container--left">
                <div className="pokedex__top pokedex__top--left">
                    <div className="pokedex__camera" />
                </div>
                <div className="pokedex__top pokedex__top--right">
                    <div className="pokedex__dot pokedex__dot--red" />
                    <div className="pokedex__dot pokedex__dot--yellow" />
                    <div className="pokedex__dot pokedex__dot--green" />
                </div>
                <div className="pokedex__image-container">
                    {getPokeImage()}
                </div>
            </div>
            <div className="pokedex__container pokedex__container--right">
                <div className="pokedex__screen">
                    <Screen data={props.data} />
                </div>
            </div>
        </div>
    )
}

export default Pokedex;
