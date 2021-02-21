// * DONT USE THIS


import React from 'react';
import axios from 'axios';

export default class Type extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  render() {
    return (
      <div>
        {console.log('this.props.type', this.props.type.type)}
        {this.props.type.type}
      </div>
    )
  }
}