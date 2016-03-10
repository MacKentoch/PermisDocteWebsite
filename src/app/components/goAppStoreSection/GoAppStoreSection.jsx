'use strict';

import React              from 'react';
import BlackSection       from '../blackSection/BlackSection.jsx';
import { NumberTest }     from '../../services/NumberTest';

class GoAppStoreSection extends React.Component {

  renderStoresIcons() {
    if (this.props.storesImages.length === 1) {
      const store = this.props.storesImages[0];
      const imageClass = 'img-responsive storeIcon center-block';
      return (
        <div
          id="HeaderStoreIcons"
          className="row">
          <div
            key={store.name}
            className="col-xs-12">
            <img
              src={store.link}
              className={imageClass}
              alt={store.name}
            />
          </div>
        </div>
      );
    }

    const StoresImages = this.props.storesImages.map((store, index) => {
      let imageClass = 'img-responsive storeIcon';
      if (NumberTest.isEven(index)) {
        imageClass = `${imageClass} ${'pull-right'}`;
      } else {
        imageClass = `${imageClass} ${'pull-left'}`;
      }
      return (
        <div
          key={store.name}
          className="col-xs-6">
          <img
            src={store.link}
            className={imageClass}
            alt={store.name}
          />
        </div>
      );
    });

    return (
      <div
        id="HeaderStoreIcons"
        className="row">
        {StoresImages}
      </div>
    );
  }

  render() {
    return (
      <BlackSection id="goAppStoreSection">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center goAppStoreSectionTitle">
              {this.props.title}
              <hr className="carouselSepTitle" />
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            {this.renderStoresIcons()}
          </div>
        </div>
      </BlackSection>
    );
  }
}

GoAppStoreSection.propTypes = {
  title            : React.PropTypes.string.isRequired,
  triggerAnimation : React.PropTypes.bool,
  animationDelay   : React.PropTypes.number,
  storesImages     : React.PropTypes.arrayOf(React.PropTypes.shape({
    link  : React.PropTypes.string.isRequired,
    alt   : React.PropTypes.string.isRequired,
    name  : React.PropTypes.string.isRequired
  })).isRequired
};

GoAppStoreSection.defaultProps = {
  title             : '',
  triggerAnimation  : false,
  animationDelay    : 1000
};

export default GoAppStoreSection;
