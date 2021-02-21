import React from 'react';
import PokemonList from './PokemonList.jsx';
import TypeList from './TypeList.jsx';
import axios from 'axios';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      type: [],
      selectedType: ''
    }
    this.getPokemon = this.getPokemon.bind(this);
    this.getType = this.getType.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
  }

  getPokemon() {
    axios.get('/api/pokemon')
      .then((results) => {
        this.setState({
          pokemon: results.data
        }/*, () => {
          console.log(this.state)
        }*/)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  getType() {
    axios.get('/api/type')
      .then((results) => {
        this.setState({
          type: results.data
        }, () => {
          console.log(this.state)
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.getPokemon();
    this.getType();
  }


  handleTypeChange(e) {
    // After setting the state, the callback invokes get request on that selected Type
    this.setState({
      selectType: e.target.value
    }, () => {
      console.log(this.state.selectType)
      axios.get(`/api/${this.state.selectType}`)
        .then((results) => {
          this.setState({
            pokemon: results.data
          })
        })
        .catch((err) => {
          console.log(err);
        })
    })
  }


  render() {
    return (
      <div>
        <h1>Weilly's Fullstack Pokedex!</h1>
        <button onClick={this.getPokemon}>Show All</button>
        <TypeList typeList={this.state.type} handleTypeChange={this.handleTypeChange}/>
        <div>
          <PokemonList pokemonList={this.state.pokemon} getPokemon={this.getPokemon}/>
        </div>
      </div>
    )
  }
}

