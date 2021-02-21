import React from 'react';
import axios from 'axios';

export default class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpdating: false,
      name: '',
      type: '',
      img: ''
    }
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpdate() {
    this.setState({
      isUpdating: !this.state.isUpdating
    }, () => {
      console.log(this.state.isUpdating)
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      console.log(this.state)
    })
  }

  handleSubmit(id, e) {
    e.preventDefault()
    // Patch to change name in database
    axios.patch(`/api/${id}`, {
      name: this.state.name
    })
      .then((results) => {
        window.alert('Changed Pokemon name')
        this.setState({
          name: this.state.name
        })
        this.props.getPokemon();
        this.handleUpdate();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    if (this.state.isUpdating) {
      return (
        <div>
          {console.log('this.props.pokemon', this.props.pokemon)}
          <form onSubmit={(e) => this.handleSubmit(this.props.pokemon.id, e)}>
            <label>
              <input placeholder={this.props.pokemon.name} name='name' onChange={this.handleChange}/>
            </label>
            <button> Change Name </button>
            <button> Delete</button>
            <button onClick={this.handleUpdate}> Cancel </button>
          </form>
          <img src={this.props.pokemon.img}/>
        </div>
      )
    } else {
      return (
        <div>
          {/* {console.log(this.props)} */}
          <div>
            {this.props.pokemon.name}
            <button onClick={this.handleUpdate}> Edit </button>
          </div>
          <img src={this.props.pokemon.img}/>
        </div>
      )
    }
  }
}