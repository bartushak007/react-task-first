import React, { Component } from 'react';
import '../../index.css'
class UsersList extends Component {
  constructor(props) {
    super(props);
    this.changeCheckbox = changeCheckbox.bind(this);
  }

  render() {
    return (
      <table>
        <tbody>
          {this.props.arr.map(elem => {
            const { id, name, description, createdAt, email } = elem;
            
            return (
              <tr key={id}>
                <td onChange={this.changeCheckbox}>
                  <input type='checkbox' />
                </td>
                <td>{date(createdAt)}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{description}</td>
                <td>{id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

function date(createdAt) {
  const date = new Date(createdAt);
  return `${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`;
}

function changeCheckbox(e) {
  if (e.target.checked === true) {
    this.props.changeState({ wasChecked: this.props.wasChecked + 1 });
  } else {
    this.props.changeState({ wasChecked: this.props.wasChecked - 1 });
  }
}

export default UsersList;
