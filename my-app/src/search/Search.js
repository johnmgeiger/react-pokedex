import axios from 'axios'
import React, { useState } from 'react'
import "./Search.scss"

const Search = props => {

    const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/"
    const [searchName, setSearchName] = useState('')

    const callPokemon = async ev => {
        ev.preventDefault()

        try {
            if (!searchName)
                return

            const searchUrl = `${
                pokemonUrl
                }${
                encodeURI(searchName.toLowerCase())
                }/`

            const res = await axios.get(searchUrl)
            props.setData(res.data)
        } catch (err) {
            console.error(err);

            // hanldle error
            props.setData({
                failed: true,
                name: searchName
            })
        }
    }

    return (
        <form className="search" onSubmit={callPokemon}>
            <input  className="search__input" 
                    type="text" 
                    placeholder="Pokemon name..."
                    value={searchName}
                    onChange={ev => setSearchName(ev.target.value)} />
            <button className="search__button" type="submit">Go!</button>
        </form>
    )
}

export default Search