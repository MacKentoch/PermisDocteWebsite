'use strict';

import React                from 'react';
import GreySection          from '../../components/greySection/GreySection.jsx';
import InfoPanel            from '../infoPanel/InfoPanel.jsx';

class HomeHowItWorksSection extends React.Component {

  renderInfoPanels() {
    const InfoPanels = this.props.HowItWorksModel.map((info, infoIndex) =>{
      return (
        <InfoPanel
          id={'infoPanel' + infoIndex}
          key={'infoPanel' + infoIndex + 'container'}
          title={info.title}
          infoDetails={info.content}
          triggerAnimation={this.props.triggerAnimation}
          animationDelay={this.props.animationDelay + (infoIndex * 100) + 300}
        />
      );
    });
    return InfoPanels;
  }

  render() {
    return (
      <GreySection id="HomeHowItWorksSection">
        <div className="row HomeHowItWorksSection">
          <div className="col-md-12">
            <h1 className="text-center homeHeaderSectionTitle">
              {this.props.title}
              <hr className="homeHeaderSepTitle" />
            </h1>
          </div>
          {this.renderInfoPanels()}
        </div>
      </GreySection>
    );
  }
}

HomeHowItWorksSection.propTypes = {
  title            : React.PropTypes.string.isRequired,
  triggerAnimation : React.PropTypes.bool,
  animationDelay   : React.PropTypes.number,
  HowItWorksModel  : React.PropTypes.arrayOf(
      React.PropTypes.shape({
        title   : React.PropTypes.string.isRequired,
        content : React.PropTypes.arrayOf(
          React.PropTypes.shape({
            text : React.PropTypes.string.isRequired,
            type : React.PropTypes.string.isRequired
          })
        ).isRequired
      })
    ).isRequired
};

HomeHowItWorksSection.defaultProps = {
  title             : '',
  triggerAnimation  : false,
  animationDelay    : 1000
};

export default HomeHowItWorksSection;
