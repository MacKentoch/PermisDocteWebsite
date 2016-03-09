'use strict';

import React                from 'react';
import {
  PromisedTimeout
}                           from '../../services/PromisedTimeout';
import classNames           from 'classnames';

class CaracteristicsBox extends React.Component {
  constructor(props) {
    super(props);
    this.init();
  }

  init() {
    this.state = {
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
      'animated'      : this.state.startAnimation,
      'invisible'     : !this.state.startAnimation,
      'fadeInUp'      : this.state.startAnimation
    });
    return animClasses;
  }



  render() {
    const fontIconClass = `fa fa-2x ${this.props.fontIcon}`;
    return (
      <div
        style={{marginBottom : '20px'}}
        className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className={this.getAnimationClasses()}>
            <div className="text-center">
              <h1>
                <i className={fontIconClass} />
              </h1>
              <h2>
                {this.props.title}
              </h2>
              <h4>
                {this.props.detail}
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


CaracteristicsBox.propTypes = {
  fontIcon          : React.PropTypes.string.isRequired,
  title             : React.PropTypes.string.isRequired,
  detail            : React.PropTypes.string.isRequired,
  triggerAnimation  : React.PropTypes.bool,
  animationDelay    : React.PropTypes.number
};

CaracteristicsBox.defaultProps = {
  triggerAnimation  : false,
  animationDelay    : 1000
};

export default CaracteristicsBox;
