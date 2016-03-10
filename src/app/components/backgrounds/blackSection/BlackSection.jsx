'use strict';

import React from 'react';

const BlackSection = (props) => {
  const customStyle = {
    paddingTop    : props.overridePaddingTop,
    paddingBottom : props.overridePaddingBottom
  };

  return (
    <div
      style={customStyle}
      className="black-section">
      <div className="containersCustom">
          {props.children}
      </div>
    </div>
  );
};

BlackSection.propTypes = {
  children               : React.PropTypes.node,
  overridePaddingTop     : React.PropTypes.string,
  overridePaddingBottom  : React.PropTypes.string
};

BlackSection.defaultProps  ={
  overridePaddingTop    : '40px',
  overridePaddingBottom : '40px'
};

export default BlackSection;
