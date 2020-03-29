import React from 'react';

import './Spinner.css';

const Spinner = () => {
  return (
    <div className="rnd-planet">
      <div className="lds-double-ring">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
