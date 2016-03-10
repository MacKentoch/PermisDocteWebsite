'use strict';

import React from 'react';

const DarkGreySection = (props) => {
  return (
    <div className="dark-grey-section">
      <div className="containersCustom">
        {props.children}
      </div>
    </div>
  );
};

DarkGreySection.propTypes = {
  children : React.PropTypes.node
};

export default DarkGreySection;
