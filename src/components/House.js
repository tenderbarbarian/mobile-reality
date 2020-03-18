import React, { Component } from 'react';
import {connect} from 'react-redux';

class House extends Component {
  render() {
  return (
    <div>
      <h2>{this.props.house.address}</h2>
      <p>{this.props.house.owner}</p>
      <p>{this.props.house.price}</p>
      <p>{this.props.house.area}</p>
      {/* <button>Edit</button> */}
      <button 
      onClick={()=>this.props.dispatch({type:'DELETE_HOUSE',id:this.props.house.id})}>
      Delete</button>
    </div>
  );
 }
}
export default connect()(House);