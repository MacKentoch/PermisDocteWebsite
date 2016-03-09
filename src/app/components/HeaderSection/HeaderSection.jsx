'use strict';

import React          from 'react';
import GreySection    from '../components/greySection/GreySection.jsx';

class HeaderSection extends React.Component {

  render() {
    return (
      <GreySection id="headerSection">
        <div className="row">
          <div className="col-md-6">
            <img
              src={this.props.image.link}
              width={this.props.imageWidth}
              height={this.props.imageHeight}
              className="img-responsive center-block"
              alt={this.props.image.name}
            />
          </div>
          <div className="col-md-6">
            {this.renderHeaderRightText()}
          </div>
        </div>
        {this.renderStoresIcons()}
      </GreySection>
    );
  }
}

HeaderSection.propTypes = {
  image  : React.PropType.shape({
    name  : React.PropType.string.isRequired,
    ext   : React.PropType.string.isRequired,
    link  : React.PropType.string.isRequired
  }).isRquired,
  imageHeight : React.PropType.number,
  imageWidth  : React.PropType.number,
};

HeaderSection.defaultProps = {
  imageHeight : 642,
  imageWidth  : 308
};

export default HeaderSection;
