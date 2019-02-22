import React, { Component } from 'react';
import Buttons from './components/buttons/Buttons';
import UsersList from './components/users-list/UsersList';
class App extends Component {
  render() {
    return (
      <>      
        <Buttons/>
        <UsersList/>  
      </> 
    );
  }
}

export default App;
