import React from 'react';
import axios from 'axios';
// import Type from './Type.jsx'


export default class TypeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      // onChange on the select tag but the options value is what is passed as e.target.value
      <select id="types" onChange={this.props.handleTypeChange}>
        {this.props.typeList.map((type, key) => {
          return (
            <option value={type.type} key={key}>
              {type.type}
            </option>
          )
        })}
      </select>
    )
  }
}


// const TypeList = (props) => {
//   return (
//     // <option>
//     //   {console.log('props.typeList', props.typeList)}
//     // </option>
//     <select>
//       {props.typeList.map((type, key) => {
//         return (
//           <option key={key}>
//             {/* {console.log('type', type)} */}
//             {type.type}
//           </option>
//         )
//       })}
//     </select>
//   )
// }

// export default TypeList

