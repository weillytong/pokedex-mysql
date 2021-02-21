import React from 'react';
import PokemonList from './PokemonList.jsx';
import axios from 'axios';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      page: 'showAll'
    }
    this.getPokemon = this.getPokemon.bind(this);
    this.handleShowAll = this.handleShowAll.bind(this);
  }

  getPokemon() {
    axios.get('/api')
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

  componentDidMount() {
    this.getPokemon();
  }

  handleShowAll() {
    console.log('entering handleShowAll')
    this.setState({
      page: 'showAll'
    })
  }


  render() {
    if (this.state.page === 'showAll') {
      return (
        <div>
          <h1>Weilly's Fullstack Pokedex!</h1>
          <button onClick={this.handleShowAll}>Show All</button>
          <select id="types">
            <option>Sort by Type</option>
            <option>Grass</option>
            <option>Fire</option>
            <option>Water</option>
          </select>
          <div>
            <PokemonList pokemonList={this.state.pokemon} getPokemon={this.getPokemon}/>
          </div>
        </div>
      )
    } else if (this.state.page === type /* may not be right */) {
      return (
        <div>

        </div>
      )

    }
  }
}








// const App = () => (
//   <div>
//     <h1>Fullstack Pokedex!</h1>
//     <button>Show All</button>
//     <select id="types">
//       <option>Sort by Type</option>
//       <option>Grass</option>
//       <option>Fire</option>
//       <option>Water</option>
//     </select>
//     <div>
//       <h3>Bulbasaur</h3>
//       <img src="http://vignette4.wikia.nocookie.net/nintendo/images/4/43/Bulbasaur.png/revision/latest?cb=20141002083518&path-prefix=en" />
//     </div>
//     <div>
//       <h3>Ivysaur</h3>
//       <img src="http://vignette3.wikia.nocookie.net/nintendo/images/8/86/Ivysaur.png/revision/latest?cb=20141002083450&path-prefix=en" />
//     </div>
//     <div>
//       <h3>Venusaur</h3>
//       <img src="http://vignette2.wikia.nocookie.net/nintendo/images/b/be/Venusaur.png/revision/latest?cb=20141002083423&path-prefix=en" />
//     </div>
//   </div>
// )

// export default App;