'use strict';

import React from 'react';

const WhiteSection = (props) => {
  return (
    <section className="white-section">
      <div className="row">
        <div className="col-lg-12">
          {props.children}
        </div>
      </div>
    </section>
  );
};

WhiteSection.propTypes = {
  children : React.PropTypes.node
};

export default WhiteSection;
