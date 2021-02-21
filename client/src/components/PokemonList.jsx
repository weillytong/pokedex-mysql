import React from 'react';
import axios from 'axios';
import Pokemon from './Pokemon.jsx'


const PokemonList = (props) => {
  return (
    <div>
      {/* {console.log('props.pokemon.List', props.pokemonList)} */}
      {props.pokemonList.map((pokemon, key) => {
        return (
          <div key={key}>
            <Pokemon pokemon={pokemon} getPokemon={props.getPokemon}/>
          </div>
        )
      })}
    </div>
  )
}


export default PokemonList