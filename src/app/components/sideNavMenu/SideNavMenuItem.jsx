'use strict';

import React                from 'react';
import { browserhistory }   from 'react-router';

const SideNavMenuItemStyle = {
  list: {
    height        : '40px',
    marginTop     : '25px',
    marginBottom  : '25px'
  },
  textItem: {
    marginLeft  : '10px',
    fontSize    : '18px'
  },
  fontIcon: {
    width     : '40px',
    color     : '#fff',
    fontSize  : '26px'
  }
};

class SideNavMenuItem extends React.Component {

  processClasses() {
    return this.props.fontIcon ? `fa ${this.props.fontIcon}` : '';
  }

  linkTo(event, there) {
    event.preventDefault();
    this.props.closeMenu();
    browserhistory.push(there);
  }

  render() {
    return (
      <li style={SideNavMenuItemStyle.list}>
        <i
          className={this.processClasses()}
          style={SideNavMenuItemStyle.fontIcon}
        />
      <a
        onClick={(e)=>this.linkTo(e, this.props.link)}
        style={SideNavMenuItemStyle.textItem}>
        {this.props.label}
      </a>
      </li>
    );
  }
}

SideNavMenuItem.propTypes = {
  fontIcon  : React.PropTypes.string.isRequired,
  link      : React.PropTypes.string.isRequired,
  label     : React.PropTypes.string.isRequired,
  closeMenu : React.PropTypes.func.isRequired
};

export default SideNavMenuItem;
