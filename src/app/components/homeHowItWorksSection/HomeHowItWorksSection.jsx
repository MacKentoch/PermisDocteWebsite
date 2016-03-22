'use strict';

import React                from 'react';
import GreySection          from '../../components/backgrounds/greySection/GreySection.jsx';
import InfoPanel            from './infoPanel/InfoPanel.jsx';
import YouTube              from 'react-youtube';
import {YouTubeIcon}        from '../icons';

class HomeHowItWorksSection extends React.Component {

  constructor(props) {
    super(props);
    this.init();
  }

  init() {
    this.state = {
      showVideo : false
    }
  }

  onShowVideoClick() {
    this.setState({
      showVideo : true
    });
  }

  onYouTubeReady(event) {
    event.target.pauseVideo();
  }

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

  renderYoutubePreview() {
    const youtubeOptions = {
      height: '390',
      width : '640',
      playerVars: {
        autoplay: 1
      }
    };
    const youtTubePreview = (
      <YouTube
        videoId="9aVWbTGrB3Y"
        opts={youtubeOptions}
        onReady={(e)=>this.onYouTubeReady(e)}
      />
    );
    return  youtTubePreview;
  }

  renderButtonShowYoutubePreview() {
    return (
      <button
        className="btn btn-primary center-block btnYoutubeIcon"
        onClick={() => this.onShowVideoClick()}>
        <p>
          Voir la démo
        </p>
        <YouTubeIcon />
      </button>
    );
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
        <div className="row">
          <h3 className="text-center homeHeaderSectionTitle youtubePreviewTitle">
            Aperçu vidéo :
            <hr className="homeHeaderSepTitle" />
          </h3>
          <div className="col-md-12">
            {this.state.showVideo ? this.renderYoutubePreview() : this.renderButtonShowYoutubePreview()}
          </div>
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
