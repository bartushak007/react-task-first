import React from 'react';

const ShowButton = (props) => {
  const getData = () => {
    const get = new XMLHttpRequest();
    get.open(
      'GET',
      'https://tanuhaua.github.io/datas-file-json/visitors.json',
      true
    );
    get.addEventListener('load', () => {
      if (get.status === 200) {
        const jasonObj = JSON.parse(get.responseText);
        props.changeState({
          arr: jasonObj,
          toggle: false,
          total: jasonObj.length
        });
      }
    });
    get.send();
  }  
  
  return (<button onClick={getData}>button</button>);  
}

export default ShowButton;
