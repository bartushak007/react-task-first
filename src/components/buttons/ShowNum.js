import React, { Component } from 'react';

class ShowNum extends Component {
  
  render() {
    let setClass = {},
     num = this.props.num;
    (num < 0) ? setClass = {color: 'red'} : (num > 0) ? setClass = {color: 'green'} : setClass = {color: 'black'};
      
    return (      
      <span className='count' style={setClass}> {num} </span>   
    );
  }
}

export default ShowNum;
