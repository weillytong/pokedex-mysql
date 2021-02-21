import React from 'react';
import axios from 'axios';

export default class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      img: ''
    }
  }

  render() {
    return (
      <div>
        {/* {console.log(this.props.pokemon)} */}
        <div>
          {this.props.pokemon.name}
        </div>
        <img src={this.props.pokemon.img}/>
      </div>
    )
  }
}