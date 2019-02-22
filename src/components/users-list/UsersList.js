import React, { Component } from 'react';
import ShowButton from './ShowButton';
import ListElements from './ListElements';
import TotalMessage from './TotalMessage';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [], 
      toggle: true, 
      total: null, 
      wasChecked: 0
    };
    this.changeState = changeState.bind(this);
    this.changeComponents = changeComponents.bind(this);
  }

  render() {    
    return (
      <div>      
        {this.changeComponents()}
      </div> 
    );
  }
}
function changeState(e) {
    this.setState(e);    
  }

function changeComponents(){
  if(this.state.toggle) {
    return <ShowButton changeState={this.changeState} />;
  } else {
    return (
      <>
        <TotalMessage total={this.state.total} wasChecked={this.state.wasChecked}/>
        <ListElements arr={this.state.arr} wasChecked={this.state.wasChecked} changeState={this.changeState}/>
      </>
    );
  }
}


export default UsersList;