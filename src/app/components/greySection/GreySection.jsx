'use strict';

import React from 'react';

const GreySection = (props) => {
  return (
    <section className="grey-section">
      <div className="row">
        <div className="col-lg-12">
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
