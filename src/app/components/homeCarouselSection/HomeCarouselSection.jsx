'use strict';

import React              from 'react';
import BlackSection       from '../backgrounds/blackSection/BlackSection.jsx';
import ImagesCarousel     from './imagesCarousel/ImagesCarousel.jsx';
import CaracteristicsBox  from './caracteristicsBox/CaracteristicsBox.jsx';

class HomeCarouselSection extends React.Component {

  render() {
    const {
      title,
      carousel,
      ...rest
    } = this.props;
    const PRISE_EN_MAIN_DETAIL  = `Le but de l'application est jsutement de simplifier la consultation du solde des points du permis`;
    const GRATUIT_SANS_PUB      = `Une aplication vraiment gratuite c'est à dire sans publicité ou tout autre détail habituellement agaçant des applications gratuites.`;
    const BON_A_SAVOIR_DETAIL   = `L'application donne des "petits tuyaux" toujours bon à savoir sur le permis de consuire`;
    return (
      <BlackSection id="homeCarouselSection">
        <div className="container-fluid containersCustom">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center carouselSectionTitle">
                {title}
                <hr className="carouselSepTitle" />
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <CaracteristicsBox
                fontIcon={'fa-money'}
                title={'GRATUIT'}
                detail={GRATUIT_SANS_PUB}
                triggerAnimation={this.props.triggerAnimation}
                animationDelay={this.props.animationDelay}
              />
              <CaracteristicsBox
                fontIcon={'fa-user-secret'}
                title={'VOS DONNEES RESTENT PRIVEES'}
                detail={'Toutes vos données restent stockées dans votre appareil seulement. Vous pouvez les effacer quand bon vous semble.'}
                triggerAnimation={this.props.triggerAnimation}
                animationDelay={this.props.animationDelay}
              />
            </div>
            <div className="col-md-4">
              <ImagesCarousel carousel={carousel} />
            </div>
            <div className="col-md-4">
              <CaracteristicsBox
                fontIcon={'fa-hand-peace-o'}
                title={'PRISE EN MAIN SIMPLE'}
                detail={PRISE_EN_MAIN_DETAIL}
                triggerAnimation={this.props.triggerAnimation}
                animationDelay={this.props.animationDelay}
              />
              <CaracteristicsBox
                fontIcon={'fa-graduation-cap'}
                title={'BON A SAVOIR'}
                detail={BON_A_SAVOIR_DETAIL}
                triggerAnimation={this.props.triggerAnimation}
                animationDelay={this.props.animationDelay}
              />
            </div>
          </div>
        </div>
      </BlackSection>
    );
  }
}

HomeCarouselSection.propTypes = {
  title     : React.PropTypes.string.isRequired,
  carousel  : React.PropTypes.arrayOf(React.PropTypes.shape({
    link  : React.PropTypes.string.isRequired,
    alt   : React.PropTypes.string.isRequired,
    name  : React.PropTypes.string.isRequired
  })).isRequired,
  triggerAnimation : React.PropTypes.bool,
  animationDelay   : React.PropTypes.number
};

HomeCarouselSection.defaultProps = {
  title             : '',
  triggerAnimation  : false,
  animationDelay    : 1000
};

export default HomeCarouselSection;
