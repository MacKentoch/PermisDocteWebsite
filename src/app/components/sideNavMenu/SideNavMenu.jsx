'use strict';

import React            from 'react';
import SideNavMenuItem  from './SideNavMenuItem.jsx';

class SideNavMenu extends React.Component {
  renderMenuItems() {
    const items = this.props.sideMenuItems.map((item, index) => {
      return (
        <SideNavMenuItem
          key={index}
          fontIcon={item.fontIcon}
          link={item.link}
          label={item.label}
          closeMenu={()=>this.props.closeMenu()}
        />
      );
    });
    return items;
  }

  render() {
    return (
      <ul className="list-unstyled">
        {this.renderMenuItems()}
      </ul>
    );
  }
}

SideNavMenu.propTypes = {
  brand         : React.PropTypes.string,
  sideMenuItems : React.PropTypes.arrayOf(
    React.PropTypes.shape({
      label     : React.PropTypes.string.isRequired,
      link      : React.PropTypes.string.isRequired,
      fontIcon  : React.PropTypes.string.isRequired
    })
  ).isRequired,
  closeMenu     : React.PropTypes.func.isRequired
};

SideNavMenu.defaultProps = {
  brand : 'brand'
};

export default SideNavMenu;
