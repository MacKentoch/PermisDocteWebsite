'use strict';

import React from 'react';

const GreySection = (props) => {
  return (
    <div className="grey-section">
      <div className="container-fluid">
        {props.children}
      </div>
    </div>
  );
};

GreySection.propTypes = {
  children : React.PropTypes.node
};

export default GreySection;
