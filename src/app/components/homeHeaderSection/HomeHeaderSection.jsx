'use strict';

import React              from 'react';
import { NumberTest }     from '../../services/NumberTest';
import GreySection        from '../../components/greySection/GreySection.jsx';
import { LinkIcon }       from '../icons';

class HomeHeaderSection extends React.Component {
  renderHeaderRightText() {
    return (
      <div id="headerRightText">
        <ul>
          <li>
            <h3 className={this.props.head1Class}>
              <strong>
                consulter le solde vos points
              </strong>
            </h3>
            <ul>
              <li>
                <h4 className={this.props.head11Class}>
                  n'importe où
                </h4>
              </li>
              <li>
                <h4 className={this.props.head12Class}>
                  facilement
                </h4>
              </li>
              <li>
                <h4 className={this.props.head12Class}>
                  Soyez déjà prêt avant l'application du&nbsp;
                  <strong>
                    décret n° 2015-1892
                  </strong>
                  &nbsp;qui entrera en vigueur le&nbsp;
                  <strong>
                    31 Octobre 2016
                  </strong> (
                    <a href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000031740926&dateTexte=&categorieLien=id">
                      <LinkIcon />
                      &nbsp;
                      site légifrance
                    </a>
                  )
                </h4>
              </li>
            </ul>
          </li>
          <li>
            <h3 className={this.props.head2Class}>
              <strong>
                apprenez les subtilités du permis à point
              </strong>
            </h3>
            <ul>
              <li>
                <h4 className={this.props.head21Class}>
                  sans faire d'effort
                </h4>
              </li>
            </ul>
          </li>
          <li>
            <h3 className={this.props.head3Class}>
              <strong>
                Une application vraiment "gratuite"
              </strong>
            </h3>
            <ul>
              <li>
                <h4 className={this.props.head31Class}>
                  Pas de publicité
                </h4>
              </li>
              <li>
                <h4 className={this.props.head32Class}>
                  Vos données restent strictement privées
                </h4>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }

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
      <GreySection id="headerSection">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center homeHeaderSectionTitle">
              {this.props.title}
              <hr className="homeHeaderSepTitle" />
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img
              src={this.props.imageIphoneHome.link}
              width={308}
              height={642}
              className="img-responsive center-block"
              alt={this.props.imageIphoneHome.name}
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

HomeHeaderSection.propTypes = {
  title            : React.PropTypes.string.isRequired,
  imageIphoneHome  : React.PropTypes.shape({
    link  : React.PropTypes.string.isRequired,
    alt   : React.PropTypes.string.isRequired,
    name  : React.PropTypes.string.isRequired
  }).isRequired,
  storesImages  : React.PropTypes.arrayOf(React.PropTypes.shape({
    link  : React.PropTypes.string.isRequired,
    alt   : React.PropTypes.string.isRequired,
    name  : React.PropTypes.string.isRequired
  })).isRequired,
  triggerAnimation : React.PropTypes.bool,
  animationDelay   : React.PropTypes.number,
  head1Class       : React.PropTypes.string,
  head11Class      : React.PropTypes.string,
  head12Class      : React.PropTypes.string,
  head2Class       : React.PropTypes.string,
  head21Class      : React.PropTypes.string,
  head3Class       : React.PropTypes.string,
  head31Class      : React.PropTypes.string,
  head32Class      : React.PropTypes.string
};

HomeHeaderSection.defaultProps = {
  title             : '',
  triggerAnimation  : false,
  animationDelay    : 1000,
  head1Class        : '',
  head11Class       : '',
  head12Class       : '',
  head2Class        : '',
  head21Class       : '',
  head3Class        : '',
  head31Class       : '',
  head32Class       : ''
};

export default HomeHeaderSection;
