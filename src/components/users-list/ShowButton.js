import React, { Component } from 'react';

class ShowButton extends Component {
  render() {
    return <button onClick={getData.bind(this)}>button</button>;
  }
}

function getData() {
  const get = new XMLHttpRequest();
  get.open(
    'GET',
    'https://tanuhaua.github.io/datas-file-json/visitors.json',
    true
  );
  get.addEventListener('load', () => {
    if (get.status === 200) {
      const jasonObj = JSON.parse(get.responseText);
      this.props.changeState({
        arr: jasonObj,
        toggle: false,
        total: jasonObj.length
      });
    }
  });
  get.send();
}

export default ShowButton;
