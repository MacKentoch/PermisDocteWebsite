'use strict';

import React from 'react';

class SocialContainer extends React.Component {
  render() {
    return (
      <div className="socialContainer">
        {this.props.children}
      </div>
    );
  }
}

SocialContainer.propTypes = {
  children          : React.PropTypes.node
};

export default SocialContainer;
