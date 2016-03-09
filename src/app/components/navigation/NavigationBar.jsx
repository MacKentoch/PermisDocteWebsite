'use strict';

import React            from 'react';
import Scroll           from 'react-scroll';

const Link    = Scroll.Link;

class NavigationBar extends React.Component {

  renderHumburger() {
    return (
      <button
        className="navbar-toggle collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#bs-example-navbar-collapse-1">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    );
  }

  renderBrand() {
    if (this.props.navModel.brand) {
      const brandModel = this.props.navModel.brand;
      return (
        <Link
          className="navbar-brand"
          to={brandModel.scrollTo ? brandModel.scrollTo : ''}
          spy={brandModel.spy}
          smooth={brandModel.smooth}
          duration={brandModel.duration} >
          {brandModel.label ? brandModel.label : 'brand'}
        </Link>
      );
    }
    return null;
  }

  renderLeftNavButton() {
    if (this.props.navModel.leftLinks) {
      const leftNavButton = this.props.navModel.leftLinks.map((aLinkBtn, index) => {
        return (
          <li key={index}>
            <Link
              activeClass="active"
              to={aLinkBtn.scrollTo}
              spy={aLinkBtn.spy}
              smooth={aLinkBtn.smooth}
              duration={aLinkBtn.duration}>
              {aLinkBtn.label}
            </Link>
          </li>
        );
      });
      return  leftNavButton;
    }
    return null;
  }

  renderRightNavButton() {
    if (this.props.navModel.rightLinks) {
      const rightNavButton = this.props.navModel.rightLinks.map((aLinkBtn, index) => {
        return (
          <li key={index}>
            <Link
              activeClass="active"
              to={aLinkBtn.scrollTo}
              spy={aLinkBtn.spy}
              smooth={aLinkBtn.smooth}
              duration={aLinkBtn.duration}>
              {aLinkBtn.label}
            </Link>
          </li>
        );
      });
      return  rightNavButton;
    }
    return null;
  }

  render() {
    return (
      <nav className={this.props.cssClass}>
        <div className="containersCustom">
          <div className="navbar-header">
            {this.renderHumburger()}
            {this.renderBrand()}
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              {this.renderLeftNavButton()}
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {this.renderRightNavButton()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

NavigationBar.propTypes = {
  cssClass : React.PropTypes.string.isRequired,
  navModel : React.PropTypes.shape({

    brand    : React.PropTypes.shape({
      label   : React.PropTypes.string.isRequired,
      link    : React.PropTypes.string.isRequired,
      scrollTo: React.PropTypes.string.isRequired,
      spy     : React.PropTypes.bool.isRequired,
      smooth  : React.PropTypes.bool.isRequired,
      duration: React.PropTypes.number.isRequired
    }).isRequired,

    leftLinks : React.PropTypes.arrayOf(
      React.PropTypes.shape({
        label : React.PropTypes.string.isRequired,
        link  : React.PropTypes.string.isRequired,
        scrollTo: React.PropTypes.string.isRequired,
        spy     : React.PropTypes.bool.isRequired,
        smooth  : React.PropTypes.bool.isRequired,
        duration: React.PropTypes.number.isRequired
      })
    ).isRequired,

    rightLinks : React.PropTypes.arrayOf(
      React.PropTypes.shape({
        label : React.PropTypes.string.isRequired,
        link  : React.PropTypes.string.isRequired,
        scrollTo: React.PropTypes.string.isRequired,
        spy     : React.PropTypes.bool.isRequired,
        smooth  : React.PropTypes.bool.isRequired,
        duration: React.PropTypes.number.isRequired
      })
    ).isRequired
  })
};

export default NavigationBar;
