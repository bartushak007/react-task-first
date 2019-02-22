import React, { Component } from 'react';
import ShowNum from './ShowNum';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.addNum = addNum.bind(this);
    this.removeNum = removeNum.bind(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.removeNum}>-</button>
        <ShowNum num={this.state.count} />
        <button onClick={this.addNum}>+</button>
      </div>
    );
  }
}

function addNum() {
  this.setState(state => {
    let count = +state.count + 1;
    return {count: count};
  });
}

function removeNum() {
  this.setState(state => {
    let count = +state.count - 1;
    return {count: count};
  });
}

export default Buttons;
