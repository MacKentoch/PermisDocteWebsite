import React                from 'react';
import { MorphReplace }     from 'react-svg-morph';
import {
  ExpandMore,
  ExpandLess
}                           from '../icons';
import { Collapse }         from 'react-bootstrap';
import { PromisedTimeout }  from '../../services/PromisedTimeout';
import classNames           from 'classnames';

class InfoPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled : false,
      startAnimation : false
    };
  }

  componentWillMount() {
    this.setState({
      startAnimation : this.props.triggerAnimation
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.triggerAnimation) {
      this.processAnimation();
    }
  }

  processAnimation() {
    PromisedTimeout
      .delay(this.props.animationDelay)
      .then(() => {
        this.setState({
          startAnimation : true
        });
      });
  }

  getAnimationClasses() {
    let animClasses = classNames({
      'bg-primary'          : true,
      'howToTitleContainer' : true,
      'animated'            : this.state.startAnimation,
      'invisible'           : !this.state.startAnimation,
      'fadeInLeft'          : this.state.startAnimation
    });
    return animClasses;
  }

  togglePanel() {
    this.setState({
      isToggled : !this.state.isToggled
    });
  }

  renderDetails() {
    const textContent = this.props.infoDetails.map((val, index) => {
      if (val.type === 'span') {
        return (
          <h4 key={index}>
            {val.text}
          </h4>
        );
      }
      if (val.type === 'superlink') {
        return (
          <a
            href={val.text}
            key={index} >
            <h4 >
              {val.text}
            </h4>
          </a>
        );
      }
      return (
        <h4 key={index}>&nbsp;</h4>
      );
    });

    return (
      <div>
        {textContent}
      </div>
    );
  }

  render() {
    const IdentPanelIcon    = this.state.isToggled ? (<ExpandLess key={this.props.id + 'ExpandLess'} />) : (<ExpandMore key={this.props.id + 'ExpandMore'} />);
    const RotationAnimation = this.state.isToggled ? 'clockwise' : 'counterclock';
    const InfoDetails       = this.renderDetails();
    return (
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div
            className={this.getAnimationClasses()}
            onClick={()=>this.togglePanel(this.props.id)}>
            <div
              className="row">
              <div className="col-xs-10">
                <div className="row">
                  <div className="col-xs-12 howToTitleSubContainer">
                    <span className="howToTitle">
                      {this.props.title}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xs-2">
                <div className="pull-right">
                  <MorphReplace
                    className="expandCollapseIcon"
                    width={48}
                    height={48}
                    rotation={RotationAnimation}>
                    {IdentPanelIcon}
                  </MorphReplace>
                </div>
              </div>
            </div>
            <Collapse in={this.state.isToggled}>
              <div>
                <div
                  className="well"
                  style={{color: '#22313F', marginBottom:'0px'}}>
                  {InfoDetails}
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    );
  }
}

InfoPanel.propTypes = {
  id                    : React.PropTypes.string.isRequired,
  title                 : React.PropTypes.string.isRequired,
  triggerAnimation      : React.PropTypes.bool,
  animationDelay        : React.PropTypes.number,
  infoDetails           : React.PropTypes.arrayOf(
    React.PropTypes.shape({
      text : React.PropTypes.string.isRequired,
      type : React.PropTypes.string.isRequired
    })
  ).isRequired
};

InfoPanel.defaultProps = {
  triggerAnimation  : false,
  animationDelay    : 1000
};

export default InfoPanel;
