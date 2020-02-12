import Pokemon from './pokemon/Pokemon'
import React, { useState } from 'react'
import Search from './search/Search'

import './App.scss';


function App() {

  const [pokeData, setPokeData] = useState()

  return (
    <div className="app">
      <div className="app__container">
        <h1 className="app__header">Pokedex Search!</h1>
        <Search setData={setPokeData} />
        <Pokemon data={pokeData} />
      </div>
    </div>
  )
}

export default App;
