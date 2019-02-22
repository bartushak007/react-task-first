import React, { Component } from 'react';

class TotalMessage extends Component {
  render() {    
    return (
      <div>
        <h3>Total: {this.props.total}</h3> 
        <h3>Checked: {this.props.wasChecked}</h3> 
      </div>
    );
  }
}

export default TotalMessage;