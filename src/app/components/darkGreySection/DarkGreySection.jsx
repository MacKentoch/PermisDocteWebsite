'use strict';

import React from 'react';

const DarkGreySection = (props) => {
  return (
    <section className="dark-grey-section ">
      <div className="row">
        <div className="col-xs-12">
          {props.children}
        </div>
      </div>
    </section>
  );
};

DarkGreySection.propTypes = {
  children : React.PropTypes.node
};

export default DarkGreySection;
