'use strict';

import React from 'react';

const BlackSection = (props) => {
  const customStyle = {
    paddingTop    : props.overridePaddingTop,
    paddingBottom : props.overridePaddingBottom
  };

  return (
    <section
      style={customStyle}
      className="black-section">
      <div className="row">
        <div className="col-lg-12">
          {props.children}
        </div>
      </div>
    </section>
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
}

export default BlackSection;
