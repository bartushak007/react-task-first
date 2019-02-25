import React, { Component } from 'react';
import '../../index.css';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.changeCheckbox = this.changeCheckbox.bind(this);
    this.date = this.date.bind(this);    
  }

  changeCheckbox(e) {
    if (e.target.checked === true) {
      this.props.changeState({ wasChecked: this.props.wasChecked + 1 });
    } else {
      this.props.changeState({ wasChecked: this.props.wasChecked - 1 });
    }
  }

  date(createdAt) {
    const date = new Date(createdAt);
    return `${ date.getFullYear() }.${ date.getMonth() }.${ date.getDate() }`;
  }

  render() {
    return (
      <table>
        <tbody>
          {this.props.arr.map(elem => {
            const { id, name, description, createdAt, email } = elem;
            
            return (
              <tr key={ id }>
                <td onChange={ this.changeCheckbox }>
                  <input type='checkbox' />
                </td>
                <td>{ this.date(createdAt) }</td>
                <td>{ name }</td>
                <td>{ email }</td>
                <td>{ description }</td>
                <td>{ id }</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default UsersList;
