'use strict';

import React from 'react';

const GreySection = (props) => {
  return (
    <section className="grey-section container-fluid">
      <div className="row">
        <div className="col-xs-12">
          {props.children}
        </div>
      </div>
    </section>
  );
};

GreySection.propTypes = {
  children : React.PropTypes.node
};

export default GreySection;
