'use strict';

import React from 'react';

class EmailIcon extends React.Component {
  render() {
    return (
      <svg
        width="80px"
        height="80px"
        viewBox="0 0 512 512"
        fill="#2AA3EF"
        style={this.props.additionnalStyles} >
        <path d="M64,128v256h384V128H64z M256,267.9L93.2,144h325.6L256,267.9z M80,368V154.1l115.1,87.6L127,319l2,2l78.9-69.6L256,288 l48.1-36.6L383,321l2-2l-68.1-77.4L432,154.1V368H80z"/>
        </svg>
    );
  }
}

EmailIcon.propTypes = {
  additionnalStyles : React.PropTypes.object
};

export default EmailIcon;
