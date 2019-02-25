import React from 'react';

const TotalMessage = (props) => {
  return (
    <div>
      <h3>Total: { props.total }</h3>
      <h3>Checked: { props.wasChecked }</h3>
    </div>
  );
};

export default TotalMessage;
