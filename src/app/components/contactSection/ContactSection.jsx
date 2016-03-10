'use strict';

import React            from 'react';
import GreySection      from '../greySection/GreySection.jsx';
import {
  EmailIcon, 
  TwitterIcon
}                       from '../icons';
import SocialContainer  from '../socialContainer/SocialContainer.jsx';

class ContactSection extends React.Component {

  render() {
    return (
      <GreySection >
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center contactSectionTitle">
              {this.props.title}
              <hr className="contactSepTitle" />
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <div className="pull-right">
              <SocialContainer>
                <a href={this.props.mailBox ? 'mailto:' + this.props.mailBox : '#'}>
                  <EmailIcon additionnalStyles={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                </a>
              </SocialContainer>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="pull-left">
              <SocialContainer>
                <a href={this.props.twitterLink ? this.props.twitterLink : '#'}>
                  <TwitterIcon additionnalStyles={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                </a>
              </SocialContainer>
            </div>
          </div>
        </div>
      </GreySection>
    );
  }
}

ContactSection.propTypes = {
  title            : React.PropTypes.string.isRequired,
  mailBox          : React.PropTypes.string,
  twitterLink      : React.PropTypes.string,
  triggerAnimation : React.PropTypes.bool,
  animationDelay   : React.PropTypes.number
};

ContactSection.defaultProps = {
  title             : '',
  triggerAnimation  : false,
  animationDelay    : 1000
};

export default ContactSection;
// ref={ref => {this.contactSectionRef = ref} }
