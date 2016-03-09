'use strict';

import React          from 'react';

class HeaderRightText extends React.Component {

  render() {
    return (
      <div id="headerRightText">
        <div className="page-header">
          <h1>
            <b>
              PermisDocte
            </b>
          </h1>
        </div>
        <ul>
          <li>
            <h3 className={this.props.textHead1Classes}>
              consulter le solde vos points
            </h3>
            <ul>
              <li>
                <h4 className={this.props.textSub11Classes}>
                  n'importe où
                </h4>
              </li>
              <li>
                <h4 className={this.props.textSub12Classes}>
                  facilement
                </h4>
              </li>
            </ul>
          </li>
          <li>
            <h3 className={this.props.textHead2Classes}>
              apprenez les subtilités du permis à point
            </h3>
            <ul>
              <li>
                <h4 className={this.props.textSub21Classes}>
                  sans faire d'effort
                </h4>
              </li>
            </ul>
          </li>
          <li>
            <h3 className={this.props.textHead3Classes}>
              Une application vraiment "gratuite"
            </h3>
            <ul>
              <li>
                <h4 className={this.props.textSub31Classes}>
                  Pas de publicité
                </h4>
              </li>
              <li>
                <h4 className={this.props.textSub32Classes}>
                  Vos données restent strictement privées
                </h4>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

HeaderRightText.propTypes = {
  textHead1Classes : React.PropType.string.isRequired,
  textSub11Classes : React.PropType.string.isRequired,
  textHead2Classes : React.PropType.string.isRequired,
  textSub12Classes : React.PropType.string.isRequired,
  textSub21Classes : React.PropType.string.isRequired,
  textHead3Classes : React.PropType.string.isRequired,
  textSub31Classes : React.PropType.string.isRequired,
  textSub32Classes : React.PropType.string.isRequired,
  imageHeight : React.PropType.number,
  imageWidth  : React.PropType.number
};

HeaderRightText.defaultProps = {
  imageHeight : 642,
  imageWidth  : 308
};

export default HeaderRightText;
